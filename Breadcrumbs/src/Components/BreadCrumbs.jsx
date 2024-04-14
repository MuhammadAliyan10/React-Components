import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/").filter((x) => x);
  let breadCrumbs = "";
  return (
    <div>
      {path.length > 0 && <Link to={"/"}>Home</Link>}
      {path.map((name, i) => {
        breadCrumbs += `/${name}`;
        const isLast = i === path.length - 1;
        return (
          <>
            {isLast ? (
              <span>/ {name}</span>
            ) : (
              <span>
                <Link to={breadCrumbs}>/ {name}</Link>
              </span>
            )}
          </>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
