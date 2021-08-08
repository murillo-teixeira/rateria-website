import Layout from '../components/Layout';
import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function Contacts() {
	return (
		<>
			<Head>
				<title>Rateria Poli-USP</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/logo-fundo-azul.svg" />
			</Head>

			<Layout currentPage="Contacts">
				<p>Oi</p>
			</Layout>
		</>
	);
}
