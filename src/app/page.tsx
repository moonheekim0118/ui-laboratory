import styles from "./page.module.css";
import Card from "@/components/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.list}>
        <Card />
        <Card />
        <Card />
      </div>
      <footer className={styles.footer}>
        made by
        <Link href="https://github.com/moonheekim0118">moonhee kim</Link>
      </footer>
    </main>
  );
}
