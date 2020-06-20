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
  async getUserBacklogs(id: number): Promise<GetUserBacklogsResponse> {
    const userBacklogsResponse = await this.client.get(`/users/${id}/backlogs/`);

    return userBacklogsResponse.data;
  }

  async getBacklog(id: number): Promise<GetBacklogResponse> {
    const backlogResponse = await this.client.get(`/backlogs/${id}`);

    return backlogResponse.data;
  }
}

interface GetUserBacklogsResponse {
  response: { id: number }[];
}

interface GetBacklogResponse {
  name: string;
  games: [];
  order: number;
}

export default new ApiClient(config.apiUrl);
