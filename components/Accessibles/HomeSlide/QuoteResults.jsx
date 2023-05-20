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

const QuoteResults = () => {
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
				<Grid item xs={12} sm={6} md={4}>
					<Card sx={{ width: "18rem" }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
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
				<Grid item xs={12} sm={6} md={4}>
					<Card sx={{ width: "18rem" }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
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
				<Grid item xs={12} sm={6} md={4}>
					<Card sx={{ width: "18rem" }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image="/search3.png"
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
									Outdoors Cleaning
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
			>
				<Grid item xs={12} sm={6} md={4}>
					<Card sx={{ width: "18rem" }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image="/search2.png"
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
									B&bs or Airbnb
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card sx={{ width: "18rem" }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image="/search1.png"
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
									Office Cleaning
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card sx={{ width: "18rem" }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image="/search1.png"
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
									Office Cleaning
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
