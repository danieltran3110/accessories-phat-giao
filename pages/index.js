import Head from 'next/head';
import HomePage from './home';
import styles from '../styles/Zalo/zalo.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Buddha Accessories</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <script
          src='https://kit.fontawesome.com/618a331a9e.js'
          crossOrigin='anonymous'
        />
        <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' />

        <script src='https://sp.zalo.me/plugins/sdk.js' />
      </Head>

      <main>
        <div className={styles.zalo}><a href='https://zalo.me/2318603118117676985' target='_blank'>
          <img alt='icon zalo'
               src='https://1.bp.blogspot.com/-EfLNosfvRuU/YShtgbHi9tI/AAAAAAAAAko/2E0ZcIf6hsYWzf0xZRaGUzclGiULofhPgCNcBGAsYHQ/s0/icon-zalo.png' />
        </a></div>

        <HomePage />
      </main>

      <footer className={styles.footer}>
        <p>AxiomThemes © 2022. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
