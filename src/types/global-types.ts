export type Character = {
  name: string;
  description: string;
  history?: string;
  status?: string;
  father?: string;
  mother?: string;
  spouse?: string;
  birth?: string;
  death: string;
  sons_id?: string[];
  image?: string;
  race_id?: Raca;
  class_id?: Class;
  weapon_id?: Weapon;
  ringOfPower_id?: RingOfPower;
  kingdom_id?: Kingdom;
  location_id?: Location;
  language_id?: Language;
  book_id?: Book[];
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

export type Book = {
  title: string;
  description: string;
  image: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
}

export type Kingdom = {
  name: string;
  description: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
}

export type Language = {
  name: string;
  description: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
}

export type RingOfPower = {
  name: string;
  description: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  images: string;
}

export type Weapon = {
  name: string;
  description: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  images: string;
}

export type Location = {
  name: string;
  description: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  images: string;
}

