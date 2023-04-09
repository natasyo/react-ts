// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';
import { IAnimeResponseResult } from '../../types';
import { AnimeController } from '../../controllers';
import { AnimeItemComponent } from './AnimeItem/AnimeItemComponent';
import './Anime.scss';
import { PaginationComponent } from '../PaginationComponent/PaginationComponent';

// type Props = unknown;

export function AnimeComponent() {
  const [anime, setAnime] = useState<IAnimeResponseResult | null>(null);
  const animeController = new AnimeController();
  useEffect(() => {
    animeController.getAnime(setAnime);
  }, []);
  console.log(anime);
  return (
    <>
      <div className={'anime-items'}>
        {anime?.data.map((animeItem) => {
          return <AnimeItemComponent key={animeItem.mal_id} anime={animeItem} />;
        })}
      </div>
      <PaginationComponent pagination={anime?.pagination} />
    </>
  );
}
