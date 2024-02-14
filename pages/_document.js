import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="shortcut icon" href="/favicon.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin={"true"}
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Montserrat:wght@400;500;600;700&family=Pinyon+Script&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
				/>
			</Head>
			<body>
				<script
					defer
					src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC0s7tq52XRV37QIon2GNNp1KoD07cSugI&libraries=places"
				></script>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
