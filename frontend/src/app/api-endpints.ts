export class ApIModule {
  static getApiEndpointRandom(): string {
    let randomNumberApiEndpoint: string = 'http://localhost:5202/api/random';
    return randomNumberApiEndpoint;
  }
}
