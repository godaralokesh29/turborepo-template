import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Page()  {
  return (
    <main className={styles.main}>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <Button className={styles.button} appName="web">
        Hello from your web app!
      </Button>
    </main>
  );
}