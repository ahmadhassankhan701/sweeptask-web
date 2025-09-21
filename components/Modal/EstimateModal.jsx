import { Add, RadioButtonUnchecked, Remove } from "@mui/icons-material";
import {
	Backdrop,
	Box,
	Button,
	Fade,
	Grid,
	Modal,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: { xs: 350, sm: 400 },
	bgcolor: "white",
	border: "2px solid #fff",
	boxShadow: 24,
	p: 4,
};
const EstimateModal = ({ open, handleClose, data }) => {
	const [prices, setPrices] = useState({
		oneBedroomPrice: 0,
		oneBathroomPrice: 0,
		bedPerInc: 0,
		bathPerInc: 0,
		appCommission: 0,
		bin: 0,
		ironing: 0,
		laundry: 0,
	});
	useEffect(() => {
		if (data) {
			setPrices({
				oneBedroomPrice: data.oneBedroomPrice,
				oneBathroomPrice: data.oneBathroomPrice,
				bedPerInc: data.bedPerInc,
				bathPerInc: data.bathPerInc,
				appCommission: data.appCommission,
				bin: data.bin,
				ironing: data.ironing,
				laundry: data.laundry,
			});
		}
	}, [data]);

	const [findEstimate, setFindEstimate] = useState(false);
	const [estimatedPrice, setEstimatedPrice] = useState(0);
	const [cleantype, setCleantype] = useState("");
	const [roomsCount, setRoomsCount] = useState({
		bedroom: 0,
		bathroom: 0,
	});
	const handleGetEstimate = () => {
		if (roomsCount.bedroom === 0 && roomsCount.bathroom === 0) {
			toast.error("Please select the number of bedrooms and bathrooms");
			return;
		}
		const bedCost =
			roomsCount.bedroom > 0
				? roomsCount.bedroom > 1
					? parseInt(prices.oneBedroomPrice) +
					  (roomsCount.bedroom - 1) *
							((parseInt(prices.bedPerInc) * parseInt(prices.oneBedroomPrice)) /
								100)
					: prices.oneBedroomPrice
				: 0;
		const bathCost =
			roomsCount.bathroom > 0
				? roomsCount.bathroom > 1
					? parseInt(prices.oneBathroomPrice) +
					  (roomsCount.bathroom - 1) *
							((parseInt(prices.bathPerInc) *
								parseInt(prices.oneBathroomPrice)) /
								100)
					: prices.oneBathroomPrice
				: 0;
		const totalCost = parseInt(bedCost) + parseInt(bathCost);
		setEstimatedPrice(totalCost);
	};
	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
			>
				<Fade in={open}>
					<Box sx={style}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Typography
									variant="h4"
									sx={{
										mb: 2,
										textAlign: "center",
										fontWeight: 700,
									}}
								>
									<img
										src={"/logo.png"}
										alt="clean task"
										width={192}
										height={40}
									/>
								</Typography>
								<Typography
									sx={{
										textAlign: "center",
										fontWeight: 700,
										color: "green",
									}}
								>
									Hurray! Your area is covered
								</Typography>
								<Typography
									sx={{
										textAlign: "center",
										fontWeight: 400,
										color: "gray",
										fontSize: 14,
									}}
								>
									You can get price estimates
								</Typography>
								<Grid container spacing={2} my={2}>
									{findEstimate ? (
										estimatedPrice ? (
											<Box
												display={"flex"}
												justifyContent={"center"}
												alignItems={"center"}
												flexDirection={"column"}
												gap={2}
												width={"100%"}
											>
												<Typography
													sx={{
														fontWeight: 700,
														fontSize: 18,
													}}
												>
													Estimate for {roomsCount.bedroom} bed and{" "}
													{roomsCount.bathroom} bath
												</Typography>
												<Typography
													sx={{
														fontWeight: "bold",
														fontSize: 15,
														color: "red",
													}}
												>
													R {estimatedPrice.toFixed(2)}
												</Typography>
												<Box>
													<Button
														variant="contained"
														color="error"
														sx={{ mr: 1 }}
														onClick={() => {
															handleClose();
															setFindEstimate(false);
															setCleantype("");
															setRoomsCount({
																bedroom: 0,
																bathroom: 0,
															});
															setEstimatedPrice(0);
														}}
													>
														Close
													</Button>
													<Button
														variant="contained"
														color="warning"
														onClick={() => {
															setCleantype("");
															setRoomsCount({
																bedroom: 0,
																bathroom: 0,
															});
															setEstimatedPrice(0);
														}}
													>
														Reset
													</Button>
												</Box>
											</Box>
										) : cleantype === "" ? (
											<Box
												width={"100%"}
												display={"flex"}
												justifyContent={"center"}
												alignItems={"center"}
												flexDirection={"column"}
											>
												<Box
													width={"95%"}
													ml={2}
													onClick={() => setCleantype("house")}
													sx={{ cursor: "pointer" }}
												>
													<Box
														sx={{
															borderRadius: 1,
															bgcolor: "lightgray",
															display: "flex",
															alignItems: "center",
															justifyContent: "flex-start",
															gap: 5,
															p: 1,
														}}
													>
														<RadioButtonUnchecked />
														<Typography sx={{ fontWeight: 700, fontSize: 16 }}>
															House
														</Typography>
													</Box>
												</Box>
												<Box
													width={"95%"}
													ml={2}
													mt={1}
													onClick={() => setCleantype("flat")}
													sx={{ cursor: "pointer" }}
												>
													<Box
														sx={{
															borderRadius: 1,
															bgcolor: "lightgray",
															display: "flex",
															alignItems: "center",
															justifyContent: "flex-start",
															gap: 5,
															p: 1,
														}}
													>
														<RadioButtonUnchecked />
														<Typography sx={{ fontWeight: 700, fontSize: 16 }}>
															Flat or Apartment
														</Typography>
													</Box>
												</Box>
												<Box
													width={"95%"}
													ml={2}
													mt={1}
													onClick={() => setCleantype("other")}
													sx={{ cursor: "pointer" }}
												>
													<Box
														sx={{
															borderRadius: 1,
															bgcolor: "lightgray",
															display: "flex",
															alignItems: "center",
															justifyContent: "flex-start",
															gap: 5,
															p: 1,
														}}
													>
														<RadioButtonUnchecked />
														<Typography sx={{ fontWeight: 700, fontSize: 16 }}>
															Other
														</Typography>
													</Box>
												</Box>
											</Box>
										) : (
											<Box
												display={"flex"}
												alignItems={"center"}
												justifyContent={"center"}
												flexDirection={"column"}
												gap={2}
												border={"1px solid lightgray"}
												padding={1}
												width={"100%"}
												ml={2}
											>
												<Box
													display={"flex"}
													justifyContent={"space-between"}
													alignItems={"flex-start"}
													width={"100%"}
												>
													<Typography
														sx={{
															fontWeight: 700,
															fontSize: 16,
															mb: 2,
														}}
													>
														How many bedrooms?
													</Typography>
													<Box
														display={"flex"}
														justifyContent={"center"}
														alignItems={"center"}
													>
														<Remove
															onClick={() => {
																roomsCount.bedroom > 0 &&
																	setRoomsCount({
																		...roomsCount,
																		bedroom: roomsCount.bedroom - 1,
																	});
															}}
															sx={{
																cursor: "pointer",
																bgcolor: "lightgray",
																borderRadius: 1,
															}}
														/>
														<Typography
															sx={{
																fontWeight: 700,
																fontSize: 16,
																mx: 2,
															}}
														>
															{roomsCount.bedroom}
														</Typography>
														<Add
															onClick={() => {
																setRoomsCount({
																	...roomsCount,
																	bedroom: roomsCount.bedroom + 1,
																});
															}}
															sx={{
																cursor: "pointer",
																bgcolor: "lightgray",
																borderRadius: 1,
															}}
														/>
													</Box>
												</Box>
												<Box
													display={"flex"}
													justifyContent={"space-between"}
													alignItems={"flex-start"}
													width={"100%"}
												>
													<Typography
														sx={{
															fontWeight: 700,
															fontSize: 16,
															mb: 2,
														}}
													>
														How many bathrooms?
													</Typography>
													<Box
														display={"flex"}
														justifyContent={"center"}
														alignItems={"center"}
													>
														<Remove
															onClick={() => {
																roomsCount.bathroom > 0 &&
																	setRoomsCount({
																		...roomsCount,
																		bathroom: roomsCount.bathroom - 1,
																	});
															}}
															sx={{
																cursor: "pointer",
																bgcolor: "lightgray",
																borderRadius: 1,
															}}
														/>
														<Typography
															sx={{
																fontWeight: 700,
																fontSize: 16,
																mx: 2,
															}}
														>
															{roomsCount.bathroom}
														</Typography>
														<Add
															onClick={() => {
																setRoomsCount({
																	...roomsCount,
																	bathroom: roomsCount.bathroom + 1,
																});
															}}
															sx={{
																cursor: "pointer",
																bgcolor: "lightgray",
																borderRadius: 1,
															}}
														/>
													</Box>
												</Box>
												<Box
													display={"flex"}
													alignItems={"center"}
													justifyContent={"center"}
													gap={1}
												>
													<Button
														variant="contained"
														color="error"
														onClick={() => setCleantype("")}
													>
														Back
													</Button>
													<Button
														variant="contained"
														color="success"
														onClick={handleGetEstimate}
													>
														Get Estimate
													</Button>
												</Box>
											</Box>
										)
									) : (
										<Box
											display={"flex"}
											justifyContent={"center"}
											alignItems={"center"}
											width={"100%"}
										>
											<Button
												variant="contained"
												color="primary"
												onClick={() => {
													setFindEstimate(true);
												}}
												sx={{
													width: "50%",
													alignSelf: "center",
													borderRadius: 0,
												}}
											>
												Get Price Estimate
											</Button>
										</Box>
									)}
								</Grid>
								<div
									style={{
										backgroundColor: "#F7F7F7",
										padding: 10,
									}}
								>
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
													fontWeight: "bold",
													fontSize: 16,
													mb: 2,
												}}
											>
												Download our app on the below stores
											</Typography>
											<Grid
												container
												maxWidth={430}
												display={"flex"}
												spacing={1}
											>
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
														width={115}
														height={35}
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
													<img
														src={"/appleAd.png"}
														alt={"apple"}
														width={110}
														height={37}
													/>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</div>
							</Grid>
						</Grid>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default EstimateModal;
