import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'; ///

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
   signUpForm: FormGroup;
   genders = ['male', 'female'];
   forbiddenUsernames = ['admin', 'user'];

   ngOnInit(): void {
      this.signUpForm = new FormGroup({
         userData: new FormGroup({
            username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
            email: new FormControl(null, [Validators.required, Validators.email]),
         }),
         gender: new FormControl('male'),
         hobbies: new FormArray([]), ///
      });

      // this.signUpForm.valueChanges.subscribe((value) => {
      //    console.log(value);
      // });

      // this.signUpForm.statusChanges.subscribe((status) => {
      //    console.log(status);
      // });

      this.signUpForm.patchValue({
         userData: {
            username: 'Max',
         },
      });
   }

   onSubmit() {
      // De ce functioneaza? Cum se updateaza proprietatile intern cu datele din template? [formGroup]="signUpForm" ? ///
      console.log(this.signUpForm);
      this.signUpForm.reset();
   }

   getControls() {
      ///
      return (<FormArray>this.signUpForm.get('hobbies')).controls;
   }

   onAddHobby() {
      ///
      const control = new FormControl(null, Validators.required);
      (<FormArray>this.signUpForm.get('hobbies')).push(control);
   }

   forbiddenNames(control: FormControl): { [s: string]: boolean } {
      // returneaza un Obj care contine key value pairs, valoarea la key -> Boolean
      if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
         return { forbiddenUsername: true };
      }
      return null;
      // IMPORTANT - Daca nu primesc {key: boolean}, Validators pot primi fie nimic sau null (fie return null fie fara return)
      // NU -> return { forbiddenUsername: false };
      // pur si simplu asa functioneaza Validators
   }
}
