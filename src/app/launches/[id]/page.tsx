'use client';

import LaunchDetailsCard from '@/app/components/launchDetailsCard';
import LaunchDetailsCarouselCard from '@/app/components/launchDetailsCarouselCard';
import { getLaunchInfo } from '@/lib/fetch';
import { useState, useEffect } from 'react';

type LaunchDetails = {
  links: {
    patch: { large: string };
    flickr?: { original: string[] }; // Optional flickr property
  };
  params: { launchesId: string };
  name: string;
  date_local: string;
  launchesId: string;
  details: string;
};

export default function LaunchDetails({ params }: { params: { id: string } }) {
  const id = params.id;

  const [launchDetails, setLaunchDetails] = useState<LaunchDetails | null>(
    null
  );
  const [imageArr, setImageArr] = useState([]);
  const [imgIndex, setIndexNum] = useState(0);

  useEffect(() => {
    async function fetchLaunchDetails() {
      if (id) {
        try {
          const details = await getLaunchInfo(id as unknown as string);
          setLaunchDetails(details);

          const images = details.links.flickr.original.map(
            (img: string) => img
          );
          setImageArr(images);
        } catch (error) {
          console.error('Error fetching launch details: ', error);
        }
      }
    }

    fetchLaunchDetails();
  }, [id]);

  if (!launchDetails) {
    return <p>Loading launch details...</p>;
  }

  const handleClickPrev = () => {
    setIndexNum(imgIndex === 0 ? imageArr.length - 1 : imgIndex - 1);
  };

  const handleClickNext = () => {
    setIndexNum(imgIndex === imageArr.length - 1 ? 0 : imgIndex + 1);
  };

  return imageArr[0] === undefined ? (
    <LaunchDetailsCard
      id={launchDetails.launchesId}
      key={launchDetails.launchesId}
      details={launchDetails.details}
      name={launchDetails.name}
      date={launchDetails.date_local.slice(0, 10)}
      patch={launchDetails.links.patch.large}
    />
  ) : (
    <LaunchDetailsCarouselCard
      id={launchDetails.launchesId}
      key={launchDetails.launchesId}
      details={launchDetails.details}
      name={launchDetails.name}
      date={launchDetails.date_local.slice(0, 10)}
      flickr={imageArr[imgIndex]}
      handleClickNext={handleClickNext}
      handleClickPrev={handleClickPrev}
    />
  );
}
