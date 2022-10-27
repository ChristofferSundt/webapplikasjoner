import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useState } from 'react'
import { useEffect } from 'react'


export default function Home() {

  const [shoppingList, setShoppingList] = useState([]);

  // Fetch shoppinglist from API on page load

  const fetchShoppingList = async () => {
    useEffect(() => {
      fetch('/api/shoppinglist')
        .then(res => res.json())
        .then(data => setShoppingList(data))
    }, []);
  }

  fetchShoppingList();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/shoppinglist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: e.target.name.value,
        quantity: e.target.quantity.value
      })
    });
    const data = await res.json();
    setShoppingList(data);
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Jørn's handleliste</title>
        <meta name="description" content="Handleliste for Jørn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Velkommen til Jørn's handleliste
        </h1>

        <p className={styles.description}>
          Legg til varer så har du det til nestegang.
        </p>

        <p className={styles.description}><a href="http://127.0.0.1:3000/api/shoppinglist">Klikk meg for å gå til API endepunktet</a></p>

        <ul>
          {shoppingList.map((item) => (
            <li key={item.name}>{item.quantity} {item.name}</li>
          ))}
        </ul>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Vare</label>
          <br></br>

          <input id="name" type="text" />
          <br></br><br></br>

          <label htmlFor="quantity">Antall</label>
          <br></br>

          <input id="quantity" type="number" />
          <br></br><br></br>

          <button type="submit">Legg til</button>
        </form>

      </main>

    </div>
  )
}
