
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
  recipes = [1, 1, 1, 1, 11, 1]
constructor(public dialog: MatDialog) {

}


  handleOpemCreateRecipeForm(){
    this.dialog.open(CreateRecipeFormComponent)
  }
}
