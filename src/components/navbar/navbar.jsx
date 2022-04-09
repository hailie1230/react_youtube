import React, { Component } from 'react';
import styles from './navbar.module.css';

class Navbar extends Component {
  render() {
    return (
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <i className="icon__youtube fa-brands fa-youtube"></i>
          <strong className={styles.logo__tit}>REACT-tube</strong>
        </div>
        <form className={styles.form}>
          <input 
            className={styles.box}
            type="text"
            placeholder="search"
          />
          <button className={styles.button}><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <div className={styles.user}>
          <strong>
            <i className="fa-solid fa-user"></i>
          </strong>
        </div>
      </div>
    );
  }
}

export default Navbar;