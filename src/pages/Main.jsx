import Card from "@components/Card/Card";
import cardsData from "@data/data.json";
import Categories from "@components/Categories/Categories";

const Main = () => {
	return (
		<>
			<Categories />
			<main className="main">
				<div className="container">
					<div className="main__cards">
						{cardsData.map((item, index) => {
							return <Card data={item} key={index} />;
						})}
					</div>
				</div>
			</main>
		</>
	);
};

export default Main;
