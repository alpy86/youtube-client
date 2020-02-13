interface YoutubeResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Array<SearchItem>;
}

interface SearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: StatisticCounter;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnail;
  channelTitle: string;
  tags: Array<string>;
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}

interface Thumbnail {
  default: SizeThumbnail;
  medium: SizeThumbnail;
  high: SizeThumbnail;
  standard: SizeThumbnail;
  maxres: SizeThumbnail;
}


interface SizeThumbnail {
  url: string;
  width: number;
  height: number;
}

interface StatisticCounter {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

