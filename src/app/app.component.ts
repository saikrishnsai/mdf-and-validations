import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profileData:FormGroup;
  
  constructor(){
    this.profileData = new FormGroup({
      fname : new FormControl("Angular",[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]),
      lname:new FormControl(),
      uemail:new FormControl(),
      addr:new FormGroup({
        ucity:new FormControl(),
        uaddress:new FormControl()
      }),
      gender:new FormControl(),
      ucountry:new FormControl()
    });
  };

  register():any{
    console.log(this.profileData.value);
  };


};
