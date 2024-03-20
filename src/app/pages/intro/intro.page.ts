import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {

    setTimeout(() => {
      this.navCtrl.navigateRoot('/home');
    }, 1500);
  }

}
