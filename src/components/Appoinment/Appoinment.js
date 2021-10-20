import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import SingleService from '../SingleService/SingleService';

const Appoinment = () => {
    const [doctors] = useServices();
    const {docId} = useParams();
    return (
        <div>
            {
                doctors.map( doctor => {
                    return doctor.doc_id === docId && <SingleService
                        key = {doctor.doc_id}
                        doctor = {doctor}
                    ></SingleService>
                })
            }
        </div>
    );
};

export default Appoinment;