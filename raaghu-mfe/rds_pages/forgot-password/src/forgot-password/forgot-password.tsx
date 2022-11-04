import React from "react";

const RdsCompForgotPassword = React.lazy(() => import("rds_components/RdsCompForgotPassword"));



const ForgotPassword = () =>{

    return (
        <div>
            <div className=" " style={{backgroundImage: "url(/body-backgroud.svg)", backgroundSize: "cover" , backgroundPosition: "bottom", backgroundRepeat: "no-repeat" }}>
                <div className="align-items-center d-flex justify-content-center login m-auto" style={{maxWidth: 900, height: "100%"}}>
                    <div className="container-fluid m-2">
                    <div className="bg-white row rounded-3">
                        <div className="col-md-6">
                        <div className="py-4 px-3">
                            <div className="pb-4">
                            <div  className="text-center">
                                <img src="Raaghu-logo-mfe-black.png" className="img-fluid"/>
                            </div>
                            </div>
                            <RdsCompForgotPassword></RdsCompForgotPassword>
                        </div>
                        </div>
                        <div className="col-md-6 order-1 order-sm-2 rounded-end"
                            style={{backgroundImage: "url(/Login-card.svg)" , backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat: "no-repeat", backgroundColor: "#000"}}>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;