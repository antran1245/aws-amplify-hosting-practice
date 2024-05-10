import Sections from "@/components/sections";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Sections>Hello</Sections>
      <Sections>World!</Sections>
      <Sections>My</Sections>
      <Sections>Name</Sections>
      <Sections>is</Sections>
      <Sections>An</Sections>
      {/* <Sections>
        <img src={'/all_purpose_flour.jpeg'} alt="All Purpose Flour" />
      </Sections> */}
    </main>
  );
}
