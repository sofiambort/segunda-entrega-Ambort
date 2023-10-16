import { useFetch } from "../../utils/hooks/useFetch";

export const FetchTres = () => {
  let { data } = useFetch("https://jsonplaceholder.typicode.com/comments");
  console.log(data);

  return <div>FetchTres</div>;
};
