import Image from "next/image";
import styles from "./page.module.css";
import List from "@/app/components/lists/List"
export default function Home() {
  return (
    <>
    <main>
      <List/>
      <h1>home page</h1>
    </main>
    </>
  );
}
