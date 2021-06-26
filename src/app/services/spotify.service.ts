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
      'Authorization': 'Bearer BQBULl7hLBc3znjsupNd4INzhLMyUumFypTOBlKIr5C3WomBaC8egWdoU3Rv9FtaRbRByxu6i_8-a4mJ9VVMFxoD8RaRpasd-VIAAMw11sfwrtWu3m9OsYD9lQ8DaZdt29zhK4GT1Xzj8_PmflfW6FMEXZHJobErYmPzgmlF9g'
    });

    return this.http.get(url, {headers})

  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
               .pipe(map(data => data['albums'].items))
 
  }

  getArtistas(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
               .pipe(map(data => data['artists'].items))

  }

  getArtista(id:string){

    return this.getQuery(`artists/${id}`)

  }

  getTopTracks(id:string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
               .pipe(map(data => data['tracks']))

  }

}
