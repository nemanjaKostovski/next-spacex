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
        className='w-screen h-screen absolute'
      />
      <div className='flex flex-col text-white relative w-full h-screen text-center'>
        <h1 className='text-4xl'>{companyInfo.name}</h1>
        <h2 className='text-3xl'>Founder: {companyInfo.founder}</h2>
        <h2 className='text-2xl'>Founded: {companyInfo.founded}</h2>
        <p className='text-xl bottom-0 absolute bg-slate-500'>
          {companyInfo.summary}
        </p>
      </div>
    </header>
  );
}
