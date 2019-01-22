export type Story = {
  name: string;
  description: string;
  interests: Array<string>;
  userId: string;
  type: string;
  coordinates: Array<number>;
  hashtags?: Array<string>;
  cover?: string;
  date: { create: Date; update: Date};
  info?: Object;
};
