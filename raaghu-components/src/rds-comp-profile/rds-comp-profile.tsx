import { useState } from "react";
import { RdsInput, RdsButton, RdsIcon } from "../rds-elements";
import React from "react";
import "./rds-comp-profile.scss";

export interface RdsCompProfileProps {
  navtabItems: any[];
  profilePic: string;
  userName: string;
  userRole: string;
  onEditProfile?:(Event:React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  onLogout?:(Event:React.MouseEvent<HTMLButtonElement>)=>void;
  currNavTabId?:(id:any)=>void;
  onClose?:(Event:React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}
const RdsCompProfile = (props: RdsCompProfileProps) => {

    const[activetab, setAcivetab]=useState("")
    const profilePic =props.profilePic ||"https://www.freeiconspng.com/thumbs/profile-icon-png/account-profile-user-icon--icon-search-engine-10.png"
const onSetNavTabHandler =(id:any)=>{
    setAcivetab(id);
    props.currNavTabId!=undefined && props.currNavTabId(id)
}
  return (
    <>
      <div className="parent-div-class  p-4 ">
      <div className="justify-content-end d-flex pt-2 pb-5 ">
      <span className="me-3 close_btn_class" onClick={props.onClose} >
                  <RdsIcon
                    name="close"
                    colorVariant="dark"
                    fill={false}
                    stroke={true}
                    width="24px"
                    height="24px"
                  />
                </span>
        </div>
        <div className="justify-content-center d-flex ">
          <div className="align-items-center">
            <div className="d-inline-block position-relative">
              <img
                src={profilePic}
                alt="profilePic"
                width="150px" 
                height="150px"
                className="profil_image_Class"
              ></img>
              <div
                className="text-center"
              >
                <span className="pencilIconClass">
                    <RdsIcon name="pencil" fill={false} stroke={true} width="20px" height="20px" colorVariant="primary" onClick={props.onEditProfile}></RdsIcon>
                </span>
              </div>
            </div>
            <p className="fw-bold text-center username_p mt-3">{props.userName}</p>
            <p className="mt-1 mb-3 text-center text-muted ">{props.userRole}</p>
          </div>
        </div>

        <div className="justify-content-center d-flex  p-2 m-2">
          <div className="">
            {props.navtabItems.map((item: any) => (
              <div className={`p-3 d-flex  navtab-class ${activetab==item.id?" activeBackgraound":""}`} onClick={()=>onSetNavTabHandler(item.id)}>
                <span className="me-3">
                  <RdsIcon
                    name={item.icon}
                    colorVariant={activetab==item.id?"primary":"dark"}
                    fill={false}
                    stroke={true}
                    width="24px"
                    height="24px"
                  />
                </span>
                <div>
                  <div className={`fw-bold  ${activetab==item.id?" text-primary":""}`} >{item.label}</div>
                  <p className="text-muted text-break" >{item.subText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="justify-content-center d-flex align-items-center p-5">
        
          <RdsButton
            label="Logout"
            colorVariant="primary"
            block={false}
            tooltipTitle={""}
            type="submit"
            outlineButton={true}
            onClick={props.onLogout}
          />
        </section>
      </div>
    </>
  );
};

export default RdsCompProfile;
