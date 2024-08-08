
import {RecipeCardComponent} from "../recipe-card/recipe-card.component";
import {ChangeDetectionStrategy, Component} from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {
  MatDialog,
  // MatDialogRef,
  // MatDialogActions,
  // MatDialogClose,
  // MatDialogTitle,
  // MatDialogContent
} from '@angular/material/dialog';
import { CreateRecipeFormComponent } from "../create-recipe-form/create-recipe-form.component";
import {AuthService} from "../../services/auth/auth.service";
import {RecipeService} from "../../services/recipe/recipe.service";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RecipeCardComponent,
    MatIconModule,MatButtonModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  recipes = []
constructor(
  public dialog: MatDialog,
  public authService:AuthService,
  public recipeService:RecipeService) {

}


  handleOpenCreateRecipeForm(){
    this.dialog.open(CreateRecipeFormComponent)
  }
  ngOnInit(): void {
    this.authService.getUserProfile();
    this.recipeService.getRecipes().subscribe(

    )
    this.recipeService.recipeSubject.subscribe(
      (state)=>{
        console.log("recipe state",state)
        this.recipes = state.recipes;
      }
    )
  }
}
