import { useEffect, useState } from "react";
import Albums from "./Albums";
import axios from "axios";

const FetchingData = () => {
  const [albums, setAlbums] = useState([]);

  console.log({ albums });

  useEffect(() => {
    // const tarea = fetch("https://jsonplaceholder.typicode.com/albums");

    // tarea
    //   .then((res) => res.json())
    //   .then((res) => setAlbums(res))
    //   .catch((err) => console.log(err));

    const tarea = axios.get("https://jsonplaceholder.typicode.com/albums");
    tarea.then((res) => console.log(res.data));
  }, []);

  const crear = () => {
    // fetch("https://jsonplaceholder.typicode.com/albums/15", {
    //   method: "PUT",
    //   body: JSON.stringify({
    //     userId: 2,
    //     title: "Album modificado",
    //   }),
    // headers: {
    //   "authorization": "ishdflfhdw524"
    // } NO LO NECESITO PORQUE NO ES UNA URL PRIVADA

    axios.post("https://jsonplaceholder.typicode.com/albums", {
      userId: 2,
      title: "Album modificado",
    });
  };

  return <Albums albums={albums} crear={crear} />;
};

export default FetchingData;
