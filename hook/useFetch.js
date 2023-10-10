import { useState, useEffect } from "react";
import axios from "axios";
import PopularJobCard from "../components/common/cards/popular/PopularJobCard";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

//   const rapidApiKey = RAPID_API_KEY;

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,

    headers: {
      "X-RapidAPI-Key": 'remove this key',
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data, data);

      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("Something went wrong, please try again later");
    } finally {
        setIsLoading(false);
    }
  };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isloading, error, refetch };
};

export default useFetch;