export type Character = {
  name: string;
  description: string;
  image: string;
  race_id: Raca;
  class_id: Class;
  status: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};

export type Raca = {
  name: string;
  description: string;
  image: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};

export type Class = {
  name: string;
  description: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
