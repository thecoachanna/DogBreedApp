import Image from "next/image";
import Head from 'next/head'
import styles from "../styles/Home.module.css";

const defaultEndpoint = "https://dog.ceo/api/breeds/image/random/9";

export async function getServerSideProps() {
  let time1 = performance.now();
  const res = await fetch(defaultEndpoint);
  const { message: dogs } = await res.json();
  let time2 = performance.now();
  const secs = (time2 - time1).toFixed(2);

  return {
    props: { dogs, secs },
  };
}

export default function Home({ dogs, secs }) {
  const RenderDogData = (data) => {
    return data.map((dog, idx) => {
      const url = new URL(dog);
      const path = url.pathname;
      const breed = path.split("/");
      const word = breed[2];
      const breedName = word
        .replace("-", " ")
        .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());

      return (
        
          <div key={idx} className={styles.card}>
            <Image
              id={idx}
              src={dog}
              alt={breedName[2] || idx}
              width={240}
              height={240}
            />

            <h2 className={styles.title}>{breedName}</h2>
            <p>Time to fetch data: {secs} ms</p>
          </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Dog Breed App</title>
        <meta name="description" content="Dog Breeds" />
      </Head>
          
      <main className={styles.main}>
        <div className={styles.grid}>{RenderDogData(dogs)}</div>
      </main>
     
    </div>
  );
}
