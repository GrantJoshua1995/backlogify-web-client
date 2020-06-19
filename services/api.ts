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
  async getBacklog(id: number): Promise<GetBacklogResponse> {
    const otpResponse = await this.client.get(`/backlogs/${id}`);

    return otpResponse.data;
  }
}

interface GetBacklogResponse {
  name: string;
  games: [];
  order: number;
}

export default new ApiClient(config.apiUrl);
