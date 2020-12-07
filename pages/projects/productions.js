import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/footer'
import Card from '../components/productionsCard'


export default function Productions() {
  return (
    <div className="container">
      <Head>
        <title>Réalisations CMS</title>
        <link rel="icon" href="/favicon-Agence-Rampup.ico" />
      </Head>
      <main>
        <h1 className="title">Réalisations CMS</h1>
        <div className="grid">
          <a className="card">
            <h3>Elp Libérons votre puissance</h3>
            <img src="/elp.png" alt="site elp" />
            <p>Voir le site &rarr;</p>
          </a>
          <a className="card">
            <h3>BSN Conseil</h3>
            <img src="/bsnconseil.png" alt="site BSN Conseil" />
            <p>Voir le site &rarr;</p>
          </a>
          <a className="card">
            <h3>Fromager</h3>
            <img src="/site-fromager.png" alt="site fromager" />
            <p>Voir le site &rarr;</p>
          </a>
          <a className="card">
            <h3>Restaurant</h3>
            <img src="/site-restaurant.png" alt="site restaurant" />
            <p>Voir le site &rarr;</p>
          </a>
          <a className="card">
            <h3>Charpentier</h3>
            <img src="/site-charpentier.png" alt="site charpentier" />
            <p>Voir le site &rarr;</p>
          </a>
          <a className="card">
            <h3>Plombier</h3>
            <img src="/site-plombier.png" alt="site plombier" />
            <p>Voir le site &rarr;</p>
          </a>
        </div>

        <h2>
          <Link href="/">
            <a>Retour à l'accueil</a>
          </Link>
        </h2>
      </main>
      <Footer />
      <style jsx>{`
				.container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.25s ease, border-color 0.25s ease;
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