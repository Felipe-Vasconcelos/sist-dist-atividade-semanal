import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'atividade-semanal';
  
  public isCollapsedCcp = true;
  public isCollapsedEng = true;
  public isCollapsedMed = true;
  public isCollapsedDir = true;
  public isCollapsedAdm = true;

}
