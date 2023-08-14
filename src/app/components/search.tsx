import { ChangeEvent } from 'react';

type SearchProps = {
  handleChange: (query: string) => void;
};

const Search: React.FC<SearchProps> = ({ handleChange }) => {
  return (
    <div className='h-48 p-16 justify-center flex'>
      <label htmlFor='search' className='text-white text-2xl pt-1'>
        Search for a flight:{' '}
      </label>
      <input
        type='text'
        id='search'
        placeholder='Search here'
        className='h-10 pl-2 ml-2 rounded w-80 m-8 sm:m-0'
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleChange(e.target.value)
        }
      />
    </div>
  );
};

export default Search;
