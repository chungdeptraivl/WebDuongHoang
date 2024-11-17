"use client"
import { HomeSlider } from "@/components/HomeSlider/HomeSlider";
import MovieCarousel from "@/components/MovieCarousel/MovieCarousel";
import styles from "./page.module.css";

export default function Home() {
  return (
      <main className={styles.main}>
        <HomeSlider/>
        <MovieCarousel/>
      </main>
  )
}
