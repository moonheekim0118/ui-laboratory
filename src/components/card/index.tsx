import styles from "./index.module.css";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  href: string;
}

const Card = ({ title, description, imageSrc, href }: Props) => {
  return (
    <Link href={href} className={styles.container}>
      <h3>{title}</h3>
      <Image
        src={imageSrc}
        alt="Picture of the author"
        width={300}
        height={200}
      />
      <p>{description}</p>
    </Link>
  );
};

export default Card;
