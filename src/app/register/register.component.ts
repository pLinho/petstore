import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'ns-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private service: UserService,
  ) { }

  ngOnInit(): void {
  }

  async register() {
    if (this.form.invalid) return;
    await this.service.register({
      username: this.form.controls.username.value,
      firstName: this.form.controls.firstName.value,
      lastName: this.form.controls.lastName.value,
      email: this.form.controls.email.value,
      password: this.form.controls.password.value,
      phone: this.form.controls.phone.value,
    });

  }

}
