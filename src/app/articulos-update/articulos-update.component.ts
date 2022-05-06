import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { SharedService } from '../shared.service';
import { Routes } from '@angular/router';
import { ArticulosComponent} from 'src/app/articulos/articulos.component';

const routes: Routes = [
  {path:'art', component:ArticulosComponent},
];
@Component({
  selector: 'app-articulos-update',
  templateUrl: './articulos-update.component.html',
  styleUrls: ['./articulos-update.component.css']
})
export class ArticulosUpdateComponent implements OnInit {

  constructor(private service : SharedService) { }

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

  updateArticulo(){
    var val = {codArticulo: this.codArticulo,
                nomArticulo : this.nomArticulo,
                descArticulo : this.descArticulo,
                cantArticulo : this.cantArticulo};
    this.service.updateArticulo(val).subscribe(res=>{
      alert(res.toString());
    })
  }
}
