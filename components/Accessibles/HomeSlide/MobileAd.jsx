import {
	Box,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import React from "react";

const MobileAd = () => {
	return (
		<Container sx={{ bgcolor: "lightgray", p: 5 }}>
			<Grid
				container
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Grid
					item
					xs={12}
					display={"flex"}
					flexDirection={"column"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<Typography
						sx={{ fontWeight: 700, fontSize: 24, my: 1 }}
					>
						Great news your area is covered
					</Typography>
					<Typography
						sx={{ fontWeight: 700, fontSize: 24, my: 2 }}
					>
						Download Our Mobile App
					</Typography>
					<Box display={"flex"}>
						<img
							src={"/googleAd.png"}
							alt={"google play"}
							width={150}
							height={50}
						/>
						<img
							src={"/appleAd.png"}
							alt={"apple"}
							width={150}
							height={50}
						/>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default MobileAd;
