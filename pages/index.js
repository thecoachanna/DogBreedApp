import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import DogBreed from "../components/DogBreed";

export default function Home({ dogs, secs }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dog Breed App</title>
        <meta name="description" content="Dog Breeds" />
      </Head>

      <main className={styles.main}>
        <h1>Dog Breed App</h1>
        <div className={styles.grid}>{renderDogData(dogs, secs)}</div>
      </main>
    </div>
  );
}

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

const renderDogData = (data, secs) => {
  return data.map((dog, idx) => {
    const url = new URL(dog);
    const path = url.pathname;
    const breed = path.split("/");
    const word = breed[2];
    const breedName = word
      .replace("-", " ")
      .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());

    return <DogBreed key={dog} secs={secs} name={breedName} imageUrl={dog} />;
  });
};
