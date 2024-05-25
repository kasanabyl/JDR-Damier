import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-damier',
  templateUrl: './damier.component.html',
  styleUrls: ['./damier.component.scss']
})
export class DamierComponent implements OnInit {
  cells = Array.from({ length: 225 }); // 15x15 grid
  tokens: number[] = [];
  focusedCell: number | null = null;

  characters = [
    { id: 1, name: 'Character 1', ability: 'Ability 1' },
    { id: 2, name: 'Character 2', ability: 'Ability 2' },
    // Add more characters as needed
  ];
  
  ngOnInit() {
    this.placeTokens();
  }

  placeTokens() {
    while (this.tokens.length < 10) {
      const randomIndex = Math.floor(Math.random() * 225);
      if (!this.tokens.includes(randomIndex)) {
        this.tokens.push(randomIndex);
      }
    }
  }
  onCellClick(index: number) {
    this.focusedCell = index;
    const character = this.getCharacterByCell(index);
    if (character) {
      alert(`Character: ${character.name}\nAbility: ${character.ability}`);
    }
  }

  getCharacterByCell(index: number) {
    const tokenIndex = this.tokens.indexOf(index);
    return tokenIndex !== -1 ? this.characters[tokenIndex] : null;
  }
  

  
}
