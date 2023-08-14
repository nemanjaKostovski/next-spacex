import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';

type LaunchDetailsProps = {
  flickr: { original: [string] };
  patch: string;
  name: string;
  details: string;
  date: string;
  id: string;
};

export default function LaunchDetailsCard({
  patch,
  flickr,
  details,
  name,
  date,
  id,
}: LaunchDetailsProps) {
  return (
    <div
      key={id}
      className='w-full h-screen bg-gray-800 text-white p-2 flex flex-col items-center'
    >
      <Link href={'/'} className='left-0 absolute hover:text-gray-300'>
        🔙 Back to Homepage
      </Link>
      <h1 className='text-center mt-6'>{name}</h1>
      <h2>{date}</h2>
      {flickr
        ? flickr.original.map((image) => (
            <Image src={image} alt={image} width={500} height={500} />
          ))
        : patch && <Image src={patch} alt={name} width={500} height={500} />}
      <p>{details}</p>
    </div>
  );
}
