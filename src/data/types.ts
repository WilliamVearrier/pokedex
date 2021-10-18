export type Type = {
  color: string;
  name: string;
};

export const types: Record<string, Type> = {
  normal: {
    color: '#A8A878',
    name: 'Normal'
  },
  fighting: {
    color: '#C03028',
    name: 'Fighting'
  },
  flying: {
    color: '#A890F0',
    name: 'Flying'
  },
  poison: {
    color: '#A040A0',
    name: 'Poison'
  },
  ground: {
    color: '#E0C068',
    name: 'Ground'
  },
  rock: {
    color: '#B8A038',
    name: 'Rock'
  },
  bug: {
    color: '#A8B820',
    name: 'Bug'
  },
  ghost: {
    color: '#705898',
    name: 'Ghost'
  },
  steel: {
    color: '#B8B8D0',
    name: 'Steel'
  },
  fire: {
    color: '#F08030',
    name: 'Fire'
  },
  water: {
    color: '#6890F0',
    name: 'Water'
  },
  grass: {
    color: '#78C850',
    name: 'Grass'
  },
  electric: {
    color: '#F8D030',
    name: 'Electric'
  },
  psychic: {
    color: '#F85888',
    name: 'Psychic'
  },
  ice: {
    color: '#98D8D8',
    name: 'Ice'
  },
  dragon: {
    color: '#7038F8',
    name: 'Dragon'
  },
  dark: {
    color: '#705848',
    name: 'Dark'
  },
  fairy: {
    color: '#EE99AC',
    name: 'Fairy'
  },
  unknown: {
    color: '#68A090',
    name: '???'
  }
};
