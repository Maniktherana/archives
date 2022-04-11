import React from 'react'

import assets from '../assets';
import styles from '../styles/Global';

const FeatureCard = ({ iconUrl, iconText }) => {
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
}

const Features = () => {
  return (
    <div className={`min-h-screen ${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`flex-col text-center ${styles.subSection}`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Technologies</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>Made in React Native</p>
        </div>
        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.react} iconText="React Native" />
          <FeatureCard iconUrl={assets.javascript} iconText="Javascript" />
        </div>
      </div>
    </div>
  )
}

export default Features;