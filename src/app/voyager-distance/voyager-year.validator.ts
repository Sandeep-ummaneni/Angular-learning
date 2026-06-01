import {
  AbstractControl,
  ValidationErrors,
  FormArray
} from '@angular/forms';

export function voyagerYearValidator(
  control: AbstractControl
): ValidationErrors | null {

  const formArray = control as FormArray;

  const years = formArray.controls.map(
    c => Number(c.value)
  );

  const uniqueYears = new Set(years);

  return uniqueYears.size !== years.length
    ? { duplicateYears: true }
    : null;

}