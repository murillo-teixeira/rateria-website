import styles from './AltFooter.module.css';
import { SocialIcon } from 'react-social-icons';

function NewFooter() {
	const linktreeIcon = {
		icon: 'M38.5696 18.7309L47.8523 35.6053C48.3118 36.4406 47.6434 37.4234 46.6159 37.4234H40.3961V43.8584C40.3961 44.1772 40.2694 44.483 40.044 44.7084C39.8185 44.9338 39.5128 45.0605 39.194 45.0605H35.4727C35.3149 45.0605 35.1586 45.0294 35.0127 44.969C34.8669 44.9086 34.7344 44.82 34.6227 44.7084C34.5111 44.5968 34.4226 44.4642 34.3622 44.3184C34.3018 44.1726 34.2707 44.0162 34.2707 43.8584V37.4236H35.9494L35.9501 37.4234C36.7204 37.4231 37.2886 36.8705 37.3309 36.2417C37.3449 36.02 37.2945 35.799 37.1857 35.6053L32 26.1785L36.097 18.7309C36.6331 17.7564 38.0334 17.7564 38.5696 18.7309ZM25.4304 18.7309C25.9666 17.7564 27.3669 17.7564 27.903 18.7309L32 26.1785L26.8143 35.6053C26.7055 35.799 26.6551 36.02 26.6691 36.2417C26.7114 36.8705 27.2797 37.4231 28.0499 37.4235H28.0493L28.0506 37.4236H29.7293V43.8584C29.7293 44.1772 29.6027 44.483 29.3772 44.7084C29.1518 44.9338 28.8461 45.0605 28.5272 45.0605H24.806C24.4872 45.0605 24.1815 44.9338 23.9561 44.7084C23.7306 44.483 23.604 44.1772 23.604 43.8584V37.4235H17.384C16.3565 37.4235 15.6882 36.4406 16.1477 35.6053L25.4304 18.7309Z',
		mask: 'M0,0v64h64V0H0z M38.5696 18.7309L47.8523 35.6053C48.3118 36.4406 47.6434 37.4234 46.6159 37.4234H40.3961V43.8584C40.3961 44.1772 40.2694 44.483 40.044 44.7084C39.8185 44.9338 39.5128 45.0605 39.194 45.0605H35.4727C35.3149 45.0605 35.1586 45.0294 35.0127 44.969C34.8669 44.9086 34.7344 44.82 34.6227 44.7084C34.5111 44.5968 34.4226 44.4642 34.3622 44.3184C34.3018 44.1726 34.2707 44.0162 34.2707 43.8584V37.4236H35.9494L35.9501 37.4234C36.7204 37.4231 37.2886 36.8705 37.3309 36.2417C37.3449 36.02 37.2945 35.799 37.1857 35.6053L32 26.1785L36.097 18.7309C36.6331 17.7564 38.0334 17.7564 38.5696 18.7309ZM25.4304 18.7309C25.9666 17.7564 27.3669 17.7564 27.903 18.7309L32 26.1785L26.8143 35.6053C26.7055 35.799 26.6551 36.02 26.6691 36.2417C26.7114 36.8705 27.2797 37.4231 28.0499 37.4235H28.0493L28.0506 37.4236H29.7293V43.8584C29.7293 44.1772 29.6027 44.483 29.3772 44.7084C29.1518 44.9338 28.8461 45.0605 28.5272 45.0605H24.806C24.4872 45.0605 24.1815 44.9338 23.9561 44.7084C23.7306 44.483 23.604 44.1772 23.604 43.8584V37.4235H17.384C16.3565 37.4235 15.6882 36.4406 16.1477 35.6053L25.4304 18.7309Z',
		color: '#39E09B',
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.socialIcons}>
				<SocialIcon
					url="https://api.whatsapp.com/send?phone=5511958449446&text=Olá!%20Vim%20pelo%20site!"
					label="WhatsApp"
					className={styles.socialIcon}
					fgColor="#FFF5DA"
					target="_blank"
				/>
				<SocialIcon
					url="https://www.youtube.com/user/Rateria"
					label="Youtube"
					fgColor="#FFF5DA"
					className={styles.socialIcon}
					target="_blank"
				/>
				<SocialIcon
					url="https://www.facebook.com/rateria"
					label="Facebook"
					fgColor="#FFF5DA"
					className={styles.socialIcon}
					target="_blank"
				/>
				<SocialIcon
					url="https://www.instagram.com/rateriapoliusp"
					label="Instagram"
					className={styles.socialIcon}
					fgColor="#FFF5DA"
					target="_blank"
				/>
				<SocialIcon
					url="https://linktr.ee/rateria"
					defaultSVG={linktreeIcon}
					label="Outros links importantes!"
					fgColor="#FFF5DA"
					bgColor="#28BF7B"
					className={styles.socialIcon}
					target="_blank"
				/>
			</div>
			<div className={styles.credits}>
				<p>Página feita com 💛 por amigos ratinhos.</p>
			</div>
		</div>
	);
}

export default NewFooter;
