export const IconStar = () => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10.0002 3.9585L11.4585 8.54183H16.0418L12.2918 11.4585L13.5418 16.0418L10.0002 13.1252L6.4585 16.0418L7.7085 11.4585L3.9585 8.54183H8.54183L10.0002 3.9585Z"
				fill="#FCD34D"
				stroke="#F59E0B"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Heart = ({ active = false }) => {
	/*
	fill="#FDA4AF"
	stroke="#F43F5E"
	*/

	return (
		<svg
			width="21"
			height="19"
			viewBox="0 0 21 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.41 2.72858C8.47734 0.56431 5.25442 -0.0178736 2.83287 1.96395C0.411323 3.94578 0.0704022 7.25929 1.97206 9.60321L10.41 17.4177L18.848 9.60321C20.7497 7.25929 20.4504 3.92493 17.9872 1.96395C15.524 0.00297338 12.3428 0.56431 10.41 2.72858Z"
				stroke={active ? "#F43F5E" : "#374151"}
				fill={active ? "#FDA4AF" : ""}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
