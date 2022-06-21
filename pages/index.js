import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home page!</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus, impedit tempora blanditiis incidunt eius vel quasi
          voluptates atque eum laboriosam iste eaque expedita cupiditate placeat
          harum, assumenda odio autem deserunt culpa totam velit adipisci
          accusantium sequi repellendus. Laudantium, mollitia vitae?
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
