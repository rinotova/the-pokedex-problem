import { useState } from 'react';
import PokedexTable from './components/PokedexTable';
import { pokemonArray } from './pokeData';
import Select from 'react-select';

const pokeTypes = Array.from(
  new Set(pokemonArray.flatMap((pokemon) => pokemon.types))
).map((type) => ({
  value: type,
  label: type,
}));
pokeTypes.unshift({ value: '', label: 'All' });
function App() {
  const [selectedType, setSelectedType] = useState('');
  return (
    <main className='w-screen flex flex-col items-center justify-center'>
      <div className='w-full h-full max-w-screen-md border'>
        <Select
          placeholder='Select pokemon type...'
          className='mb-2'
          options={pokeTypes}
          onChange={(singleValue) => setSelectedType(singleValue?.value || '')}
        />
        <PokedexTable pokemons={pokemonArray} selectedType={selectedType} />
      </div>
    </main>
  );
}

export default App;
