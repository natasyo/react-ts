export interface IAnimeResponseResult {
  data: [IAnime];
  pagination: IPagination;
}

export interface IAnime {
  mal_id: null;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
  };
  approved: true;
  titles: [
    {
      type: string;
      title: string;
    }
  ];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: [string];
  // type: TV,
  source: string;
  episodes: 0;
  // status: Finished Airing,
  airing: true;
  aired: {
    from: string;
    to: string;
    prop: {
      from: {
        day: 0;
        month: 0;
        year: 0;
      };
      to: {
        day: 0;
        month: 0;
        year: 0;
      };
      string: string;
    };
  };
  duration: string;
  // rating: G - All Ages,
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
  licensors: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
  studios: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
  genres: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
  explicit_genres: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
  themes: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
  demographics: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
}

export interface IPagination {
  current_page: number;
  last_visible_page: number;
  has_next_page: true;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}
