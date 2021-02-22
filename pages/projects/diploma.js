import Head from 'next/head'
import Footer from '../components/footer'
import NavBar from '../components/navbar'


export default function Diploma() {
    return (
        <div className="container">
            <Head>
                <title>Biographie</title>
                <link rel="icon" href="/favicon-Agence-Rampup.ico" />
                <meta
                    name="description"
                    content="Frederic TABBAL. Développeur web. Bordeaux. France. Javascript, React, React-native" />
            </Head>
            <NavBar />
            <main>
                <h1 className="title">Titre Professionnel</h1>
                <div className="grid">
                    <img src="/diplome.png" alt="diplôme" />

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
    `}</style>
            </div>
  
    )
}