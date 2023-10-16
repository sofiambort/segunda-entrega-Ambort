import { useFetch } from "../../utils/hooks/useFetch";

export const FetchDos = () => {
  let { data } = useFetch("https://jsonplaceholder.typicode.com/albums");
  console.log(data);

  return <div>FetchDos</div>;
};
