import styles from "../styles/DogBreed.module.css";
import Image from "next/image";
import Link from 'next/link';


const DogBreed = ({secs, name, imageUrl}) => {
  return ( 
    <div className={styles.grid}>
    <div className={styles.card}>
            <Image
              id={name}
              src={imageUrl}
              alt={name}
              width={240}
              height={240}
      />
        <Link href={`/${name}`}>
        <h2 className={styles.title}>{name}</h2>
</Link>
      
      <p>Time to fetch data: {secs} ms</p>
      </div>
      </div>
   );
}
 
export default DogBreed;