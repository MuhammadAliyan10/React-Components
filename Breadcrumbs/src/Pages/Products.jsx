import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchAPIData = async () => {
      const dataApi = await fetch("https://dummyjson.com/products");
      const res = await dataApi.json();
      setData(res.products);
    };
    fetchAPIData();
  }, []);
  return (
    <div>
      {data.length > 0 ? (
        <div className="container">
          <div className="row">
            {data.map((e) => {
              return (
                <div className="col-sm-4">
                  <div class="card mb-4">
                    <img src={e.thumbnail} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">{e.title}</h5>
                      <p class="card-text">{e.description.slice(0, 40)}....</p>
                      <Link class="btn btn-primary" to={`/product/${e.id}`}>
                        Check
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
};

export default Products;
