let PlacesCard = ({ places }) => {

    return (
        <>
            <h1>Famous Historical Place in India</h1>


            <div className="container">
                <div className="row">

                    {places.map((item) => {

                        let { id, place, state, image, fact, fee, build, bin } = item;

                        return (
                            <>

                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3> {place} <span style={{ float: "right" }}>{id}</span></h3>
                                        </div>
                                        <div className="card-body">
                                            <img src={image} className="img-fluid" />
                                        </div>
                                        <div className="card-footer">
                                            <h6> {fact} </h6>
                                            <h6> {state} </h6>
                                            <h6> {fee} </h6>
                                            <h6> {build} </h6>
                                            <h6> {bin} </h6>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )

                    })
                    }
                </div>
            </div>


        </>
    )


}

export default PlacesCard;
