import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const api = `https://dummyjson.com/products?limit=100`;
      const apiData = await fetch(api);
      const res = await apiData.json();
      setData(res.products);
    };
    fetchData();
  }, []);
  const handlePagination = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= data.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };
  console.log(page);

  return (
    <>
      {data.length > 0 ? (
        <div>
          <ul className="products">
            {data?.slice(page * 10 - 10, page * 10).map((d) => {
              return (
                <div key={d.id} className="product_listing">
                  <div className="product__images">
                    <img src={d.thumbnail} alt="" />
                  </div>
                  <div className="product__details">
                    <li>
                      <h3>{d.title}</h3>
                    </li>
                    <li>
                      <p>{d.description}</p>
                    </li>
                    <li>
                      <b>{d.price}$</b>
                    </li>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      ) : (
        <p>No Data</p>
      )}
      <div className="pagination">
        <span
          className={page > 1 ? "" : "disabled"}
          onClick={() => handlePagination(page - 1)}
        >
          ◀️
        </span>
        {data.length > 0 &&
          [...Array(data.length / 10)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "selectedPage" : ""}
                onClick={() => handlePagination(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
        <span
          className={page < data.length / 10 ? "" : "disabled"}
          onClick={() => handlePagination(page + 1)}
        >
          ▶️
        </span>
      </div>
    </>
  );
}

export default App;
