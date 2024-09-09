export interface Game {
  id: number;
  name: string;
  background_image: string;
}

export interface GamesResponse {
  count: number;
  results: Game[];
}
