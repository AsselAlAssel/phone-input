import { useEffect, useState } from "react";
import { dropListValueType } from "../assets/Constant";

const useFetchData = <T>(URl: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URl);
      if (!res.ok) {
        throw new Error("there an error because i do'nt know");
      }
      const json = await res.json();
      setData(json);
      setLoading(false);
    };

    fetchData().catch((err) => {
      setData([]);
      setLoading(false);
      setHasError(true);
    });
  }, [URl]);

  return { data, loading, hasError };
};

export default useFetchData;
