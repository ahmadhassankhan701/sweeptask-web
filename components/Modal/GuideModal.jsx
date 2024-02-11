import {
	Backdrop,
	Box,
	Fade,
	Grid,
	Modal,
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
const GuideModal = ({ open, handleClose }) => {
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
										height={44}
									/>
								</Typography>
								<ul className="list-ic vertical">
									<li>
										<span> 1</span>
										<a href="#">Sign up </a>
									</li>
									<li>
										<span> 2</span>
										<a href="#">
											Get jobs and start making money
										</a>
									</li>
									<li>
										<span> 3</span>
										<a href="#">
											Offer good service get ratings and
											make more money
										</a>
									</li>
								</ul>
							</Grid>
						</Grid>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default GuideModal;
