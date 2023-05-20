import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import GuideModal from "../Modal/GuideModal";
import SignUpModal from "../Modal/SignUpModal";
import HelpModal from "../Modal/HelpModal";
import CoverageModal from "../Modal/CoverageModal";

const Footer = () => {
	const [openGuide, setOpenGuide] = React.useState(false);
	const [open, setOpen] = React.useState(false);
	const [openHelp, setOpenHelp] = React.useState(false);
	const [openCoverage, setOpenCoverage] =
		React.useState(false);
	const handleOpenCoverage = () => setOpenCoverage(true);
	const handleCloseCoverage = () => setOpenCoverage(false);
	const handleOpenHelp = () => setOpenHelp(true);
	const handleCloseHelp = () => setOpenHelp(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleOpenGuide = () => setOpenGuide(true);
	const handleCloseGuide = () => setOpenGuide(false);
	return (
		<Container sx={{ mt: 10, bgcolor: "lightgray", p: 5 }}>
			<GuideModal
				open={openGuide}
				handleClose={handleCloseGuide}
			/>
			<SignUpModal open={open} handleClose={handleClose} />
			<HelpModal
				open={openHelp}
				handleClose={handleCloseHelp}
			/>
			<CoverageModal
				open={openCoverage}
				handleClose={handleCloseCoverage}
			/>
			<Grid container my={2}>
				<Grid
					item
					xs={12}
					sm={4}
					display={"flex"}
					flexDirection={"column"}
				>
					<Typography className="footer_title">
						For Customers
					</Typography>
					<Typography
						className="footer_content"
						onClick={handleOpen}
					>
						Find a cleaner
					</Typography>
					<Typography
						className="footer_content"
						onClick={handleOpenGuide}
					>
						How it works
					</Typography>
					<Typography
						className="footer_content"
						onClick={handleOpenCoverage}
					>
						Request Coverage
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					sm={4}
					display={"flex"}
					flexDirection={"column"}
				>
					<Typography className="footer_title">
						For Professionals
					</Typography>
					<Typography
						className="footer_content"
						onClick={handleOpen}
					>
						Join as a cleaner
					</Typography>
					<Typography
						className="footer_content"
						onClick={handleOpenGuide}
					>
						How it works
					</Typography>
					<Typography
						className="footer_content"
						onClick={handleOpenHelp}
					>
						Help
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					sm={4}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<Typography variant="h4" sx={{ fontWeight: 700 }}>
						clean task
					</Typography>
				</Grid>
			</Grid>
			<hr />
			<Grid container>
				<Grid
					item
					xs={12}
					sm={4}
					p={2}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					©2023 Clean Task (Pty) Ltd, All rights reserved.
				</Grid>
			</Grid>
		</Container>
	);
};

export default Footer;
