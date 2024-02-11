import {
	Button,
	Container,
	FormControl,
	Grid,
	IconButton,
	Input,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import {
	Place,
	Search,
	Visibility,
} from "@mui/icons-material";

const QuoteSearch = () => {
	return (
		<Container sx={{ my: 10 }}>
			<Grid
				container
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Grid item xs={12} md={8}>
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
						Find rated and trusted professional cleaners and
						more around you
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
						<Grid item xs={12} sm={4}>
							<TextField
								label="What service are you looking for?"
								variant="outlined"
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								fullWidth
								id="input-with-icon-textfield"
								label={"Suburb or Postal code"}
								variant="outlined"
								sx={{
									mt: { xs: 2, sm: 0 },
									backgroundImage: "url(/pin.png)",
									backgroundRepeat: "no-repeat",
									backgroundPosition: "5px 17px",
									backgroundSize: "17px",
									textIndent: "15px",
								}}
								inputProps={{
									style: {
										paddingLeft: "30px",
									},
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
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
										backgroundColor: "#FFFFFF",
										color: "#000000",
										border: "1px solid #000000",
									},
								}}
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
