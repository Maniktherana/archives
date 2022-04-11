import React from 'react'

import styles from '../styles/Global';
import assets from '../assets';

export const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>
            Get the source code from GitHub
          </p>
          <button className={`${styles.btnPrimary}`}>
            Source Code
          </button>  
          <div className={styles.flexCenter}>
            <img src={assets.scene} alt="download_png" className={styles.fullImg} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download;