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
      'Authorization': 'Bearer BQA2bpixL5Wef64vDCkkEisXakAZenS5lzBBtAtfJRxMQuQZafNAZ12dgJ8Q50KCmZAaWSJPFhcPLBo1xTQFeVBaQhXuAM9h5FedoNj7Tty5vSTowRaAEX79OzDjjTq_HEf1ZNLndR4FeRjzun-kpSHzMLzvFTtKXxhEewzThw'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

}
