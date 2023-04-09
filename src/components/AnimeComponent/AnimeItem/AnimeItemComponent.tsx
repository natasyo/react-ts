// @flow
import * as React from 'react';
import { IAnime } from '../../../types';
import './AmimeItem.scss';

type Props = {
  anime: IAnime;
};

export function AnimeItemComponent(props: Props) {
  return (
    <div className={'anime'}>
      <div className="anime__image">
        <img src={props.anime.images.jpg.image_url} alt="" />
      </div>
      <div className="anime__info">
        <h3 className="anime__title">{props.anime.title}</h3>
        <div className="anime__desc">
          <div className="anime__background">
            <h4>Producers</h4>
            <div className={'anime__producers'}>
              {props.anime.producers.map((producer, index) => {
                if (index !== props.anime.producers.length - 1) {
                  return (
                    <span key={producer.mal_id}>
                      <a href={producer.url}>{producer.name}</a>,
                    </span>
                  );
                } else
                  return (
                    <span key={producer.mal_id}>
                      <a href={producer.url}>{producer.name}</a>
                    </span>
                  );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
