export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: Array<string>;
  url: string;
  created: Date;
}

export interface IPagination {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
export interface ICharacterResult {
  results: ICharacter[];
  info: IPagination;
}
