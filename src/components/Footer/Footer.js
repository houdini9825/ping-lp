import styles from './Footer.module.css';
import SocialMediaIcon from '../SocialMediaIcons/SocialMediaIcon';
import {
	AiFillFacebook,
	AiOutlineTwitter,
	AiOutlineInstagram,
  AiOutlineCopyrightCircle
} from 'react-icons/ai';

function Footer() {

  const iconStyles = {width: '15px', height: '15px'}

	return (
		<div className={styles.container}>
      <div className={styles['icon-container']}>
			<SocialMediaIcon imgSrc={<AiFillFacebook style={iconStyles}/>} />
			<SocialMediaIcon style={iconStyles} imgSrc={<AiOutlineTwitter style={iconStyles}/>} />
			<SocialMediaIcon imgSrc={<AiOutlineInstagram style={iconStyles}/>} />
      </div>
      <p><AiOutlineCopyrightCircle/> Copyright Ping. All rights reserved.</p>
		</div>
	);
}

export default Footer;
