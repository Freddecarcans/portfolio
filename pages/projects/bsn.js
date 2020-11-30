import Link from 'next/link'
import Head from 'next/head'
import Footer from '../components/footer'

export default function Bsn() {
	return (
		<>
			<Head>
				<title>Bsn</title>
			</Head>
			<h1>First Project</h1>
			<h2>
				<Link href="/">
					<a>Retour à l'accueil</a>
				</Link>
			</h2>
			<Footer />
		</>
		
	)
}