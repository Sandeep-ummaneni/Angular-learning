import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
  styleUrls: ['./voyager-distance.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
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

 

  get years(): FormArray {

    return this.predictorForm.get('years') as FormArray;

  }

 

  addYear() {

    const lastYear = Number(
      this.years.at(
        this.years.length - 1
      ).value
    );

    this.years.push(

      new FormControl(
        Math.min(lastYear + 1, 2100),
        Validators.required
      )

    );

  }

 

  removeYear(index: number) {

    if (this.years.length > 1) {

      this.years.removeAt(index);

    }

  }




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

    this.predictedResults.sort(
      (a, b) => a.year - b.year
    );

  }



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