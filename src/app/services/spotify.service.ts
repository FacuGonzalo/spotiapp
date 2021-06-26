import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {}

  getQuery(query:string){

    const url = `https://api.spotify.com/v1/${query}`

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBwNVytWnaREkSVu2cskJqp9rmInO24f5dAltmgZ7WQnEHjmsmnqLNic0QZHI5sMmmrpR_BIWpDCiHPyIfv2Jbp16-g2gOQ2ssXgZPMD1z2IRfM-J0rpuHBIlYRZE-XKT47U1lLiR4Txxlh837ZDlXJ65J7HxWgGYq9xJ_Vyg'
    });

    return this.http.get(url, {headers})

  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
               .pipe(map(data => data['albums'].items))
 
  }

  getArtista(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
               .pipe(map(data => data['artists'].items))

  }

}
