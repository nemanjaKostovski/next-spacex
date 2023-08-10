import Image from 'next/image';

type LaunchProps = {
  patch: string;
  name: string;
  date: number;
};

export default function LaunchCard({ patch, name, date }: LaunchProps) {
  function truncate(str: string, n = 25) {
    return str.length > n ? str.slice(0, n - 1) + ' ...' : str;
  }

  return (
    <div className='w-48 h-60 border-indigo-600 border-2 rounded bg-black text-white m-4 p-2 flex flex-col items-center'>
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
    </div>
  );
}
