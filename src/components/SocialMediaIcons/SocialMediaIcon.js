import styles from './SocialMediaIcons.module.css';

function SocialMediaIcon({imgSrc}) {
	return (
		<div className={styles.container}>
			{imgSrc}
		</div>
	);
}

export default SocialMediaIcon;
