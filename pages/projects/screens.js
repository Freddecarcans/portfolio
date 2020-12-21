import Head from 'next/head'
import Footer from '../components/footer'
import Link from 'next/link'
import NavBar from '../components/navbar'

export default function Screens() {
  return (
    <div className="container">
      <Head>
        <title>My Funeral Playlist</title>
        <link rel="icon" href="/favicon-Agence-Rampup.ico" />
        <meta
          name="description"
          content="Frederic TABBAL. Développeur web. Bordeaux. France. Javascript, React, React-native" />
      </Head>
      <NavBar />
      <main>

        <h1 className="title">My Funeral Playlist</h1>
        <div className="grid">
          <div className="card">
            <h2>Ecran 1</h2>
            <img src="/ecran1.png" alt="écran 1" className="zoom" />
          </div>
          <div className="card">
            <h2>Ecran 2</h2>
            <img src="/ecran2.png" alt="écran 2" className="zoom" />
          </div>
          <div className="card">
            <h2>Ecran 3</h2>
            <img src="/ecran3.png" alt="écran 3" className="zoom" />
          </div>
          <div className="card">
            <h2>Ecran 4</h2>
            <img src="/ecran4.png" alt="écran 4" className="zoom" />
          </div>

          <div className="card">
            <h2>Ecran 5</h2>
            <img src="/ecran5.png" alt="écran 5" className="zoom" />
          </div>

          <div className="card">
            <h2>Ecran 6</h2>
            <img src="/ecran6.png" alt="sécran 6" className="zoom" />
          </div>

          <div className="card">
            <h2>Ecran 7</h2>
            <img src="/ecran7.png" alt="écran 7" className="zoom" />
          </div>

          <div className="card">
            <h2>Ecran 8</h2>
            <img src="/ecran8.png" alt="écran 8" className="zoom" />
          </div>
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
          /*border: 1px solid #eaeaea;
          border-radius: 10px;*/
          transition: color 0.25s ease, border-color 0.25s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          /*color: #1c291f;
          border-color: #3b4b3f;*/
          
        }

        .zoom:hover {
          transform: scale(3);
        }

        .card img {
          max-width: 300px;
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