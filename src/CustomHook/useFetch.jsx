import React, { useEffect, useState } from "react";

const useFetch = ( ) => {
  const [data, setData] = useState();
    useEffect(()=>{
        fetch(url).then((res)=>res.json()).then((data)=>setData(data))
    },[url])
  return [data];
};

export default useFetch;
