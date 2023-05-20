import {
	Box,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const Service = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Container
				sx={{
					marginTop: 10,
					marginBottom: 10,
				}}
			>
				<Grid container spacing={2}>
					<Grid
						item
						xs={12}
						sm={12}
						md={6}
						lg={6}
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
					>
						<div class="image-wrapper">
							<img class="image-1" src="/history.jpg" />
							<img class="image-2" src="/history.jpg" />
							<img class="image-3" src="/history.jpg" />
							<img class="image-4" src="/history.jpg" />
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<Typography
							sx={{
								fontFamily: "Pinyon Script",
								fontSize: 30,
								// lineHeight: 70,
								textAlign: "center",
								color: "#b7b7b7",
							}}
						>
							Dedicated
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
							Our Services
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
						<Typography
							sx={{
								textAlign: "center",
								fontFamily: "Lato",
								fontSize: 16,
								fontWeight: 400,
								letterSpacing: 0.5,
								textTransform: "none",
								color: "#505050",
								marginBottom: 2,
							}}
						>
							At vero eos et accusamus et iusto odio
							dignissimos ducimus qui blanditiis praesentium
							voluptatum deleniti atque corrupti quos
							dolores et quas molestias excepturi sint
							occaecati cupiditate non provident.
						</Typography>
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
						>
							<Typography className="services">
								Learn More
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Service;
