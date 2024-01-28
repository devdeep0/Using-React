import { useEffect, useState } from "react";

function UseCurrentCurr(value) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${value}.json`)      
        .then((res) => res.json())
        .then((res) => setData(res[value]))
        .catch(error => console.error('Error fetching data:', error));
        console.log(value);
    }, [value]);
    console.log(data);
    return data;
}

export default UseCurrentCurr;