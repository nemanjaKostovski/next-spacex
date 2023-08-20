'use client';

import { getLaunchesInfo } from '@/lib/fetch';
import LaunchCard from '@/app/components/launchCard';
import { useEffect, useState } from 'react';
import Search from './search';
import useDebounce from './useDebounce';

type Launch = {
  links: { patch: { small: string } };
  name: string;
  date_local: string | number | Date;
  id: string;
};

export default function Launches() {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [filteredLaunches, setFilteredLaunches] = useState<Launch[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Possible adjustments for delay, initial delay 400ms
  const debouncedSearchQuery = useDebounce(searchQuery, 400);

  useEffect(() => {
    async function fetchLaunches() {
      const data = await getLaunchesInfo();
      setLaunches(data);
      setFilteredLaunches(data);
    }

    fetchLaunches();
  }, []);

  useEffect(() => {
    // Filter launches using the debounced search query
    const filteredLaunches = launches.filter((launch) =>
      launch.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );
    setFilteredLaunches(filteredLaunches);
  }, [debouncedSearchQuery, launches]);

  function handleChange(query: string) {
    setSearchQuery(query);
  }

  return (
    <>
      <Search handleChange={handleChange} />
      <div className='flex flex-row flex-wrap p-8 justify-center'>
        {filteredLaunches
          .map((launch) => ({
            key: launch.id,
            patch: launch.links.patch.small,
            name: launch.name,
            date: new Date(launch.date_local).getFullYear(),
            id: launch.id,
          }))
          .filter((launch) => launch.patch && launch.name) // Remove launches without a small patch
          .map((launch) => (
            <LaunchCard
              key={launch.key}
              patch={launch.patch}
              name={launch.name}
              date={launch.date}
              id={launch.id}
            />
          ))}
      </div>
    </>
  );
}
