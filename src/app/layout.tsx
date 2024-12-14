import { Inter } from "next/font/google";
import type { Metadata } from "next";
// setting font-awesome icon size: autoAddCss-> false
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	description: "Welcome To YG-Mart",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<title>Dopetrope by HTML5 UP</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
			</head>
			<body className={inter.className}>
				{/* <div><HEADER/></div> */}
				<div>{children}</div>
				{/* <div><FOOTER/></div> */}
			</body>
		</html>
	);
}
