import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-artist',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  constructor(private route: ActivatedRoute) { 

    this.route.params.subscribe(params => {

    })

  }

}
