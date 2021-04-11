import React from "react";
import { FETCH_COUNTRIES } from "./utils/utils.js";
import { useQuery } from "@apollo/client";
import Countries from "./components/Countries.js";

export default function App() {
  const { loading, data } = useQuery(FETCH_COUNTRIES);
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    if (!loading) {
      setCountries(data.countries);
    }
  }, [data]);

  return (
    <>
      <Countries countries={countries} loading={loading} />
    </>
  );
}
