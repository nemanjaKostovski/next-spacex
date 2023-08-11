import Image from 'next/image';

type LaunchDetailsProps = {
  flickr: { original: string };
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
      <h1 className='text-center'>{name}</h1>
      <h2>{date}</h2>
      {flickr ? (
        <Image src={flickr.original[0]} alt={name} width={500} height={500} />
      ) : (
        patch && <Image src={patch} alt={name} width={500} height={500} />
      )}
      <p>{details}</p>
    </div>
  );
}
