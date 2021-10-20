import { useEffect, useState } from "react";

const useServices = ()=> {
    const [doctors, setDoctors] = useState([]);

    useEffect( ()=> {
        fetch('https://ixaman.github.io/healthcarefakeapi/doctordata.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    return [doctors];
}

export default useServices;