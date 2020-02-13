import { StatisticCounter, SizeThumbnail } from './youtube-response.model';

export interface Card {
  title: string;
  description: string;
  thumbnail: SizeThumbnail;
  statistics: StatisticCounter;
}
