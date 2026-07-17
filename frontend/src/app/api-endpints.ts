let useDebugUrl: boolean = false;

export class ApIModule {
  static getApiEndpointRandom(): string {
    let randomNumberApiEndpoint: string = '/api/random';
    if (useDebugUrl) {
      randomNumberApiEndpoint = 'http://localhost:5202/api/random';
    }
    return randomNumberApiEndpoint;
  }
  static getApiEndpointShoppingListGet(): string {
    let shoppingListGetApiEndpoint: string = '/api/shoppinglist';
    if (useDebugUrl) {
      shoppingListGetApiEndpoint = 'http://localhost:5202/api/shoppinglist';
    }
    return shoppingListGetApiEndpoint;
  }
}
