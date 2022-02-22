import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Title recipe","test recipe","https://cdn.pixabay.com/photo/2015/08/25/03/50/herbs-906140_960_720.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
