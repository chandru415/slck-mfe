import { Component, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MfeOnComponent } from './mfe-on.component';

@Component({
  selector: 'mfe1-mfe-one-comp',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './mfe-one-comp.component.html',
  styles: ``,
})
export class MfeOneCompComponent {
  count = model(0)

  updateCount(){
    this.count.update(v => v+1)
  }
}
