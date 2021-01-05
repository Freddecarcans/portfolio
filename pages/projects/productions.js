import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';
import NavBar from '../components/navbar'


export default function Productions() {
  return (
    <div className="container">
      <Head>
        <title>Réalisations CMS</title>
        <link rel="icon" href="/favicon-Agence-Rampup.ico" />
        <meta
          name="description"
          content="Frederic TABBAL. Développeur web. Bordeaux. France. Javascript, React, React-native" />
      </Head>
      <NavBar />
      <main>
        <h1 className="title">Réalisations CMS</h1>
        <p>Apprendre, c'est ramer à contre-courant, dès qu'on s'arrête, on recule.</p>
        <div className="grid">
          <a href="https://elp-liberonsvotrepuissance.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="card">
            <h2>Elp</h2>
            <img src="/site-elp.png" alt="site elp" />
          </a>
          <a
            href="https://bemysound.info"
            target="_blank"
            rel="noopener noreferrer"
            className="card">
            <h2>Blog BeMysound</h2>
            <img src="/blog-bemysound.png" alt="blog BeMysound" />
          </a>
          <a
            href="https://rampup.fr/template/fromager"
            target="_blank"
            rel="noopener noreferrer"
            className="card">
            <h2>Fromager</h2>
            <img src="/site-fromager.png" alt="site fromager" />
          </a>
          <a
            href="https://bsnconseil.com"
            target="_blank"
            rel="noopener noreferrer"
            className="card">
            <h2>BSN Conseil</h2>
            <img src="/site-bsn.png" alt="site BSN Conseil" />
          </a>
          
          <a
            href="https://rampup.fr/template/restau"
            target="_blank"
            rel="noopener noreferrer"
            className="card">
            <h2>Restaurant</h2>
            <img src="/site-restaurant.png" alt="site restaurant" />
          </a>
          
          <a
            href="https://rampup.fr/template/plombier"
            target="_blank"
            rel="noopener noreferrer"
            className="card">
            <h2>Plombier</h2>
            <img src="/site-plombier.png" alt="site plombier" />
          </a>
        </div>
      </main>
      <Footer />
      <style jsx>{`
				.container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: left;
          background: #dacfcd;
        }
        
				main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main p {
          text-align: center;
        }
        
				.title {
          margin: 0;
          line-height: 1.15;
					font-size: 4rem;
					text-align: center;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.25s ease, border-color 0.25s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #1c291f;
          border-color: #3b4b3f;
          background: #ffffff;
        }

        .card img {
          max-width: 300px;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
          
          .title {
          margin: auto;
          line-height: 1.1;
          font-size: 3rem;
          }
        }        
			`}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>




  )
}