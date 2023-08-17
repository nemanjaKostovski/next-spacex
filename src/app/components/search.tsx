import { ChangeEvent } from 'react';

type SearchProps = {
  handleChange: (query: string) => void;
};

const Search: React.FC<SearchProps> = ({ handleChange }) => {
  return (
    <div className='h-48 sm:p-16 pt-16 justify-center items-center flex sm:flex-row flex-col'>
      <label
        htmlFor='search'
        className='text-white text-xl sm:text-2xl pt-1 text-center sm:pr-2'
      >
        Search for a flight:{' '}
      </label>
      <input
        type='text'
        id='search'
        placeholder='Search here'
        className='h-10 pl-2 ml-2 rounded sm:w-80 sm:m-0 flex items-center'
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleChange(e.target.value)
        }
      />
    </div>
  );
};

export default Search;
