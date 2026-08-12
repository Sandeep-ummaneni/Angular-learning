import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeDate'
})
export class RelativeDatePipe implements PipeTransform {
  private readonly relativeFormatter = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto'
  });

  transform(value: string | Date | null | undefined): string {
    if (!value) {
      return '';
    }

    const target = this.toLocalDate(value);

    if (Number.isNaN(target.getTime())) {
      return '';
    }

    const now = this.toLocalDate(new Date());
    const diffDays = Math.round(
      (target.getTime() - now.getTime()) / 86400000
    );

    if (diffDays === 0) {
      return 'Today';
    }

    const absDays = Math.abs(diffDays);

    if (absDays < 7) {
      return this.relativeFormatter.format(diffDays, 'day');
    }

    if (absDays < 30) {
      return this.relativeFormatter.format(
        Math.round(diffDays / 7),
        'week'
      );
    }

    if (absDays < 365) {
      return this.relativeFormatter.format(
        Math.round(diffDays / 30),
        'month'
      );
    }

    return this.relativeFormatter.format(
      Math.round(diffDays / 365),
      'year'
    );
  }

  private toLocalDate(value: string | Date): Date {
    if (value instanceof Date) {
      return new Date(
        value.getFullYear(),
        value.getMonth(),
        value.getDate()
      );
    }

    const isoDateOnlyMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);

    if (isoDateOnlyMatch) {
      const [, year, month, day] = isoDateOnlyMatch;

      return new Date(
        Number(year),
        Number(month) - 1,
        Number(day)
      );
    }

    const parsed = new Date(value);

    return new Date(
      parsed.getFullYear(),
      parsed.getMonth(),
      parsed.getDate()
    );
  }
}
