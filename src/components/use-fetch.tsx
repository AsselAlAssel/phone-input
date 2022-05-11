import  { useEffect, useState } from 'react'
import { dropListValueType } from './DropListForm';

const useFetchData = (url:string) => {
        const [data,setData]=useState<dropListValueType[]>([]);
    const [loading,setLoading]=useState<boolean>(true);
    const [hasError,setHasError]=useState<boolean>(false);

    useEffect(()=>{
    const fetchData=async()=>{
    const res = await fetch(url);
    if(!res.ok){
       throw new Error("there an error because i do'nt know");
    }
    const json= await res.json();
    setData(json);
    setLoading(false);
    }
    
    fetchData().catch((err)=>{
        setData([]);
        setLoading(false);
        setHasError(true);
    })

    },[url]);

    return{data,loading,hasError};
 
}

export default useFetchData;