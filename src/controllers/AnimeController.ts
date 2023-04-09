import { IAnimeResponseResult } from '../types';

export class AnimeController {
  getAnime(setState: (state: IAnimeResponseResult | null) => void) {
    fetch('https://api.jikan.moe/v4/anime')
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        const respResult = result as IAnimeResponseResult;
        setState(respResult);
        return respResult;
      });
  }
}
