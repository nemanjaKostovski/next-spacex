'use client';

import { getLaunchesInfo } from '@/lib/fetch';
import LaunchCard from '@/app/components/launchCard';
import { useEffect, useState } from 'react';
import Search from './search';

type Launch = {
  links: { patch: { small: string } };
  name: string;
  date_local: string | number | Date;
};

export default function Launches() {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [filteredLaunches, setFilteredLaunches] = useState<Launch[]>([]);

  useEffect(() => {
    async function fetchLaunches() {
      const data = await getLaunchesInfo();
      setLaunches(data);
      setFilteredLaunches(data);
    }

    fetchLaunches();
  }, []);

  function handleChange(query: string) {
    const filteredLaunches = launches.filter((launch) =>
      launch.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredLaunches(filteredLaunches);
  }

  return (
    <>
      <Search handleChange={handleChange} />
      <div className='flex flex-row flex-wrap p-8 justify-center'>
        {filteredLaunches
          .map((launch) => ({
            key: launch.name,
            patch: launch.links.patch.small,
            name: launch.name,
            date: new Date(launch.date_local).getFullYear(),
          }))
          .filter((launch) => launch.patch && launch.name) // Remove launches without a small patch
          .map((launch) => (
            <LaunchCard
              key={launch.key}
              patch={launch.patch}
              name={launch.name}
              date={launch.date}
            />
          ))}
      </div>
    </>
  );
}
