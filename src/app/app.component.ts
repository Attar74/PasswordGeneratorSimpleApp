import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  letters:string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  number:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  specialChar:string[] = ['!','@', '#', '$'];
  password: string = "";
  randomArr: any = [];

  getRandomInt = (max)=> {
    return Math.floor(Math.random() * Math.floor(max));
  }

  onButtonClick = (length: any, ch1: any, ch2: any, ch3: any)=>{
    this.password = "";
    this.randomArr = [];
    (ch2.checked) ? this.randomArr.push(...this.number) : this.randomArr.push();
    (ch3.checked) ? this.randomArr.push(...this.specialChar) : this.randomArr.push();
    (ch1.checked) ? this.randomArr.push(...this.letters) : this.randomArr.push();
    for(let i=0 ; i<length.value; i++){
      this.password+=this.randomArr[this.getRandomInt(this.randomArr.length)];
    }
    console.log(this.randomArr);
  }

  getPassword = ()=>{
    return this.password;
  }
}
