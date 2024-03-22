import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Bulbasaur' },
      { id: 2, name: 'Ivysaur' },
      { id: 3, name: 'Venusaur' },
      { id: 4, name: 'Charmander' },
      { id: 5, name: 'Charmeleon' },
      { id: 6, name: 'Charizard' },
      { id: 7, name: 'Squirtle' },
      { id: 8, name: 'Wartortle' },
      { id: 9, name: 'Blastoise' },
      { id: 10, name: 'Caterpie' },
      { id: 11, name: 'Metapod' },
      { id: 12, name: 'Butterfree' },
      { id: 13, name: 'Weedle' },
      { id: 14, name: 'Kakuna' },
      { id: 15, name: 'Beedrill' },
      { id: 16, name: 'Pidgey' },
      { id: 17, name: 'Pidgeotto' },
      { id: 18, name: 'Pidgeot' },
      { id: 19, name: 'Rattata' },
      { id: 20, name: 'Raticate' },
      { id: 21, name: 'Spearow' },
      { id: 22, name: 'Fearow' },
      { id: 23, name: 'Ekans' },
      { id: 24, name: 'Arbok' },
      { id: 25, name: 'Pikachu' },
      { id: 26, name: 'Raichu' },
      { id: 27, name: 'Sandshrew' },
      { id: 28, name: 'Sandslash' },
      { id: 29, name: 'Nidoran♀' },
      { id: 30, name: 'Nidorina' },
      { id: 31, name: 'Nidoqueen' },
      { id: 32, name: 'Nidoran♂' },
      { id: 33, name: 'Nidorino' },
      { id: 34, name: 'Nidoking' },
      { id: 35, name: 'Clefairy' },
      { id: 36, name: 'Clefable' },
      { id: 37, name: 'Vulpix' },
      { id: 38, name: 'Ninetales' },
      { id: 39, name: 'Jigglypuff' },
      { id: 40, name: 'Wigglytuff' },
      { id: 41, name: 'Zubat' },
      { id: 42, name: 'Golbat' },
      { id: 43, name: 'Oddish' },
      { id: 44, name: 'Gloom' },
      { id: 45, name: 'Vileplume' },
      { id: 46, name: 'Paras' },
      { id: 47, name: 'Parasect' },
      { id: 48, name: 'Venonat' },
      { id: 49, name: 'Venomoth' },
      { id: 50, name: 'Diglett' },
      { id: 51, name: 'Dugtrio' },
      { id: 52, name: 'Meowth' },
      { id: 53, name: 'Persian' },
      { id: 54, name: 'Psyduck' },
      { id: 55, name: 'Golduck' },
      { id: 56, name: 'Mankey' },
      { id: 57, name: 'Primeape' },
      { id: 58, name: 'Growlithe' },
      { id: 59, name: 'Arcanine' },
      { id: 60, name: 'Poliwag' },
      { id: 61, name: 'Poliwhirl' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
