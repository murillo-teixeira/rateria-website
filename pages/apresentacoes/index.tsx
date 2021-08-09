import Layout from '../../components/Layout';
import Head from 'next/head';
import styles from './Apresentations.module.css';
import { SocialIcon } from 'react-social-icons';
import Iframe from 'react-iframe';

export default function Apresentations(this: any) {
	const videoOnReady = (event: { target: { pauseVideo: () => void } }) => {
		event.target.pauseVideo();
	};

	const opts = {
		height: '390',
		width: '640',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};

	return (
		<>
			<Head>
				<title>Rateria Poli-USP</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/logo-fundo-azul.svg" />
			</Head>

			<Layout currentPage="Apresentations">
				<div className={styles.contentWrapper}>
					<div className={styles.sectionTitle}>
						<div className={styles.titleLine}></div>
					</div>

					<div className={styles.wrapper}>
						<div className={styles.container}>
							<div className={styles.image}></div>
							<div className={styles.text}>
								<h1 className={styles.title}>Apresentações</h1>
								<p>
									&emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Pellentesque luctus tincidunt tincidunt. Duis rhoncus nulla
									dapibus, scelerisque metus eget, fermentum sem. In hac
									habitasse platea dictumst. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Sed porttitor semper velit quis
									euismod. Vivamus placerat, nibh sit amet volutpat pulvinar,
									nunc arcu tempor sem, ut imperdiet urna ipsum ultricies
									mauris. Nulla pretium mattis lorem quis dapibus. Morbi tortor
									lacus, eleifend sed condimentum quis, commodo in nibh. Nulla
									imperdiet fringilla mollis.
									<br />
								</p>

								<div className={styles.buttonsArea}>
									<a>Inters</a>
									<a>Eventos Beneficentes</a>
									<a>Casamentos</a>
									<a>Competições</a>
									<a>Festas de empresa</a>
									<a>Festas de escola</a>
									<div className={styles.line}></div>
									<a>Outros</a>
									<div className={styles.line}></div>
								</div>
							</div>
						</div>
						<p className={styles.inviteToWatch}>
							&emsp;Conheça nosso samba no vídeo abaixo e entre no nosso Youtube
							para ver mais:
							<SocialIcon
								url="https://www.youtube.com/user/Rateria"
								label="Youtube"
								fgColor="#FFF5DA"
								className={styles.socialIcon}
								target="_blank"
								style={{
									height: 32,
									width: 32,
									marginLeft: '0.7rem',
								}}
							/>
						</p>
						<div className={styles.centerDiv}>
							<div className={styles.videoWrapper}>
								<div className={styles.videoContainer}>
									<Iframe
										url="https://www.youtube.com/embed/KoWoewVNdQU"
										className={styles.video}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
