import React from 'react'
import { Link } from "react-router-dom";
import { Curriculum } from '../../models/Curriculum'

export default function CurriculumItem(props: { curriculum: Curriculum }) {
    return (
        <div className="col-12 mt-3">
            <div className="card">
                <h5 className="card-header">{ props.curriculum.title }</h5>
                <div className="card-body">
                    <h5 className="card-title">Created By: { props.curriculum.ownerId }</h5>
                    <p className="card-text">{ props.curriculum.description }</p>
                    <Link className="btn btn-primary" to={"/curriculum/" + props.curriculum.slug}>View curriculum page</Link>
                </div>
            </div>
        </div>
    )
}
