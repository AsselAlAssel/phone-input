import { useEffect, useState } from "react";

const useFetchData = (URL) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(URL);
            if (!res.ok) {
                throw new Error("some error");
            }
            const jsonData = await res.json();
            setData(jsonData);
        }
        fetchData().catch((err) => {
            setData([]);
        });
    }, [URL]);

    return data;

}

export default useFetchData;