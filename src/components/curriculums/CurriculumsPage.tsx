import React, { useEffect, useState } from 'react';
import { getCurriculums } from "./../../api/curriculum";
import Spinner from './../common/Spinner';
import CurriculumsList from './CurriculumsList';

export default function CurriculumsPage(props: any) {
    const [isLoading, setIsLoading] = useState(true);
    const [curriculums, setCurriculums] = useState([])
    useEffect(() => {
        getCurriculums()
            .then(curriculums => {
                setCurriculums(curriculums);
                setIsLoading(false);
            })
            .catch();
    }, []);
    return (
        isLoading ? <Spinner />
        : (
            <CurriculumsList curriculums={ curriculums } />
        )
    )
}
