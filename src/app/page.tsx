import styles from "./page.module.css";
import Card from "@/components/card";
import Link from "next/link";
import exampleImage from "@/contents/image/crush-love.gif";

export default function Home() {
  return (
    <main className={styles.main}>
      <p className={styles.description}>I build some interesting UI stuff</p>
      <div className={styles.list}>
        <Card
          title="example"
          href="/example"
          imageSrc={exampleImage}
          description="this is example"
        />
        <Card
          title="example"
          href="/example"
          imageSrc={exampleImage}
          description="this is example"
        />
        <Card
          title="example"
          href="/example"
          imageSrc={exampleImage}
          description="this is example"
        />
        <Card
          title="example"
          href="/example"
          imageSrc={exampleImage}
          description="this is example"
        />
      </div>
      <footer className={styles.footer}>
        made by
        <Link href="https://github.com/moonheekim0118">moonhee kim</Link>
      </footer>
    </main>
  );
}
