import QuoteSearch from "@/components/Accessibles/HomeSlide/QuoteSearch";
import QuoteResults from "@/components/Accessibles/HomeSlide/QuoteResults";
import MobileAd from "@/components/Accessibles/HomeSlide/MobileAd";
import React from "react";

const Home = () => {
	return (
		<div>
			<QuoteSearch />
			<QuoteResults />
			<MobileAd />
		</div>
	);
};

export default Home;
