import { Component } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent {

  professores = ['Prof. Ccp', 'Prof. Eng', 'Prof. Med', 'Prof. Dir', 'Prof. Adm'];

}
