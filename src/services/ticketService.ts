const { v4: uuidv4 } = require('uuid');

export type Ticket = {
  id: string;
  title: string;
  owner: string;
  createdAt: string;
};

const store: Ticket[] = [];

export const list = (): Ticket[] => store;

export const create = (data: { title: string; owner: string }): Ticket => {
  const t: Ticket = {
    id: uuidv4(),
    title: data.title,
    owner: data.owner,
    createdAt: new Date().toISOString()
  };
  store.push(t);
  return t;
};

export const get = (id: string): Ticket | undefined => store.find((s) => s.id === id);
