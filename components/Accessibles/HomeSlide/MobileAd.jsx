import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const MobileAd = () => {
	return (
		<div style={{ backgroundColor: "#F7F7F7", padding: 50 }}>
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
						sx={{
							fontWeight: "500",
							fontSize: 24,
							lineHeight: "29px",
							my: 3,
						}}
					>
						Download our app on the below stores
					</Typography>
					<Grid container maxWidth={430} display={"flex"} spacing={1}>
						<Grid
							item
							xs={12}
							sm={6}
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
						>
							<img
								src={"/googleAd.png"}
								alt={"google play"}
								width={214}
								height={63}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
						>
							<img src={"/appleAd.png"} alt={"apple"} width={193} height={64} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default MobileAd;
