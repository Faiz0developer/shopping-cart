import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from '../../styles/Card.module.css'

const CardSkeleton = () => {
  return (
    <div className={styles.skeletonCards}>
      <div className="mt-10 ">
        <Skeleton/>
      </div>
      <p>
        <Skeleton/>
      </p>
      <p>
        <Skeleton />
      </p>
      <p>
        <Skeleton count={4}/>
      </p>
    </div>
  );
};

export default CardSkeleton;
