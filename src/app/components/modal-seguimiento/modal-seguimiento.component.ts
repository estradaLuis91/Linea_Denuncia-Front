import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DenunciaService } from 'src/services/denuncia.service';
@Component({
  selector: 'app-modal-seguimiento',
  templateUrl: './modal-seguimiento.component.html',
  styleUrls: ['./modal-seguimiento.component.css']
})
export class ModalSeguimientoComponent implements OnInit {

  denunciasSP=[{folio:null,status:null,comentarios:null,user_Password:null,withComm:null}];
  denuncias=[{id:null,folio:null,user_Password:null}];
  Folio='';
  password='';
  spinner=false
  find = false;

  constructor(protected modal : NgbModal,private _denunciaService:DenunciaService) { }

  ngOnInit(): void {
    this.getDenuncias();
    this.getDetailDen()
  }

  buscar(){

  
    
    this.getDenuncias();
    setTimeout(() => {
      this.spinner = true;
    },500
    );
    let folio = this.Folio;
    let password = this.password
    let find = false;
    let nocomm = false;
    let denuncia = [{folio:null,status:null,comentarios:null,user_Password:null,withComm:null}];
    console.log(this.denunciasSP)
    this.denunciasSP.map(function(element){

      if(element.folio == folio && element.user_Password == password && element.withComm == '1'){
        console.log(element.folio,folio)
        find=true; 
        denuncia.push(element);  
        
      }

      if(element.folio == folio && element.withComm =='0')
      {nocomm=true;
      }
    });
    console.log(denuncia)
  
  this.denunciasSP = denuncia.splice(1);
   

    if(find){
    setTimeout(() => {
      this.spinner = false;
      this.find  = true;
      alert('Se encontraron datos.Puede cerrar esta ventana')
    },2000
    );
  }if(nocomm){
  
    setTimeout(() => {
      this.spinner = false;
      alert('Lo sentimos.Su denuncia aún no tiene avannce de estatus.')
    },2000
    );

  }if(!nocomm && !find) {  
   
    setTimeout(() => {
      this.spinner = false;
      alert('No se encontró denuncia.Favor de verificar los datos')
    },2000
    );
   }
  this.spinner= false
}

getDenuncias(){
  this._denunciaService.getDenuncias().subscribe(data =>{
    this.denuncias= data;
    console.log(this.denuncias)
  });
}
getDetailDen(){
  this._denunciaService.getDenunciasSP().subscribe(data =>{
    this.denunciasSP= data;
  });
}


}
