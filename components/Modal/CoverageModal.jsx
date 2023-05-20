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
const CoverageModal = ({ open, handleClose }) => {
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
									clean task
								</Typography>
								<Typography
									sx={{
										fontSize: 24,
										fontWeight: 500,
										textAlign: "center",
									}}
								>
									Oops your area is not yet covered
								</Typography>
								<Grid container spacing={2} sx={{ mt: 2 }}>
									<Grid item xs={12}>
										<TextField
											label="Full Name"
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
								<Grid container sx={{ mt: 2 }}>
									<Grid item xs={12}>
										<TextField
											label="Address"
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
									Request Coverage
								</Button>
							</Grid>
						</Grid>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default CoverageModal;
