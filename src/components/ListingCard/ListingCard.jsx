import { IconStar, Heart } from "@assets/Icons";
import styles from "./style.module.css";

const ListingCard = ({ data }) => {
	const {
		image,
		image2x,
		subtitle,
		title,
		details,
		rating,
		reviews,
		pricePerNight,
		currency,
		isFavorite,
	} = data;

	return (
		<div className={styles["card"]}>
			<div className={styles["card__img-wrapper"]}>
				<img
					src="/img/listing/01.jpg"
					srcSet="/img/listing/01@2x.jpg 2x"
					alt="Img"
					className={styles["card__img"]}
				/>
			</div>
			<div className={styles["card__content"]}>
				<div className={styles["card__header"]}>
					<div className={styles["card__title-wrapper"]}>
						<div className={styles["card__subtitle"]}>
							{subtitle}
						</div>
						<div className={styles["card__title"]}>{title}</div>
					</div>

					<Heart active={isFavorite} />
				</div>

				<div className={styles["card__details"]}>
					{details.join(" · ")}
				</div>

				<div className={styles["card__footer"]}>
					<div className={styles["card__rating"]}>
						<div className={styles["card__rating-value"]}>
							{rating}
						</div>
						<div className={styles["card__rating-icon"]}>
							<IconStar />
						</div>
						<div className={styles["card__rating-count"]}>
							({reviews} reviews)
						</div>
					</div>
					<div className={styles["card__price"]}>
						<strong>${pricePerNight}</strong> /night
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListingCard;
