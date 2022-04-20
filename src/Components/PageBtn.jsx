import React from 'react'
import { Link } from 'react-router-dom'

function PageBtn() {
    return (
        <div className="row justify-content-center">
            <div className="col-md-4  col-8 pt-3">
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <Link className="btn btn-outline-warning " for="btnradio1" to="./AddDetails" >
                    <input type="radio" className="btn-check active" name="btnradio" id="btnradio1"  />
                    Add Details
                </Link>
                <Link className="btn btn-outline-warning" for="btnradio2" to="./ViewSubmission" >
                    <input type="radio" className="btn-check " name="btnradio" id="btnradio2" />
                    View Submission
                </Link>
            </div>
            </div>

        </div>
        
    )
}

export default PageBtn