import { Resource } from '../../models/Resource';

function ResourceItem(props: { resource: Resource  }) {
    return (
        <div className="col-12 mt-3">
            <div className="card">
                <div className="card-horizontal">
                    <a href={ props.resource.link }>
                        <div className="img-square-wrapper">
                            <img className="" src="http://via.placeholder.com/300x180" alt="Card image cap"/>
                        </div>
                    </a>
                    <div className="card-body">
                        <h4 className="card-title">{ props.resource.title }</h4>
                        <p className="card-text">{ props.resource.description }</p>
                    </div>
                </div>
                {/* <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div> */}
            </div>
        </div>
    )
}

export default ResourceItem;

