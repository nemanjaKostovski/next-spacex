import Image from 'next/image';
import Link from 'next/link';

type LaunchDetailsProps = {
  flickr: string;
  name: string;
  details: string;
  date: string;
  id: string;
  key: string;
  handleClickNext: () => void;
  handleClickPrev: () => void;
};

export default function launchDetailsCarouselCard({
  flickr,
  details,
  name,
  date,
  id,
  handleClickNext,
  handleClickPrev,
}: LaunchDetailsProps) {
  return (
    <div
      key={id}
      className='w-full h-full sm:h-screen bg-gray-800 text-white p-2 flex flex-col items-center pb-96'
    >
      <Link href={'/'} className='left-0 absolute hover:text-gray-300'>
        🔙 Back to Homepage
      </Link>
      <h1 className='text-center mt-6'>{name}</h1>
      <h2>{date}</h2>
      <div className='flex flex-row'>
        <button className='text-2xl sm:text-4xl' onClick={handleClickPrev}>
          ◀️
        </button>
        <Image
          className='w-60 sm:w-96 h-96'
          src={flickr}
          alt={name}
          width={500}
          height={500}
        />
        <button className='text-2xl sm:text-4xl' onClick={handleClickNext}>
          ▶️
        </button>
      </div>
      <p className='w-9/12 text-center'>{details}</p>
    </div>
  );
}
