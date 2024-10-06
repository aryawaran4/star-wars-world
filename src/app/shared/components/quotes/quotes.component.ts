import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

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

  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object,
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this._platformId)) {
      this.getRandomQuote();
    }
  }

  getRandomQuote(): void {
    const randomIndex = Math.floor(Math.random() * this.quotesData.length);
    this.currentQuote = this.quotesData[randomIndex];
  }
}
