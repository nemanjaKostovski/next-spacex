import { getCompanyInfo } from '@/lib/fetch';
import Image from 'next/image';

export async function Company() {
  const companyInfo = await getCompanyInfo();
  return (
    <header>
      <Image
        src='/images/header-image.jpg'
        alt='SpaceX'
        width={3000}
        height={2000}
        className='invisible sm:visible w-screen h-screen absolute'
      />

      <div className='flex flex-col text-white relative w-full h-screen text-center'>
        <h1 className='text-4xl'>{companyInfo.name}</h1>
        <h2 className='text-3xl'>Founder: {companyInfo.founder}</h2>
        <h2 className='text-2xl'>Founded: {companyInfo.founded}</h2>
        <Image
          src='/images/spacex-logo.png'
          alt='SpaceX'
          width={400}
          height={250}
          className='visible sm:invisible mt-48'
        />
        <p className='text-xl bottom-0 absolute sm:bg-slate-500'>
          {companyInfo.summary}
        </p>
      </div>
    </header>
  );
}
