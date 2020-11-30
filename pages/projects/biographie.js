import Link from 'next/link'
import Head from 'next/head'
import Footer from '../components/footer'

export default function Bsn() {
	return (
		<div className="container">
			<Head>
				<title>Biographie</title>
				<link rel="icon" href="/favicon-Agence-Rampup.ico" />
			</Head>
			<main>
			<h1 className="title">Ma Bio</h1>
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