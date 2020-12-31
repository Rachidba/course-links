import React from 'react'
import { Resource } from '../../models/Resource'
import ResourceItem from './ResourceItem'

export default function ResourcesList(props: { resources: Resource[] }) {
    return (
        <div className="container-fluid">
            <div className="row">
                { props.resources.map(resource => <ResourceItem resource={ resource }/>) }
            </div>
        </div>
    )
}
