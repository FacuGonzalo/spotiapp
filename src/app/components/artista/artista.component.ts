import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service'

@Component({
  selector: 'app-artist',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {}
  topTracks: any[] = []

  loadingArtist: boolean

  constructor(private route: ActivatedRoute, private spotify: SpotifyService) { 

    this.loadingArtist = true

    this.route.params.subscribe(params => {
      this.getArtista(params['id'])
      this.getTopTracks(params['id'])
    })

  }

  getArtista(id: string){

    this.loadingArtist = true

    this.spotify.getArtista(id).subscribe(artista => {
      this.artista = artista
      this.loadingArtist = false
    })
  }

  getTopTracks(id: string){
    this.spotify.getTopTracks(id).subscribe(topTracks => {
      this.topTracks = topTracks
    })
  }

}
