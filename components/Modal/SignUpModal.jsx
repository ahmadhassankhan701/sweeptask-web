import {
	Backdrop,
	Box,
	Button,
	Fade,
	Grid,
	Modal,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
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
const SignUpModal = ({ open, handleClose }) => {
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
									sx={{
										fontWeight: 700,
										textAlign: "center",
										mb: 1,
									}}
									variant="h4"
								>
									<img
										src={"/logo.png"}
										alt="clean task"
										width={192}
										height={44}
									/>
								</Typography>
								<Typography
									sx={{
										fontSize: 24,
										fontWeight: 500,
										textAlign: "center",
									}}
								>
									Join us today to start earning
								</Typography>
								<Grid container spacing={2} sx={{ mt: 2 }}>
									<Grid item xs={12} sm={6}>
										<TextField
											label="First Name"
											variant="outlined"
											fullWidth
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<TextField
											label="Last Name"
											variant="outlined"
											fullWidth
										/>
									</Grid>
								</Grid>
								<Grid container sx={{ mt: 2 }} spacing={1}>
									<Grid item xs={3}>
										<TextField
											label="+27"
											variant="outlined"
											sx={{ width: 70 }}
										/>
									</Grid>
									<Grid item xs={9}>
										<TextField
											label="Phone Number"
											variant="outlined"
											fullWidth
										/>
									</Grid>
								</Grid>
								<Grid container sx={{ mt: 2 }}>
									<Grid item xs={12}>
										<TextField
											label="Email Address"
											variant="outlined"
											fullWidth
										/>
									</Grid>
								</Grid>
								<Button
									variant="contained"
									sx={{
										bgcolor: "#000000",
										color: "#ffffff",
										my: 2,
									}}
									fullWidth
								>
									Sign Up
								</Button>
							</Grid>
						</Grid>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default SignUpModal;
