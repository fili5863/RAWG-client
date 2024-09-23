import { ImageProps } from '@chakra-ui/react';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface PlatformsProps {
  platforms: Platform[];
}

export interface GameCardProps {
  game: Game;
  imageProps?: ImageProps;
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  games: Game[];
}

export interface GenresResponse {
  results: Genre[];
}
