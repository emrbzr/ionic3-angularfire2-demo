import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pokemons = [];
  myInput;
  constructor(public navCtrl: NavController,public db: AngularFireDatabase) {
    this.db.list("/pokemons").valueChanges().subscribe(data =>{this.pokemons = data;})
    console.log(this.pokemons);
  }

  btnAddClicked(){
    this.db.list("/pokemons/").push(this.myInput);
  }
}
