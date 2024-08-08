import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {RecipeService} from "../../services/recipe/recipe.service";
@Component({
  selector: 'app-create-recipe-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule,MatRadioModule],
  templateUrl: './create-recipe-form.component.html',
  styleUrl: './create-recipe-form.component.scss'
})
export class CreateRecipeFormComponent {
  constructor(private recipeService:RecipeService) { }


  recipeItem:any={
    title:"",
    description:"",
    foodType:"",
    image:""
  }

  onSubmit(){
    console.log("Values",this.recipeItem)
    this.recipeService.createRecipe(this.recipeItem).subscribe(
      {
        next:data=> console.log("create recipe",data),
        error: error=> console.log("error",error)
      }
    )
  }

}
