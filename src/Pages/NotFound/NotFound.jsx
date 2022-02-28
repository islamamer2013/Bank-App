import { render } from "@testing-library/react";
import React from "react";

class NotFound extends React.Component{

    render() {
        return(
            < div className="d-flex vh-100">
         <div className="d-flex  row text-center w-100  justify-content-center align-self-center">
            <div className="">
                <h1 className="fs-3">Oops!</h1>
                <h2 className="fs-3">404 Not Found</h2>
                <div className="">
                  <h1 className="fs-1">Sorry, an error has occured, Requested page not found!</h1>  
                </div>
                
            </div>
        </div>
</div>
        )
    }
}
export default NotFound;