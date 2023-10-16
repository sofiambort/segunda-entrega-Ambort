import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = axios.get(endpoint);
    getData.then((res) => setData(res.data));
  }, [endpoint]);

  return { data: data };
};
