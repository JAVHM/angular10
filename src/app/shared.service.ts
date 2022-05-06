import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:30835/api";

  constructor(private http:HttpClient) { }

  getarticuloList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Articulos');
  }

  addArticulo(val:any){
    return this.http.post(this.APIUrl+'/Articulos',val)
  }

  updateArticulo(val:any){
    return this.http.put(this.APIUrl+'/Articulos',val)
  }

  deleteArticulo(val:any){
    return this.http.delete(this.APIUrl+'/Articulos/'+val)
  }
}
