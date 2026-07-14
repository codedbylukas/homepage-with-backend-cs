let useDebugUrl: boolean = true;

export class ApIModule {
  static getApiEndpointRandom(): string {
    let randomNumberApiEndpoint: string = '/api/random';
    if (useDebugUrl) {
      randomNumberApiEndpoint = 'http://localhost:5202/api/random';
    }
    return randomNumberApiEndpoint;
  }
}
