export interface Boardgame {
  externalId: string;
  name: string;
  images?: {
    thumb?: string;
    small?: string;
    medium?: string;
    large?: string;
    original?: string;
  };
  description?: string;
  designers?: string;
  rules_url?: string;
}
