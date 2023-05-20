import StunningBox from "@/components/StunningBox";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Stunning = () => {
	return (
		<div style={{ marginTop: 20, marginBototm: 20 }}>
			<Grid container>
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
							fontFamily: "Pinyon Script",
							fontSize: 30,
							textAlign: "center",
							color: "#b7b7b7",
						}}
					>
						History of
					</Typography>
					<Typography
						sx={{
							fontSize: 32,
							letterSpacing: 0.5,
							fontWeight: 900,
							color: "#041527",
							textTransform: "capitalize",
							textAlign: "center",
							marginBottom: 1,
						}}
					>
						Our Restaurant
					</Typography>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							alignSelf: "center",
							justifyContent: "center",
						}}
					>
						<Box
							sx={{
								width: 100,
								height: 2,
								backgroundColor: "#b7b7b7",
							}}
						/>
						<Box>
							<Image
								src={"/or.webp"}
								alt="or"
								height={50}
								width={50}
							/>
						</Box>
						<Box
							sx={{
								width: 100,
								height: 2,
								backgroundColor: "#b7b7b7",
							}}
						/>
					</Box>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid
					item
					xs={12}
					sm={12}
					md={4}
					lg={4}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<StunningBox />
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={4}
					lg={4}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<StunningBox />
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={4}
					lg={4}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<StunningBox />
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid
					item
					xs={12}
					sm={12}
					md={4}
					lg={4}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<StunningBox />
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={4}
					lg={4}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<StunningBox />
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={4}
					lg={4}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<StunningBox />
				</Grid>
			</Grid>
		</div>
	);
};

export default Stunning;
