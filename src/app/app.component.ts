import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Project';

  loaded_feature = 'recipe';

  onNavigate(feature: string){
    this.loaded_feature = feature;
  }
}
