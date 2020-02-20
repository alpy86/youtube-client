import { Component, OnInit } from '@angular/core';
import { youtubeResponse } from 'src/assets/mock-response';
import { YoutubeResponse } from 'src/app/models/youtube-response.model';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent implements OnInit {
  public mockResponse: YoutubeResponse = youtubeResponse;
  constructor() { }

  public ngOnInit(): void {
  }

}
