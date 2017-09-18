import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CreateCharacterComponent } from '../create-character/create-character.component';

@NgModule({
  declarations: [
    CreateCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: CreateCharacterComponent }
    ])
  ],
})
export class CreateCharacterModule {}