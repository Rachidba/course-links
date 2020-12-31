import React from 'react'
import { Curriculum } from '../../models/Curriculum'
import CurriculumItem from './CurriculumItem'

export default function CurriculumsList(props: { curriculums: Curriculum[] }) {
    return (
        <div className="container-fluid">
            <div className="row">
                { props.curriculums.map(curriculum => <CurriculumItem curriculum={ curriculum }/>) }
            </div>
        </div>
    )
}
