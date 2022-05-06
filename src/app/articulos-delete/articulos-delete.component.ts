import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { SharedService } from '../shared.service';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent} from 'src/app/articulos/articulos.component';

const routes: Routes = [
  {path:'art', component:ArticulosComponent},
];
@Component({
  selector: 'app-articulos-delete',
  templateUrl: './articulos-delete.component.html',
  styleUrls: ['./articulos-delete.component.css']
})

export class ArticulosDeleteComponent implements OnInit {

  constructor(private service : SharedService) { }

  ArticulosList : any =[];

  @Input () art: any;//fixed import line 2
  codArticulo : number;
  nomArticulo : string;
  descArticulo : string;
  cantArticulo : number;

  ngOnInit(): void {
    this.codArticulo = this.art.codArticulo;
    this.nomArticulo = this.art.nomArticulo;
    this.descArticulo = this.art.descArticulo;
    this.cantArticulo = this.art.cantArticulo;
  }
  
  deleteClick(item:any){
    if(confirm('¿Estás seguro?')){
      this.service.deleteArticulo(item).subscribe(data=>{
        alert(data.toString());
        this.refreshArtList();
      })
    }
  }
  refreshArtList(){
    this.service.getarticuloList().subscribe(data =>{
      this.ArticulosList = data;
    })
  }
}
