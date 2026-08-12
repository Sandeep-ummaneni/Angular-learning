import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelativeDatePipe } from '../pipes/relative-date.pipe';
import { TruncatePipe } from '../pipes/truncate.pipe';

@NgModule({
  imports: [CommonModule, RelativeDatePipe, TruncatePipe],
  exports: [CommonModule, RelativeDatePipe, TruncatePipe]
})
export class SharedModule {}
