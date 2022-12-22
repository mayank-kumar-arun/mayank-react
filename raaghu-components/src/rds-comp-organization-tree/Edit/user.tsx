import { useEffect, useState } from "react";
import {RdsButton} from "../../rds-elements";
import Updateorganizationtree from "./update-organization-tree";


const TreeUser = ({treeUser}:any) => {
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [treeUser])




    return(
        <>
        <div className="modal"  >
    
        <Updateorganizationtree theUser={treeUser}></Updateorganizationtree>

        <RdsButton colorVariant="secondary" onClick={handleClose} type={"submit"}>
                    Close Button
                </RdsButton>
        </div>
        </>
    )};

    export default TreeUser;
