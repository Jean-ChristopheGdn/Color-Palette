import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss'],
})
export class ColorPaletteComponent implements OnInit {

  hue: number = 180;
  analogueHue: number = this.hue + 30;
  complementaryHue: number = this.hue + 180;
  saturation: number = 50;
  lightness: number = 50;

  clrBase: string = `background-color : hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
  clrAnalogue: string = `background-color : hsl(${this.hue + 30}, ${this.saturation}%, ${this.lightness}%)`;
  clrComplementary: string = `background-color : hsl(${this.hue + 180}, ${this.saturation}%, ${this.lightness}%)`;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeColors(): void {
    this.analogueHue = this.hue + 30;
    this.complementaryHue = this.hue + 180;
    if (this.analogueHue >= 360) {
      this.analogueHue = this.analogueHue - 360;
    } 
    if (this.complementaryHue >= 360) {
      this.complementaryHue = this.complementaryHue - 360;
    } 
    this.clrBase = `background-color : hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
    this.clrAnalogue = `background-color : hsl(${this.analogueHue}, ${this.saturation}%, ${this.lightness}%)`;
    this.clrComplementary = `background-color : hsl(${this.complementaryHue}, ${this.saturation}%, ${this.lightness}%)`;
  }
}
