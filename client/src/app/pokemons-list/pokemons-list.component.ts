import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {

  pokemons: Pokemon[] = [];

  constructor(private http: ApiClientService) { }

  ngOnInit(): void {
    this.http.getAllPokemon().subscribe((data: Pokemon[]) => {
      this.pokemons = data.map((poke) => {
        return {
          ...poke,
          front_pic: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`
        }
      })

      console.log("data", data)
    });
  }
}
