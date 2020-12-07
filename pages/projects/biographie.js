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
					
						<div className="card">
							<h3>Contact</h3>
							<p>✆ 06 60 84 92 83</p>
              <p>✉ frederic.tabbal@gmail.com</p>
						</div>
					

					
						<div className="card">
							<h3>Diplôme</h3>
							<p>Titre professionnel</p>
              <p> de développeur web</p>
						</div>
					

				
						<div className="card">
							<h3>Compétences</h3>
							<p>Ecoute</p>
              <p>Adaptabilité</p>
              <p>Gestion</p>
              <p>Entrepreneuriat</p>
						</div>
				

					<div className="card">
						<h3>Passions</h3>
						<p>Pêche</p>
            <p>Musique</p>
            <p>Moto</p>
            <p>Cinéma</p>
					</div>

				</div>
			
				<Link href="/" >
        <h2 className="back">⇦ Retour ⇦</h2>
				</Link>
			
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
          background: #b1a2a0;
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
          text-align: center;
          font-size: 1.5rem;
        }

        .card p {
          text-align: center;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .back  {
          text-decoration: none;
          color: #000000;
        }
        .back:hover {
          text-decoration: underline;
          color: #1c291f;
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