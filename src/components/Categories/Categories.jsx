import CategoryItem from '../CategoryItem/CategoryItem';
import FilterBtn from '../FilterBtn/FilterBtn';

import categoriesData from './../../data/categories.json';

import './style.css';

const Categories = () => {
	return (
		<div className="categories">
			<div className="container">
				<div className="categories__row">
					<div className="categories__list">
						{categoriesData.map((cat, index) => (
							<CategoryItem
								title={cat.title}
								img={cat.img}
								key={index}
							/>
						))}

						{/* <CategoryItem
							title="Lakefront"
							img="./img/categories/02.svg"
						/> */}
					</div>
					<div className="categories__filter">
						<FilterBtn />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Categories;
