import Sections from "@/components/sections";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <meta property="og:title" content="Hello World! My name is An" />
        <meta property="og:description" content="Look at my message to the world." />
        <meta property="og:url" content="https://main.d3tqd4h05q91nm.amplifyapp.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/opengraph-image.jpeg" />
        <meta property="og:image:alt" content="Pie Picture" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <Sections>Hello</Sections>
      <Sections>World!</Sections>
      <Sections>My</Sections>
      <Sections>Name</Sections>
      <Sections>is</Sections>
      <Sections>An</Sections>
      <Sections>
        <img src={'/all_purpose_flour.jpeg'} alt="All Purpose Flour" />
      </Sections>
    </main>
  );
}
