import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss'
})
export class QuotesComponent {

  quotesData = [
    {
      "character": "Yoda",
      "quote": "Do, or do not. There is no try."
    },
    {
      "character": "Darth Vader",
      "quote": "I find your lack of faith disturbing."
    },
    {
      "character": "Leia Organa",
      "quote": "Hope is like the sun. If you only believe it when you see it, you'll never make it through the night."
    },
    {
      "character": "Obi-Wan Kenobi",
      "quote": "The Force will be with you. Always."
    }
  ]


  currentQuote: { character: string, quote: string } = { character: '', quote: '' };

  constructor() { }

  ngOnInit(): void {
    this.getRandomQuote();
  }

  getRandomQuote(): void {
    const randomIndex = Math.floor(Math.random() * this.quotesData.length);
    this.currentQuote = this.quotesData[randomIndex];
  }
}
