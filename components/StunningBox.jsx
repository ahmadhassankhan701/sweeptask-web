import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const StunningBox = () => {
	return (
		<div>
			<Box className={"serviceBox"}>
				<Image
					src={"/or.webp"}
					width={50}
					height={50}
					alt="webp"
				/>
				<Typography>High Quality Foods</Typography>
				<Typography>
					Etiam feugiat eleifend est, sed luctus odio tempor
					vitae. Vivamus maximus scelerisque ipsum nec
					commodo.
				</Typography>
			</Box>
		</div>
	);
};

export default StunningBox;
