import styles from "@/styles/index.module.scss";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Content />
    </div>
  );
}

function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src="carbonEyeLogo.png" className={styles.logo} />
      <div className={styles.searchBox}>
        <h1 className={styles.searchForProject}>Search for Projects:</h1>
        <input className={styles.input} />
      </div>
      <div className={styles.menuIconDiv}>
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
      </div>
    </div>
  );
}

function Content() {
  const router = useRouter();

  function handleClick() {
    router.push("/ProjectPage");
  }

  return (
    <div className={styles.content}>
      <img src="proj1.png" className={styles.img} onClick={handleClick} />
      <img src="proj2.png" className={styles.img} onClick={handleClick} />
      <img src="proj3.png" className={styles.img} onClick={handleClick} />
      <img src="proj4.png" className={styles.img} onClick={handleClick} />
    </div>
  );
}
