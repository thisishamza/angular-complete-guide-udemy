import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("Component recipe","Recipe for creating the best angular components","https://cdn.pixabay.com/photo/2015/08/25/03/50/herbs-906140_960_720.jpg"),
    new Recipe("Module recipe","Recipe for creating the best angular modules","https://cdn.pixabay.com/photo/2015/08/25/03/50/herbs-906140_960_720.jpg"),
    new Recipe("Model recipe","Recipe for creating the best angular models","https://cdn.pixabay.com/photo/2015/08/25/03/50/herbs-906140_960_720.jpg"),

  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
