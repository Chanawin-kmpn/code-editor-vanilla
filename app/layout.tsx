import type { Metadata } from 'next';
import { Fira_Code, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const firaCode = Fira_Code({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-fira-code',
});

export const metadata: Metadata = {
	title: 'Code Editor Vanilla',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} antialiased bg-zinc-900`}
			>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
