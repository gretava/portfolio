import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              I like to travel, read books, play cozy games. After moving to
              Austria, fell in love with the mountains and hiking, also cycling.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
