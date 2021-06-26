import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {

   }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDsnU8IhPdDKrUXuWq7FVMlrNmZrmMJiSyG6fRESINYgAJBBpnLiQ6GThLMuQsxqlLJVavErt4qQAgzvrA'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    .subscribe(data => {
      console.log(data)
    })
  }

}
