import Places from "@/components/Places";
import {
	Button,
	Container,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import haversineDistance from "haversine-distance";
import { toast } from "react-toastify";
import EstimateModal from "@/components/Modal/EstimateModal";
const QuoteSearch = () => {
	const [service, setService] = useState("");
	const [location, setLocation] = useState("");
	const [pricing, setPricing] = useState(null);
	const [modalOpen, setModalOpen] = useState(false);
	const handleSearch = () => {
		if (service === "" || location === "") {
			toast.error("All fields are required!");
			return;
		}
		if (!location) {
			toast.error("Could not fetch. Try changing to nearest place!");
			return;
		}
		if (service !== "indoor") {
			toast.error("This Service is not available yet!");
			return;
		}
		const areas = query(
			collection(db, "Pricing"),
			where("postal", "==", location)
		);
		getDocs(areas)
			.then((querySnapshot) => {
				if (querySnapshot.size == 0) {
					toast.error("Not found. Area is not covered!");
				} else {
					querySnapshot.forEach((doc) => {
						setPricing(doc.data());
						setModalOpen(true);
					});
				}
			})
			.catch((err) => {
				toast.error("Something went wrong!");
				console.log(err);
			});
	};
	const locationChange = (postalCode) => {
		setLocation(postalCode);
	};
	return (
		<Container sx={{ my: 10 }}>
			<EstimateModal
				open={modalOpen}
				handleClose={() => setModalOpen(false)}
				data={pricing}
			/>
			<Grid
				container
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Grid item xs={12} md={9}>
					<Typography
						sx={{
							fontStyle: "normal",
							fontWeight: "700",
							fontSize: { xs: 26, sm: 36 },
							color: "#000000",
							my: 2,
							maxWidth: 700,
						}}
					>
						Find rated and trusted professional cleaners and more around you
					</Typography>
					<Typography
						sx={{
							fontStyle: "normal",
							fontWeight: "500",
							fontSize: { xs: 14, sm: 24 },
							color: "#000000",
						}}
					>
						Get free quotes{" "}
					</Typography>
					<Grid container my={2}>
						<Grid item xs={12} sm={5}>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">
									What service are you looking for?
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={service}
									label="What service are you looking for?"
									onChange={(e) => setService(e.target.value)}
									sx={{ borderRadius: 0 }}
								>
									<MenuItem value={"indoor"}>Indoors Cleaning</MenuItem>
									<MenuItem value={"outdoor"}>Outdoors Cleaning</MenuItem>
									<MenuItem value={"bnb"}>BnB & AirBnb</MenuItem>
									<MenuItem value={"office"}>Office Cleaning</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid
							item
							xs={12}
							sm={5}
							sx={{
								mt: {
									xs: 1,
									sm: 0,
								},
							}}
						>
							<Places locationChange={locationChange} />
						</Grid>
						<Grid item xs={12} sm={2}>
							<Button
								variant="contained"
								sx={{
									height: 55,
									padding: "0 30px",
									borderRadius: 0,
									textTransform: "none",
									fontSize: 20,
									marginLeft: { xs: 0, sm: 1 },
									marginTop: { xs: 2, sm: 0 },
									fontWeight: "400",
									lineHeight: "24px",
									bgcolor: "#000000",
									color: "#FFFFFF",
									"&:hover": {
										backgroundColor: "#000000",
										color: "#FFFFFF",
										opacity: 0.8,
									},
								}}
								fullWidth
								onClick={handleSearch}
							>
								Search
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default QuoteSearch;
