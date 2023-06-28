import { useMemo } from 'react';
import { Pokemon } from '../types';
import Cell from './Cell';
import PokemonRow from './PokemonRow';
import Row from './Row';

function PokedexTable({
  pokemons,
  selectedType,
}: {
  pokemons: Pokemon[];
  selectedType?: string;
}) {
  const selectedPokemons = useMemo(() => {
    if (selectedType) {
      return pokemons.filter((pokemon) => pokemon.types.includes(selectedType));
    }
    return pokemons;
  }, [selectedType, pokemons]);

  return (
    <div className='h-full overflow-y-auto'>
      <Row>
        <Cell>
          <div>ID</div>
        </Cell>
        <Cell>
          <div>Name</div>
        </Cell>
        <Cell>
          <div>Types</div>
        </Cell>
        <Cell>
          <div>Image</div>
        </Cell>
      </Row>
      {selectedPokemons.map((pokemon) => (
        <PokemonRow key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokedexTable;
