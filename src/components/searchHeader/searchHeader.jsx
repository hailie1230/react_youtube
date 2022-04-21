import React, { memo, useRef } from 'react';
import styles from './searchHeader.module.css';

const SearchHeader = memo(
  ({ onSearch }) => {
    const inputRef = useRef();
    const handleSearch = () => {
      const value = inputRef.current.value;
      // console.log(value);
      onSearch(value);
    }
    const onClick = () => {
      console.log('onClick');
      handleSearch();
    };
    
    const onKeyPress = (event) => {
      console.log('onKeyPress');
      if(event.key === 'Enter'){
        handleSearch();
      }
    };
  
    return (
      <div className={styles.header}>
        <a href="/" className={styles.logo}>
          <i className="icon__youtube fa-brands fa-youtube"></i>
          <strong className={styles.logo__tit}>REACT-tube </strong>
        </a>
        <div
          className={styles.form} 
        >
          <input 
            className={styles.box}
            type="text"
            placeholder="search"
            onKeyPress={onKeyPress}
            ref={inputRef}
          />
          <button className={styles.button} type="submit" onClick={onClick}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className={styles.user}>
          <strong>
            <i className="fa-solid fa-user"></i>
          </strong>
        </div>
      </div>
    );
  }
);

export default SearchHeader;
