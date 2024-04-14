import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchAPIData = async () => {
      const dataApi = await fetch(
        `https://dummyjson.com/products/${params.id}`
      );
      const res = await dataApi.json();
      setData(res);
    };
    fetchAPIData();
  }, []);
  return (
    <div className="container mt-5">
      {data ? (
        <div className="information d-flex">
          <div className="data_image me-4s">
            <img src={data.thumbnail} alt="" />
          </div>
          <div className="data__details">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <b>{data.price}$</b>
          </div>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};

export default SingleProduct;
