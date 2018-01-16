import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Welcome to Recipes Application</h1>

    <div *ngFor="let recipe of recipes">
      <h2>{{recipe.title}}</h2>
      <h3>ingredients</h3>
      <ul>
        <li *ngFor="let ing of recipe.ingredients">{{ing}}</li>
      </ul>
      <h3>Directions</h3>
      <ul>
        <li *ngFor="let direction of recipe.directions">{{direction}}</li>
      </ul>
    </div>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe("Best Chocolate Chip Cookies", ["1 cup butter", "1 teaspoon baking soda", "1 cup white sugar", "2 teaspoons hot water", "1/2 teaspoon salt", "1 cup chopped walnuts"], ["Preheat Oven to 350 degrees", "Cream together the butter, white sugar, and brown sugar until smooth", "Bake for about 10 minutes in the preheated oven, or until edges are nicely browned"])
  ];
}

export class Recipe {
  constructor(public title: string, public ingredients: string[], public directions: string[]) { }
}
