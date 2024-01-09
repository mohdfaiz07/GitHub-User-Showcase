// Card.jsx

import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  let { usersdata } = props;
  console.log(usersdata);

  return (
    <div className={styles.cardContainer}>
     
   {usersdata.map( (item)=>{
   return  <div className={styles.elem}>
      <div className={styles.imgElem}>
        <img
          src={item.avatar_url
          }
          alt="photo load"
        />
      </div>
      <div className={styles.txtElem}>
        <h3>{item.login}</h3>
        <a href={item.followers_url}></a> 
      </div>
      <button>Follow</button>
    </div>


   } )}
     



      
    </div>
  );
};

export default Card;
