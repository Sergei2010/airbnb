import styles from './style.module.css';

const Link = ({ text, style, icon }) => {
	return (
		<a
			href="#"
			// className={`link ${style === 'light' ? 'link--light' : ''}`}
			className={
				styles.link + ' ' + (style === 'light' ? styles.linkLight : undefined)
			}
		>
			{icon && <img src={icon} alt="" />}

			{text}
		</a>
	);
};

export default Link;
