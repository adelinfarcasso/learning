import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
})
export class AssignmentComponent implements OnInit {
  optionsArr = ['Stable', 'Critical', 'Finished'];
  forbiddenNames = ['test'];
  projectForm = new FormGroup({
    name: new FormControl(
      null,
      [Validators.required, this.isforbidden.bind(this)],
      this.asyncIsForbidden
    ),
    email: new FormControl(null, [Validators.required, Validators.email]),
    status: new FormControl(this.optionsArr[0]),
  });

  constructor() {}

  isforbidden(control: FormControl): { [s: string]: boolean } {
    let found = null;
    this.forbiddenNames.filter((_name, _idx, arr) => {
      if (arr.includes(control.value?.toLowerCase())) {
        found = { forbiddenName: true };
        return found;
      }
    });
    return found;
  }

  asyncIsForbidden(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        console.log('timeout');

        if (control.value === 'testproject') {
          console.log(true);

          resolve({ forbiddenName: true });
        } else resolve(null);
      }, 2000);
    });
    console.log(promise);

    return promise;
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  ngOnInit(): void {}
}
