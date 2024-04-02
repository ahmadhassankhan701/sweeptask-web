import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import TopNav from "@/components/Nav/TopNav";
import Footer from "@/components/Footer/Footer";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "react-slideshow-image/dist/styles.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
	const theme = createTheme({
		palette: {
			white: "#ffffff",
			black: "#000000",
			gold: "#c59d5f",
		},
		typography: {
			fontFamily: ["Lato", "sans-serif", "Pinyon Script", "cursive"].join(","),
		},
	});
	return (
		// <UserProvider>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ToastContainer position="top-right" autoClose={3000} />
			<div>
				<TopNav />
				<Component {...pageProps} />
				<Footer />
			</div>
		</ThemeProvider>
		// </UserProvider>
	);
}
