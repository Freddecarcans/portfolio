import Head from 'next/head'
import Link from 'next/link'
import NavBar from './components/navbar'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fred TABBAL</title>
        <link rel="icon" href="/favicon-Agence-Rampup.ico" />
        <meta
          name="description"
          content="Frederic TABBAL. Développeur web. Bordeaux. France. Javascript, React, React-native" />
      </Head>
      <NavBar />
      <main>
        <h1 className="title">
          Frédéric TABBAL
				</h1>
        <img src="/Frederic-Tabbal.png" alt="Frédéric Tabbal" className="portrait" />
        <p className="proverbe">"Le savoir que l'on ne complète pas chaque jour diminue tous les jours."</p>
        <p className="description">
          Développeur Web
				</p>

        <div className="grid">
          <Link href="/projects/biography">
            <a className="card">
              <h2>Biographie &rarr;</h2>
              <p>Tout savoir sur mon savoir et mes savoir-faire</p>
            </a>
          </Link>

          <Link href="/projects/productions">
            <a className="card">
              <h2>Réalisations CMS &rarr;</h2>
              <p>Sites internet réalisés pour l'agence RampUP</p>
            </a>
          </Link>

          <Link href="/projects/personnalprojects">
            <a className="card">
              <h2>Projets &rarr;</h2>
              <p>Applications réalisées en React, React-Native</p>
            </a>
          </Link>

          <a href="https://github.com/Freddecarcans" className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Github &rarr;</h2>
            <p>
              Consulter mes repositories sur Github
            </p>
          </a>

        </div>

      </main>

      <footer>
        <a className="footlink"
          href="https://rampup.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by Me at RampUP{' '}
          <img src="/favicon-Agence-Rampup.ico" alt="Rampup Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
					background-color: #dacfcd;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: left;
        }

        main {
					
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description,
        .proverbe {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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
          transition: color 0.55s ease, border-color 0.25s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #1c291f;
          border-color: #3b4b3f;
          background: #ffffff;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
				}
				
				.footlink:hover {
					text-decoration: underline;
					color:#3b4b3f;

				}

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
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
