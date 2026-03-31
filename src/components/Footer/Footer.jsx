import styles from "./style.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__inner}>
				<div className={styles.footer__left}>
					<span className={styles.footer__copyright}>
						© 2023 Airbnb, Inc.
					</span>
					<ul className={styles.footer__links}>
						<li>
							<a href="#" className={styles.footer__link}>
								Terms
							</a>
						</li>
						<li>
							<a href="#" className={styles.footer__link}>
								Sitemap
							</a>
						</li>
						<li>
							<a href="#" className={styles.footer__link}>
								Privacy
							</a>
						</li>
					</ul>
					<a href="#" className={styles.footer__link}>
						<span>Your Privacy Choices</span>
						<span className={styles.footer__toggle} aria-hidden="true">
							<span className={styles.footer__toggleCheck}>✓</span>
							<span className={styles.footer__toggleX}>×</span>
						</span>
					</a>
				</div>

				<div className={styles.footer__right}>
					<button type="button" className={styles.footer__control}>
						<span className={styles.footer__icon} aria-hidden="true">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="12" cy="12" r="9" stroke="currentColor" />
								<path
									d="M3 12h18M12 3c3.5 3 3.5 15 0 18M12 3c-3.5 3-3.5 15 0 18"
									stroke="currentColor"
								/>
							</svg>
						</span>
						English (US)
					</button>
					<button type="button" className={styles.footer__control}>
						$ USD
					</button>
					<button type="button" className={styles.footer__control}>
						Support &amp; resources
						<span className={styles.footer__icon} aria-hidden="true">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6 14l6-6 6 6"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</span>
					</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
