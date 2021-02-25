import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  letters:string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
                      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  numbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  specialChars:string[] = ['!','@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-'];
  password: string = "";
  randomArr: any = [];

  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSpecialChar = false;

  onChangeLength = (e: number)=>{
    this.length = e;
  }
  onChangeLetters = ()=>{
    this.includeLetters = !this.includeLetters;
  }

  onChangeNumbers = ()=>{
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSpcialCharacters = ()=>{
    this.includeSpecialChar = !this.includeSpecialChar;
  }
  getRandomInt = (max)=> {
    return Math.floor(Math.random() * Math.floor(max));
  }

  onButtonClick = ()=>{
      this.password = "";
      this.randomArr = [];
      (this.includeLetters) ? this.randomArr.push(...this.letters) : this.randomArr.push();
      (this.includeNumbers) ? this.randomArr.push(...this.numbers) : this.randomArr.push();
      (this.includeSpecialChar) ? this.randomArr.push(...this.specialChars) : this.randomArr.push();
      for(let i=0 ; i< this.length; i++){
        this.password+=this.randomArr[this.getRandomInt(this.randomArr.length)];
      }

  }

  getPassword = ()=>{
    return this.password;
  }

  isDisabled = ()=>{
    return (this.length && this.length!=0 &&(this.includeLetters || this.includeNumbers || this.includeSpecialChar))? false: true;
  }

  copyPassword = ()=>{
  
  }
  
}
