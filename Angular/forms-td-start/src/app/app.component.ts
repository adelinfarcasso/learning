import { Component, ViewChild } from '@angular/core'
import { MaxLengthValidator, NgForm } from '@angular/forms'

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent {
   @ViewChild('form') signupForm: NgForm
   defaultSecret: string = 'pet'
   answer: string
   genders = ['male', 'female']
   submitted = false

   user = {
      username: '',
      email: '',
      secretQuestion: '',
      secretAnswer: '',
      gender: '',
   }

   // Setting values

   suggestUserName() {
      const suggestedName = 'Superuser'
      this.signupForm.form.patchValue({ username: suggestedName })

      // this.signupForm.setValue({
      //    username: suggestedName,
      //    email: '',
      //    secret: 'pet',
      //    questionAnswer: '',
      //    gender: 'male',
      // })
   }

   onSubmit() {
      this.user.username = this.signupForm.value.username
      this.user.email = this.signupForm.value.email
      this.user.secretQuestion = this.signupForm.value.secretQuestion
      this.user.secretAnswer = this.signupForm.value.secretAnswer
      this.user.gender = this.signupForm.value.gender
      this.submitted = true
      this.signupForm.reset()
   }
}
