import { useEffect, useState } from "react";


const useFetchData = <T>(URl: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URl);
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setData([]);
        setHasError(true);
        setLoading(false);

      }

    };
    fetchData();
  }, [URl]);

  return { data, loading, hasError };
};

export default useFetchData;
