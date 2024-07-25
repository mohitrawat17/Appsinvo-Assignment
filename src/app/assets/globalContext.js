'use client'
import React, { createContext, useEffect, useState } from "react";
import { getAllData } from "../apis/allData";

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const data = await getAllData();
    if (data.code) {
      setData(data.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DataContext.Provider value={{data} }>{children}</DataContext.Provider>
  );
};

export { DataContext, DataProvider };
