import axios, { AxiosInstance } from 'axios';
import config from '../config';

class ApiClient {
  private client: AxiosInstance;
  private token: string | null = null;
  constructor(apiUrl: string) {
    this.client = axios.create({
      baseURL: apiUrl,
    });
  }
  async getUserBacklogs(id: number): Promise<GetBacklogResponse[]> {
    const userBacklogsResponse = await this.client.get(`/users/${id}/backlogs/`);

    return userBacklogsResponse.data;
  }

  async getBacklog(id: number): Promise<GetBacklogResponse> {
    const backlogResponse = await this.client.get(`/backlogs/${id}`);

    return backlogResponse.data;
  }

  async getIgdbGames(name: string): Promise<string> {
    const igdbGames = await this.client.get(`/igdb/games/${name}`);

    return igdbGames.data;
  }
}

interface GetBacklogResponse {
  id: number;
  name: string;
  games: [];
  order: number;
}

export default new ApiClient(config.apiUrl);
