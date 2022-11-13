import { useEffect, useState } from "react";

const useFetchData = (URL) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(URL);
            if (!res.ok) {
                throw new Error("some error");
            }
            const jsonData = await res.json();
            setData(jsonData);
            setLoading(false);
        }
        fetchData().catch((err) => {
            setData([]);
            setHasError(true);
            setLoading(false);
        });
    }, [URL]);

    return { data, loading, hasError };

}

export default useFetchData;