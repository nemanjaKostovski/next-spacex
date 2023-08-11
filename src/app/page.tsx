import Launches from './components/launches';
import { Company } from './components/company';

export default function Home() {
  return (
    <main className='bg-black'>
      <Company />
      <Launches />
    </main>
  );
}
