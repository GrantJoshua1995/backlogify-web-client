export interface Backlog {
  id?: number;
  name: string;
  order: number;
  games: BacklogGame[];
}

export interface BacklogGame {
  id?: number;
  name: string;
  backlog_id?: number;
}
