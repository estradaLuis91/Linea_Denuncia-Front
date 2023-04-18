import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
@Input() find = false;
@Input() denunciasSP=[{folio:null,status:null,comentarios:null,user_Password:null,withComm:null}]; 

 constructor() { }

  ngOnInit(): void {
  }

}
