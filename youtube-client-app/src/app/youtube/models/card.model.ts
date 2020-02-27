import { StatisticCounter, SizeThumbnail, Snippet } from './youtube-response.model';

export interface Card {
  title: string;
  description: string;
  thumbnail: SizeThumbnail;
  snippet: Snippet;
  statistics: StatisticCounter;
}

export interface CardDetail {
  snippet: Snippet;
  statistics: StatisticCounter;
}
