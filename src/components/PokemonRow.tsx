import { Pokemon } from '../types';
import Cell from './Cell';
import Row from './Row';

function PokemonRow({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Row>
      <Cell>
        <div>{pokemon.id}</div>
      </Cell>
      <Cell>
        <div>{pokemon.name}</div>
      </Cell>
      <Cell>
        <div>{pokemon.types.join(', ')}</div>
      </Cell>
      <Cell>
        <div>
          <img src={pokemon.sprite} alt='pokemon' width={100} height={100} />
        </div>
      </Cell>
    </Row>
  );
}

export default PokemonRow;
