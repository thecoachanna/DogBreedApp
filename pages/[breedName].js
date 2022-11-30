import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import DogBreed from "../components/DogBreed";

const Breed = ({ dogs }) => {
  const router = useRouter();
  const { breedName } = router.query;

  return <div className={styles.grid}>{renderDogData(dogs, breedName)}</div>;
};

export async function getServerSideProps() {
  const res = await fetch(`https://dog.ceo/api/breed/hound/images`);
  const { message: dogs } = await res.json();

  return {
    props: { dogs },
  };
}

const renderDogData = (data, breedName) => {
  return data.map((dog) => {
    return <DogBreed key={dog} secs={10} name={breedName} imageUrl={dog} />;
  });
};

export default Breed;
