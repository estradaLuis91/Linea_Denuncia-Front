import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CountryService } from 'src/services/country.service.';
import { DenunciaService } from 'src/services/denuncia.service';
import { EOService } from 'src/services/eo.service';
import { StateService } from 'src/services/state.service';

@Component({
  selector: 'app-modal-registro',
  templateUrl: './modal-registro.component.html',
  styleUrls: ['./modal-registro.component.css']
})
export class ModalRegistroComponent implements OnInit {
  tab=1;

  denuncia:any ={
    EO_Id:'',
    Country_id:'',
    State_id:'',
    Ncentro: null,
    Anonim:'',
    Complete_Name:'',
    Email:'',
    Phone:'',
    Folio:'',
    Create_Date:'',
    User_Password:'',
    Detalle:''
  } ///Objeto que contiene la denucnai que se genera
  eos=[{name:'',id:null}]//Select Empresa/Organización
  countrys = [{id:null,complete_name:''}]//Select Países
  states = [{id:null,name:'',country_Id:null}]//Select Estados
  password='';
  confirmpsw='';

  constructor(protected modal : NgbModal,private _eoService:EOService , private _countryService:CountryService , 
    private _stateService: StateService , private _denunciaService:DenunciaService ) { }

  ngOnInit() {
    this.getEos();
    this.getCountrys();
    this.generafolio();
  }

  changetab(e:any){
    let tabElem ='';
    this.tab = e;
  }

  
  getStates(){
    var estadosGen = [{id:null,name:'',country_Id:null}];
    let pais = this.denuncia.Country_id;
    let filter = [{"id":null,"name":'',"country_Id":null}];
    filter = [];
    this._stateService.getStates().subscribe(data =>{
      estadosGen= data;

      ///Get States by Id_Country
      estadosGen.map(function(element){
        if(element.country_Id == pais && element.country_Id != null){
          
          filter.push(element)
        }
    });
         this.states = filter;
    });

  }
  
onlyNumbers(event:any):boolean{
  const charCode = (event.which)?event.which: event.keyCode;

if(charCode > 31 && (charCode < 48 || charCode > 57)){

  return false;
}

return true
}

generaDenuncia(){
  var day = '';
  var month = '';
  //Formato Fecha
  if(this.denuncia.Create_Date.month < 10)month = '0'+this.denuncia.Create_Date.month
  else month = this.denuncia.Create_Date.month
  if(this.denuncia.Create_Date.day < 10) day = '0'+this.denuncia.Create_Date.day 
  else day=this.denuncia.Create_Date.day 
  let date =this.denuncia.Create_Date.year +'-'+ month + '-' + day
  this.denuncia.Create_Date = date;
  
  if(this.denuncia.Detalle != null &&this.password==this.confirmpsw)this.postDenuncia();
}

validar(){
    
  if(this.denuncia.Detalle != '' && this.denuncia.Detalle !=null && this.denuncia.Create_Date != '' && this.password != '' && this.confirmpsw != ''){
           
     //Validación Contraseña
    if(this.password.length >= 8){
      if(this.password==this.confirmpsw){this.denuncia.User_Password = this.password; document.getElementById('guardar')?.removeAttribute('disabled') 
      alert('Datos Correctos!')}
      else alert('No coincide la contraseña, favor de validar')
    }else{
      alert('La contraaseña debe tener una longitud de al menos 8 carácteres')
    }
    
  
  }

  if(this.denuncia.Detalle==null || this.denuncia.Detalle =='') alert('Es obligatorio colocar el detalle de la denuncia')
  if(this.denuncia.Create_Date==null || this.denuncia.Create_Date =='') alert('Es obligatorio colocar la fecha de incidencia')

}

getEos(){
  this._eoService.getEos().subscribe(data =>{
    this.eos= data;
  });

}
getCountrys(){
  this._countryService.getCountrys().subscribe(data =>{
    this.countrys= data;
  });
}



generafolio(){
this._denunciaService.getFolio().subscribe(data =>{
  this.denuncia.Folio =data.toString();
});


}

postDenuncia(){
  console.log(this.denuncia)
  this._denunciaService.postDenuncias(this.denuncia).subscribe(data =>{
    console.log(data)
    alert('Registro de denuncia existoso')
    alert('Número de Folio:' + this.denuncia.Folio)
  })
}

}
