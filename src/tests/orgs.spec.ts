import dotenv from 'dotenv';
import { HolodexApiClient } from '../client';

describe('Orgs', () => {
  let client: HolodexApiClient;

  beforeAll(async () => {
    dotenv.config();
    client = new HolodexApiClient({
      apiKey: process.env.HOLODEX_APIKEY,
    });
  });

  it('should work', () => expect(client.getOrgs()).resolves.toBeDefined());
});
