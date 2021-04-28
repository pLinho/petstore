import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }
  async login() {
    if (this.form.invalid) return;

    await this.userService.login(
      this.form.controls.username.value,
      this.form.controls.password.value,
    )
    
  }

}
