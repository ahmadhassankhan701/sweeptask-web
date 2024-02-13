import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import React from "react";

const QuoteResults = ({ cardClick }) => {
	return (
		<Container sx={{ mb: 5 }}>
			<Grid
				container
				spacing={2}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				my={2}
			>
				<Grid item xs={12} sm={6}>
					<Card sx={{ maxWidth: "415px", height: "284px" }} onClick={cardClick}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="210"
								image="/search4.png"
								alt="green iguana"
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="div"
									sx={{
										textAlign: "center",
										fontWeight: "500",
										fontSize: "20px",
									}}
								>
									House or Indoors Cleaning
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					display={"flex"}
					justifyContent={"flex-end"}
					alignItems={"center"}
				>
					<Card sx={{ maxWidth: "415px", height: "284px" }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="210"
								image="/search3.png"
								alt="green iguana"
							/>
							<CardContent
								sx={{
									display: "flex",
									alignItems: "baseline",
									justifyContent: "center",
									gap: "5px",
								}}
							>
								<Typography
									gutterBottom
									variant="h5"
									component="div"
									sx={{
										textAlign: "center",
										fontWeight: "500",
										fontSize: "20px",
									}}
								>
									Outdoors Cleaning
								</Typography>
								<Typography
									gutterBottom
									variant="h5"
									component="div"
									sx={{
										textAlign: "center",
										fontWeight: "500",
										fontSize: "15px",
										color: "red",
									}}
								>
									(Coming soon)
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={2}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				my={2}
			>
				<Grid item xs={12} sm={6}>
					<Card sx={{ maxWidth: "415px", height: "284px" }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="210"
								image="/search2.png"
								alt="green iguana"
							/>
							<CardContent
								sx={{
									display: "flex",
									alignItems: "baseline",
									justifyContent: "center",
									gap: "5px",
								}}
							>
								<Typography
									gutterBottom
									variant="h5"
									component="div"
									sx={{
										textAlign: "center",
										fontWeight: "500",
										fontSize: "20px",
									}}
								>
									B&bs or Airbnb
								</Typography>
								<Typography
									gutterBottom
									variant="h5"
									component="div"
									sx={{
										textAlign: "center",
										fontWeight: "500",
										fontSize: "15px",
										color: "red",
									}}
								>
									(Coming soon)
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					display={"flex"}
					justifyContent={"flex-end"}
					alignItems={"center"}
				>
					<Card sx={{ maxWidth: "415px", height: "284px" }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="210"
								image="/search1.png"
								alt="green iguana"
							/>
							<CardContent
								sx={{
									display: "flex",
									alignItems: "baseline",
									justifyContent: "center",
									gap: "5px",
								}}
							>
								<Typography
									gutterBottom
									variant="h5"
									component="div"
									sx={{
										textAlign: "center",
										fontWeight: "500",
										fontSize: "20px",
									}}
								>
									Office Cleaning
								</Typography>
								<Typography
									gutterBottom
									variant="h5"
									component="div"
									sx={{
										textAlign: "center",
										fontWeight: "500",
										fontSize: "15px",
										color: "red",
									}}
								>
									(Coming soon)
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default QuoteResults;
