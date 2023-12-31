import Image from 'next/image';
import Link from 'next/link';

type LaunchDetailsProps = {
  patch: string;
  name: string;
  details: string;
  date: string;
  id: string;
  key: string;
};

export default function LaunchDetailsCard({
  patch,
  details,
  name,
  date,
  id,
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
      <Image
        src={patch}
        alt={name}
        width={500}
        height={500}
        className='max-h-96 m-4'
      />
      <p className='w-9/12 text-center'>{details}</p>
    </div>
  );
}
