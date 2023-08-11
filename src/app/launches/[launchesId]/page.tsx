'use client';

import LaunchDetailsCard from '@/app/components/launchDetailsCard';
import { getLaunchInfo } from '@/lib/fetch';
import { useState, useEffect } from 'react';

type LaunchDetails = {
  links: { patch: { large: string } };
  params: { launchesId: string };
  name: string;
  date_local: string;
  launchesId: string;
  details: string;
  flickr: { original: string };
};

export default function LaunchDetails({ params }: LaunchDetails) {
  const id = params.launchesId;

  const [launchDetails, setLaunchDetails] = useState<LaunchDetails | null>(
    null
  );

  useEffect(() => {
    async function fetchLaunchDetails() {
      if (id) {
        try {
          const details = await getLaunchInfo(id as unknown as string);
          setLaunchDetails(details);
        } catch (error) {
          console.error('Error fetching launch details:', error);
        }
      }
    }

    fetchLaunchDetails();
  }, [id]);

  if (!launchDetails) {
    return <p>Loading launch details...</p>;
  }

  return (
    <>
      <LaunchDetailsCard
        id={launchDetails.launchesId}
        key={launchDetails.launchesId}
        details={launchDetails.details}
        name={launchDetails.name}
        date={launchDetails.date_local.slice(0, 10)}
        patch={launchDetails.links.patch.large}
        flickr={launchDetails.flickr}
      />
    </>
  );
}
