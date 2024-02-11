import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SignUpModal from "../Modal/SignUpModal";
import { Person } from "@mui/icons-material";

const drawerWidth = 240;

function TopNav(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box
			onClick={handleDrawerToggle}
			sx={{
				textAlign: "center",
			}}
		>
			<Typography variant="h6" sx={{ my: 2 }}>
				<img
					src={"/logo.png"}
					alt="clean task"
					width={150}
					height={30}
				/>
			</Typography>
			<Divider />
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					my: 2,
				}}
			>
				<Button
					sx={{
						borderRadius: 50,
						fontSize: 20,
						fontWeight: "400",
						lineHeight: "24px",
						bgcolor: "#000000",
						color: "#FFFFFF",
						padding: "10px 20px",
						textTransform: "none",
						"&:hover": {
							backgroundColor: "#FFFFFF",
							color: "#000000",
							border: "1px solid #000000",
						},
					}}
					onClick={handleOpen}
					startIcon={<Person />}
				>
					Join as a cleaner
				</Button>
			</Box>
		</Box>
	);

	const container =
		window !== undefined
			? () => window().document.body
			: undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<SignUpModal open={open} handleClose={handleClose} />
			<AppBar
				component="nav"
				sx={{
					bgcolor: `white`,
					color: `black`,
				}}
				position="sticky"
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{
							flexGrow: 1,
							display: { xs: "none", sm: "block" },
						}}
					>
						<img
							src={"/logo.png"}
							alt="clean task"
							width={150}
							height={30}
						/>
					</Typography>

					<Box>
						<Box
							sx={{
								display: { xs: "none", sm: "flex" },
							}}
						>
							<Button
								sx={{
									borderRadius: 50,
									fontSize: 18,
									fontWeight: "400",
									lineHeight: "24px",
									bgcolor: "#000000",
									color: "#FFFFFF",
									width: 180,
									height: 45,
									textTransform: "none",
									"&:hover": {
										backgroundColor: "#FFFFFF",
										color: "#000000",
										border: "1px solid #000000",
									},
								}}
								startIcon={<Person />}
								onClick={handleOpen}
							>
								Join as a cleaner
							</Button>
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
							backgroundColor: `navBg`,
							color: `navColor`,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}

TopNav.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default TopNav;
