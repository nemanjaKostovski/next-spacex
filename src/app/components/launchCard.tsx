import Image from 'next/image';
import Link from 'next/link';

type LaunchProps = {
  patch: string;
  name: string;
  date: number;
  id: string;
};

export default function LaunchCard({ patch, name, date, id }: LaunchProps) {
  function truncate(str: string, n = 25) {
    return str.length > n ? str.slice(0, n - 1) + ' ...' : str;
  }

  return (
    <Link
      className='w-48 h-60 border-indigo-600 border-2 rounded bg-black text-white m-4 p-2 flex flex-col items-center hover:scale-105'
      href={`launches/${id}`}
    >
      {patch && (
        <Image
          src={patch}
          alt={name}
          width={130}
          height={130}
          className='pb-2 max-h-36'
          sizes=''
        />
      )}
      <h2 className='text-center'>{truncate(name)}</h2>
      <p>{date}</p>
    </Link>
  );
}
