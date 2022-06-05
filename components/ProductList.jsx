import React from 'react'
import styles from "../styles/ProductList.module.css"
import ProductItem from "../components/ProductItem"
import Image from 'next/image'

const ProductList = ({pizzaList}) => {
    return (
      <div className={styles.container}>
        <h1 className={'styles.title'}>The Best Pizza In Town</h1>
        <p className={'styles.desc'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel euismod nunc, ac sagittis lacus. Mauris quis efficitur massa, eget ultrices elit. 
        </p>
        <div className={styles.wrapper}>
            {pizzaList.map((pizza) => (
                <ProductItem key={pizza._id} pizza={pizza} />
            ))}
      </div>
      </div>
      
    );
  };
  
  export default ProductList