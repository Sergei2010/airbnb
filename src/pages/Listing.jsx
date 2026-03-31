import ListingCard from "../components/ListingCard/ListingCard";
import style from "./styles/listing.module.css";

import data from "@data/listing.json";
import ListingOptions from "@/components/ListingOptions/ListingOptions";

const Listing = () => {
	return (
		<>
			<div className={style["options"]}>
				<div className="container">

					<ListingOptions />

				</div>
			</div>
			<div className="container">
				<div className={style["grid"]}>
					<div className={style["listing"]}>
						<div className={style["listing__desc"]}>
							200+ stays in Bordeaux
						</div>
						<div className={style["listingItems"]}>
							{data.map((item) => (
								<ListingCard key={item.id} data={item} />
							))}
						</div>
					</div>
					<div className="map">Map</div>
				</div>
			</div>
		</>
	);
};

export default Listing;
