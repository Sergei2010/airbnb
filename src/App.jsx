import { createBrowserRouter } from "react-router";
import { RouterProvider, Outlet } from "react-router";

// Pages
import Main from './pages/Main';
import Listing from './pages/Listing';
import Item from './pages/Item';

// Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';


const Layout = () => {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Main />,
			},
			{
				path: "listing",
				element: <Listing />,
			},
			{
				path: "item",
				element: <Item />,
			},
		],
	},
]);

function App() {
	return (
		<RouterProvider router={router} />
	);
}

export default App;
