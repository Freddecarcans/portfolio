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
      <div className="grid">
					<Link href="/projects/biographie">
						<a className="card">
							<h3>Biographie &rarr;</h3>
							<p>Tout savoir sur mon savoir et mes savoir-faire</p>
						</a>
					</Link>

					<Link href="/projects/productions">
						<a className="card">
							<h3>Réalisatons CMS &rarr;</h3>
							<p>Sites internet réalisés pour l'agence RampUP</p>
						</a>
					</Link>

					<Link href="/projects/projets">
						<a className="card">
							<h3>Projets &rarr;</h3>
							<p>Applications réalisées en React, React-Native</p>
						</a>
					</Link>

					<a href="https://github.com/Freddecarcans" className="card"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h3>Github &rarr;</h3>
						<p>
							Consulter mes repositories sur Github
            </p>
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
          text-align: left;
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
          border-color: #1c291f;
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