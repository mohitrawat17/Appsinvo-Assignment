"use client";
import React, { useContext } from "react";
import { DataContext } from "../assets/globalContext";

const Sports_data = () => {
  const { data } = useContext(DataContext);

  return (
    <ul
      class="nav nav-pills mb-3 justify-content-start justify-content-md-center tabsnew lineAlign"
      id="pills-tab"
      role="tablist"
    >
      {data?.SportsData && data?.SportsData.length>0 && data?.SportsData.map((data) => {
        return(
          <li class="nav-item" role="presentation">
            <button class="nav-link text-capitalize d-grid" type="button">
              <img
                src={data?.sportsUnselectedImage}
                alt=""
                class="sportTabImg"
              />
              {data?.sport}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Sports_data;
