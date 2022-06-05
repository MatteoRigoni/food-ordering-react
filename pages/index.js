import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import ProductList from '../components/ProductList'
import styles from '../styles/Home.module.css'

export default function Home({pizzaList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in San Diego</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <ProductList pizzaList={pizzaList} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/product");
  return {
    props: {
      pizzaList: res.data
    }
  }
}
