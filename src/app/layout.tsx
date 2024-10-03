import { Inter } from "next/font/google";
import type { Metadata } from "next";
// setting font-awesome icon size: autoAddCss-> false
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
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
			<body className={inter.className}>
				<div>{children}</div>
			</body>
		</html>
	);
}
