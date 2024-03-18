import { Component } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  form: any = {
    user_name: '',
    user_email: '',
    message: ''
  }

  onSubmit(e: Event, form: any){
    this.sendEmail(e);
    alert("Email enviado, verifique sua caixa de entrada!");
    form.reset();
  }

   sendEmail(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'cat_gmail',
        'cat_template',
        e.target as HTMLFormElement,
        't1pylDTFcEQD6-arL'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
