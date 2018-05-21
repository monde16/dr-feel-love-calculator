import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name1: string = '';
  name2: string = '';
  results: number;

  constructor(public navCtrl: NavController) {

  }

  reset(): void {
    this.results = undefined;
  }

  calculate(): void {
    console.log("************************");
    let s1 = this.name1.toLowerCase(), s2 = this.name2.toLowerCase();
    console.log(`s1=${s1}, s2=${s2}`);
    for (let k of s1) {
      if (s2.indexOf(k) > -1) {
        s1 = s1.replace(k, '');
        s2 = s2.replace(k, '');
      }
    }
    console.log(`s1=${s1}, s2=${s2}`);
    let l = this.name1.length + this.name2.length;
    console.log(`l=${l}`);
    console.log(`s1 + s2 = ${s1.length + s2.length}`);
    this.results = ((l - s1.length - s2.length) / l) * 100;
    console.log(`results = ${this.results}`);
  }
}
