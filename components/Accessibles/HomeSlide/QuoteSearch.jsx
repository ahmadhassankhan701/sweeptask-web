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
const QuoteSearch = () => {
	const [service, setService] = useState("");
	const [location, setLocation] = useState({
		lat: 0,
		lng: 0,
	});
	const handleSearch = () => {
		if (service === "" || location.lat === 0 || location.lng === 0) {
			alert("Please fill all the fields!");
			return;
		}
		if (service !== "indoor") {
			alert("This Service is not available yet!");
			return;
		}
		try {
			const pros = query(
				collection(db, "Users"),
				where("role", "==", "professional"),
				orderBy("createdAt", "asc")
			);
			let items = [];
			getDocs(pros)
				.then((querySnapshot) => {
					if (querySnapshot.size == 0) {
						alert("No professional found");
						return;
					}
					querySnapshot.forEach((doc) => {
						items.push({ key: doc.id, ...doc.data() });
					});
					filterByRange(items);
				})
				.catch((err) => {
					console.log(err);
				});
		} catch (error) {
			alert("Something went wrong!");
			console.log(error);
		}
	};
	const filterByRange = (items) => {
		try {
			let kmRange = 25 * 1000;
			const filteredPros = items.filter((item) => {
				let distance = haversineDistance(
					{
						latitude: parseInt(item.location.lat),
						longitude: parseInt(item.location.lng),
					},
					{
						latitude: parseInt(location.lat),
						longitude: parseInt(location.lng),
					}
				);
				if (distance <= kmRange) {
					return true;
				}
			});
			if (Object.keys(filteredPros).length == 0) {
				setService("");
				setLocation({ lat: 0, lng: 0 });
				alert("No professional found in 25 km range");
				return;
			} else {
				setService("");
				setLocation({ lat: 0, lng: 0 });
				alert("Hurray! We provide service in your area");
				return;
			}
		} catch (error) {
			alert(error.message);
			console.log(error.message);
		}
	};
	const locationChange = (lat, lng) => {
		setLocation({ lat, lng });
	};
	return (
		<Container sx={{ my: 10 }}>
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
