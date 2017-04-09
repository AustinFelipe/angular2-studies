import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  private _cuisines: FirebaseListObservable<any[]>;
  private _restaurants: Observable<any[]>;

  title = 'Estudando Angular 2!';

  constructor(private _angularFire: AngularFire) {}

  ngOnInit() {
    this._cuisines = this._angularFire.database.list('/cuisines');
    this._restaurants = this._angularFire.database.list('/restaurants', {
      query: {
        orderByChild: 'rating',
        equalTo: 5 
      }
    })
    .map(res => {
      
      res.map(restaurant => {
        
        restaurant.cuisineType = this._angularFire.database.object('/cuisines/' + restaurant.cuisine);
        restaurant.featureType = [];

        for (var feature in restaurant.features) {
          restaurant.featureType.push(
            this._angularFire.database.object('/features/' + feature)
          );
        }

        return restaurant;
      });

      return res;
    });
  }
}
