import Head from 'next/head';
import Nav from '../components/Nav';
import Home from '../components/Home';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next JS Tutorial</title>
        <meta keywords="Coding Programming" />
      </Head>
      <Nav />
      <h2>Welcome</h2>
    </div>
  );
}
