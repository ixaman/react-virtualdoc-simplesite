import { useEffect, useState } from "react";

const useServices = ()=> {
    const [doctors, setDoctors] = useState([]);

    useEffect( ()=> {
        fetch('./doctordata.json')
        .then(res => res.json())
        .then(data => setDoctors(data.slice(0,6)))
    }, [])

    return [doctors];
}

export default useServices;