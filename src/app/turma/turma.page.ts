import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.page.html',
  styleUrls: ['./turma.page.scss'],
})
export class TurmaPage implements OnInit {

  constructor(private route: Router) {

  }

  ngOnInit() {
  }

  goToVoltar() {
    this.route.navigateByUrl('home');
  }

}
