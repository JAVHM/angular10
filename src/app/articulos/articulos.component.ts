import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor(private service: SharedService) { }

  ArticulosList : any =[];

  ModalTitle:string;
  ActivateAddEditArtComp:boolean=false;
  art: any

  ngOnInit(): void {
    this.refreshArtList();
  }

  addClick(){
    this.art={
      codArticulo:0,
      nomArticulo:"",
      descArticulo:"",
      cantArticulo:0
    }
    this.ModalTitle="Add Articulo";
    this.ActivateAddEditArtComp=true;
  }

  editClick(item:any){
    this.art=item;
    this.ModalTitle = "Edit Department",
    this.ActivateAddEditArtComp=true
  }

  deleteClick(item:any){
    if(confirm('¿Estás seguro?')){
      this.service.deleteArticulo(item.codArticulo).subscribe(data=>{
        alert(data.toString());
        this.refreshArtList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditArtComp=false;
    this.refreshArtList();
  }

  refreshArtList(){
    this.service.getarticuloList().subscribe(data =>{
      this.ArticulosList = data;
    })
  }
}
