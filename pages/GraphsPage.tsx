import styles from "@/styles/GraphsPage.module.scss";
import { useRouter } from "next/router";

interface GraphBoxTypes {
  title: string;
  img: string;
}

export default function GraphsPage() {
  return (
    <div>
      <Navbar />
      <div className={styles.content}>
        <GraphBox title="Embodied Energy" img="graph1.png" />
        <GraphBox title="Baseline by Category" img="graph2.png" />
        <GraphBox title="Carbon Emissions in New Building" img="graph3.png" />
        <GraphBox title="Emission by Date" img="graph4.png" />
      </div>
    </div>
  );
}

function Navbar() {
  const router = useRouter();

  function handleClick() {
    router.push("/");
  }

  return (
    <div className={styles.navbar}>
      <img src="carbonEyeLogo.png" onClick={handleClick} />
    </div>
  );
}

function GraphBox({ title, img }: GraphBoxTypes) {
  return (
    <div className={styles.graphBox}>
      <div className={styles.graphTitleContainer}>
        <h1 className={styles.graphTitle}>{title}</h1>
      </div>
      <div className={styles.graphImageContainer}>
        <img className={styles.img} src={img} />
      </div>
    </div>
  );
}
