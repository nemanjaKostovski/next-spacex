import Launches from './components/launches';
import { Company } from './components/company';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className='bg-black'>
      <Company />
      <Launches />
      <Footer />
    </main>
  );
}
