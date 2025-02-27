import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import dynamic from "next/dynamic";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const DestinationComponent = dynamic(() => import('advisor/destinations'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav>This is my nav from subscriber app</Nav>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.title}>
          Welcome to the subsriber app
        </h1>
        <Link href="/travelAdvisor">Go to travel advisor</Link>
        Destination component from travel advisor
        <DestinationComponent />
      </main>
      <Footer />
    </>
  );
}
