import Link from 'next/link'
import Head from 'next/head'
import Footer from '../components/footer'
import NavBar from '../components/navbar'

export default function PersonnalProjects() {
  return (
    <div className="container">
      <Head>
        <title>Projets</title>
        <link rel="icon" href="/favicon-Agence-Rampup.ico" />
        <meta
          name="description"
          content="Frederic TABBAL. Développeur web. Bordeaux. France. Javascript, React, React-native" />
      </Head>
      <NavBar />
      <main>
        <h1 className="title">Projets</h1>

        <div className="grid">
          <div className="card">
            <img src="/mfp.png" alt="appli My Funeral Playlist" />
          </div>
          <div className="card">
            <h2>My Funeral Playlist</h2>
            <p>Application mobile écrite en React-Native</p>
            <Link href="/projects/screens" >
              <p className="back">Voir les captures d'écran ➔</p>
              </Link>
          </div>
          <div className="card">
            <img src="/c2g.png" alt="appli Clean2Gether" />
          </div>
          <div className="card">
            <h2>Clean2Gether</h2>
            <p>Application mobile écrite en React-Native</p>
            <a href="https://www.clean2gether.com/" 
              target="_blank"
              rel="noopener noreferrer"
              >
              <p className="back">Voir le site ➔</p>
              </a>
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

        .card img {
          max-width: 300px;
        }

        .back  {
          text-decoration: none;
          color: #000000;
        }

        .back:hover {
          text-decoration: underline;
          color: #3b4b3f;
          transform: scale(1.1);
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