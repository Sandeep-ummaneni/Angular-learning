import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from '@angular/forms';

import { RouterModule } from '@angular/router';

import { voyagerYearValidator } from '../voyager-distance/voyager-year.validator';

@Component({
  selector: 'app-voyager-distance',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './voyager-distance.html',
  styleUrls: ['./voyager-distance.css']
})
export class VoyagerDistance {

  voyagerData = {

    'Voyager 1': {
      currentDistance: 25410000000,
      speedPerHour: 110500
    },

    'Voyager 2': {
      currentDistance: 21330000000,
      speedPerHour: 91640
    }

  };

  predictorForm = new FormGroup({

    spacecraft: new FormControl(
      '',
      Validators.required
    ),

   years: new FormArray(

  [
    new FormControl(
      new Date().getFullYear(),
      Validators.required
    )
  ],

  [voyagerYearValidator]

)

  });

  predictedResults: any[] = [];

  /* =========================
     FORM ARRAY GETTER
  ========================= */

  get years(): FormArray {

    return this.predictorForm.get('years') as FormArray;

  }

  /* =========================
     ADD YEAR
  ========================= */

  addYear() {

  this.years.push(

    new FormControl(
      new Date().getFullYear(),
      Validators.required
    )

  );

}

  /* =========================
     REMOVE YEAR
  ========================= */

  removeYear(index: number) {

    if (this.years.length > 1) {

      this.years.removeAt(index);

    }

  }

  /* =========================
     CALCULATE DISTANCE
  ========================= */

  calculateDistance() {

    this.predictedResults = [];

    const spacecraft =
      this.predictorForm.value.spacecraft;

    if (!spacecraft) return;

    const data =
      this.voyagerData[
        spacecraft as keyof typeof this.voyagerData
      ];

    const currentYear =
      new Date().getFullYear();

    const LIGHT_YEAR_KM =
      9461000000000;

    this.years.controls.forEach((control) => {

      const futureYear =
        Number(control.value);

      const yearsDifference =
        futureYear - currentYear;

      if (yearsDifference < 0) return;

      const totalHours =
        yearsDifference * 365 * 24;

      const traveledDistance =
        data.speedPerHour * totalHours;

      const finalDistance =
        data.currentDistance +
        traveledDistance;

      const progress =
        (finalDistance / LIGHT_YEAR_KM) * 100;

      this.predictedResults.push({

        year: futureYear,

        distance:
          (
            finalDistance /
            1_000_000_000
          ).toFixed(2),

        progress:
          progress.toFixed(4)

      });

    });

    // Sort results by year
    this.predictedResults.sort(
      (a, b) => a.year - b.year
    );

  }

  /* =========================
     RESET FORM
  ========================= */

  resetForm() {

    this.predictorForm.reset();

    this.years.clear();

    this.years.push(

      new FormControl(
  new Date().getFullYear(),
  Validators.required
)

    );

    this.predictedResults = [];

  }

}