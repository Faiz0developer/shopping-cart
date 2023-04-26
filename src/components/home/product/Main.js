import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../../store/slices/productSlice";
import { STATUSES } from "../../../store/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Card from "../../UI/Card";
import styles from "../../../styles/Card.module.css";
import Button from "../../UI/Button";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from "../../UI/CardSkeleton";

const Main = ({ onAddData, userInput }) => {
  const [endPoint, setEndPoint] = useState(6);
  const [page, setPage] = useState({ start: 0, end: endPoint });

  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);

  

  const loadMoreData = () => {
    setEndPoint(endPoint + 6);
    setPage({ start: 0, end: endPoint });
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.card_container}>
          <SkeletonTheme>
          {status === STATUSES.LOADING ? (
            <>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            </>
          ) : (
            data.slice(page.start, page.end).map((item, index) => {
              return <Card item={item} key={item.id} />;
            })
          )}
          </SkeletonTheme>
        </div>
        <Button className={styles.btn} onClick={loadMoreData}>
          Load More
        </Button>
      </div>
    </div>
  );
};

export default Main;
