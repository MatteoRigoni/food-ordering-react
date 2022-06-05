import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/Navbar.module.css"
import { useSelector } from 'react-redux';

export const Navbar = () => {
const quantity = useSelector(state => state.cart.quantity);

return (
<div className={styles.container}>
    <div className={styles.item}>
      <div className={styles.callButton}>
        <Image src="/images/telephone.png" alt="" width="32" height="32" />
      </div>
      <div className={styles.texts}>
        <div className={styles.text}>ORDER NOW!</div>
        <div className={styles.text}>012 3456 789</div>
      </div>
    </div>
    <div className={styles.item}>
      <ul className={styles.list}>
        <li className={styles.listItem}>Homepage</li>
        <li className={styles.listItem}>Products</li>
        <div className={styles.logo}>
          <Image src="/images/logo.png" alt="" width="160px" height="69px"  />
        </div>
        <li className={styles.listItem}>Events</li>
        <li className={styles.listItem}>Contacts</li>
      </ul>
    </div>
    <Link href="/cart">
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/images/cart.png" alt="" width="30px" height="30px" />
          <div className={styles.cartNumber}>{quantity}</div>
        </div>      
      </div>
    </Link>
  </div>
  )
}