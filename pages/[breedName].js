import * as React from 'react';
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import DogBreed from "../components/DogBreed";

const Breed = ({ dogs }) => {

  const router = useRouter();
  const { breedName } = router.query;

  // const res = await fetch(`https://dog.ceo/api/breed/${breedName}/images`);
  // const { message: dogs } = await res.json();

  // // mounts and unmounts
  // React.useEffect(() => {

  // }, [])


  return <div className={styles.grid}>{renderDogData(dogs, breedName)}</div>;
};

export async function getServerSideProps(context) {
  const { breedName } = context.params

  let tokens = breedName.split(" ");
  let adjusted = breedName.toLowerCase();

  if (tokens.length > 1) {
    adjusted = tokens.map(t => t.toLowerCase()).join('/')
  }

  console.log('adjusted: ', adjusted);

  const res = await fetch(`https://dog.ceo/api/breed/${adjusted}/images`);
  const { message: dogs } = await res.json();

  return {
    props: { dogs },
  };
}

const renderDogData = (data, breedName) => {
  if (data !== 'Breed not found (master breed does not exist)') {
    return data.map((dog) => {
      return <DogBreed key={dog} secs={10} name={breedName} imageUrl={dog} />;
    });
  }
  return <h1>Breed not found (master breed does not exist)</h1>;
};

export default Breed;
