import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  password = '';
  length = 0;
  includeLetters = false;
  includeSymbols = false;
  includeNumbers = false;
  buttonEnabled = false;

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(val: string){
    const parsedVal = parseInt(val)
    if (!isNaN(parsedVal)){
      this.length = parsedVal;
    }
  }

  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijkmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()_+{}';
    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index]
    }
    this.password = generatedPassword;
  }
}
