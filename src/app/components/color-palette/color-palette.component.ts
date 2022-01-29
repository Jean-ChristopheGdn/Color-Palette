import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss'],
 
})
export class ColorPaletteComponent implements OnInit {
  
  hue: number = 180;
  saturation: number = 50;
  lightness: number = 50;
  
  clrBase: string = `background-color : hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
  clrAnalogue: string = `background-color : hsl(${this.hue + 30}, ${this.saturation}%, ${this.lightness}%)`;
  clrComplementary: string = `background-color : hsl(${this.hue + 180}, ${this.saturation}%, ${this.lightness}%)`;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeColors(){
      this.clrBase = `background-color : hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
      this.clrAnalogue = `background-color : hsl(${this.hue + 30}, ${this.saturation}%, ${this.lightness}%)`;
      this.clrComplementary = `background-color : hsl(${this.hue + 180}, ${this.saturation}%, ${this.lightness}%)`;
    }
}
