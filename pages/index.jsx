import QuoteSearch from "@/components/Accessibles/HomeSlide/QuoteSearch";
import QuoteResults from "@/components/Accessibles/HomeSlide/QuoteResults";
import MobileAd from "@/components/Accessibles/HomeSlide/MobileAd";
import React, { useRef } from "react";
import { Box } from "@mui/material";

const Home = () => {
	const targetRef = useRef(null);
	const handleCardClick = () => {
		if (targetRef.current === null) {
			return;
		}
		targetRef.current.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<div>
			<QuoteSearch />
			<QuoteResults cardClick={handleCardClick} />
			<Box ref={targetRef}>
				<MobileAd />
			</Box>
		</div>
	);
};

export default Home;
