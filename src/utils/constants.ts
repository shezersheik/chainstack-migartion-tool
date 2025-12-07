export interface Provider {
  id: string;
  name: string;
  icon: string;
}

export interface Endpoint {
  id: number;
  name: string;
  url: string;
  type: string;
}

export const providers: Provider[] = [
  { id: 'alchemy', name: 'Alchemy', icon: 'A' },
  { id: 'infura', name: 'Infura', icon: 'I' },
  { id: 'quicknode', name: 'QuickNode', icon: 'Q' },
  { id: 'ankr', name: 'Ankr', icon: 'K' },
];

export const mockEndpoints: Endpoint[] = [
  {
    id: 1,
    name: 'Ethereum Mainnet',
    url: 'https://eth-mainnet.alchemyapi.io/v2/...',
    type: 'JSON-RPC',
  },
  {
    id: 2,
    name: 'Polygon Mainnet',
    url: 'https://polygon-mainnet.infura.io/v3/...',
    type: 'WebSocket',
  },
  {
    id: 3,
    name: 'Arbitrum One',
    url: 'https://arb-mainnet.g.alchemy.com/v2/...',
    type: 'JSON-RPC',
  },
];
