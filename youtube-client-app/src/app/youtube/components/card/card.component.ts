import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input() public cardData: Card;

  constructor(private router: Router) { }

  public ngOnInit(): void {
  }

  public goToDetailInfo(): void {
    this.router.navigate(['detail', this.cardData.snippet.channelId]);
  }
}