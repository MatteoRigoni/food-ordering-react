import React from 'react'
import styles from "../styles/ProductItem.module.css"
import Image from 'next/image'
import Link from 'next/Link'

const ProductItem = ({pizza}) => {
  return (
    <div className={styles.container}>
        <Link href={`/product/${pizza._id}`}>
            <Image src={pizza.img} alt="aaa" width="500" height="500" />
        </Link>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>{pizza.price}</span>
        <p className={styles.desc}>
            {pizza.description}
        </p>
    </div>
  )
}

export default ProductItem