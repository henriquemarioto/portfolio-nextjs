import Head from 'next/head';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio Marioto</title>
        <meta name="description" content="Portfólio Paulo Marioto" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header />

      <main>
        <Presentation />
        <Technologies />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
