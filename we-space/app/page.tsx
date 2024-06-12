'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Kanit } from "next/font/google";
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../components/Footer';
import HeroMain from "@/containers/hero-main/hero-section";


const kanitFont = Kanit({ subsets: ["latin"],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap'
})


const theme = createTheme({
  typography: {
    fontFamily: kanitFont.style.fontFamily,
    button: {
      fontFamily: kanitFont.style.fontFamily, // Ensure buttons use the Kanit font
      textTransform: 'none', // Optional: prevent uppercase transformation
    },
    // You can further customize other typography variants if needed
    h1: { fontFamily: kanitFont.style.fontFamily },
    h2: { fontFamily: kanitFont.style.fontFamily },
    h3: { fontFamily: kanitFont.style.fontFamily },
    h4: { fontFamily: kanitFont.style.fontFamily },
    h5: { fontFamily: kanitFont.style.fontFamily },
    h6: { fontFamily: kanitFont.style.fontFamily },
    subtitle1: { fontFamily: kanitFont.style.fontFamily },
    subtitle2: { fontFamily: kanitFont.style.fontFamily },
    body1: { fontFamily: kanitFont.style.fontFamily },
    body2: { fontFamily: kanitFont.style.fontFamily },
    caption: { fontFamily: kanitFont.style.fontFamily },
    overline: { fontFamily: kanitFont.style.fontFamily },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <main className={styles.main}>
      <Navbar/>
      <HeroMain/>
      <Footer/>
    </main>
    </ThemeProvider>
  );
}
