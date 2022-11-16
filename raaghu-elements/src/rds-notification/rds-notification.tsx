import React, { Fragment, useState } from "react";
import { Colors } from "../../libs/types";
import RdsIcon from "../rds-icon/rds-icon";
import "./rds-notification.scss";

export interface RdsNotificationProps {
  colorVariant?: Colors;
 
  unreadCount:number
  notifications: any[];
  footerText: string;
}

const RdsNotification = (props: RdsNotificationProps) => {
  const [textColor, setTextColor] = useState("");
  const [id, setId] = useState("");

  const getIcon = (notification: any) => {
    if (notification.status == "success") {
      return "tick_circle";
    }
    if (notification.status == "warn") {
      return "exclamation_circle";
    }
    if (notification.status == "error") {
      return "close_circle";
    }
    if (notification.status == "info") {
      return "information";
    }
    return "";
  };

  const getColor = (notification: any, isIcon: boolean = false) => {
    if (isIcon) {
      if (notification.status == "info") {
        return "primary";
      }
      if (notification.status == "error") {
        return "danger";
      }
      if (notification.status == "warn") {
        return "dark";
      }
      return notification.status;
    } else {
      if (notification.selected) {
        if (notification.status == "info") {
          setTextColor("text-primary");
        }
        if (notification.status == "error") {
          setTextColor("text-danger");
        }
        if (notification.status == "warn") {
          setTextColor("text-dark");
        }
        return "text-" + notification.status;
      }
    }
  };
  const textColorHandler = (notification: any, i: any) => {
    console.log("index - " + i);
    console.log("notification.status - " + notification.status);
    if (notification.status == "success") {
      setTextColor("text-success");
    }
    if (notification.status == "warn") {
      setTextColor("text-dark");
    }
    if (notification.status == "error") {
      setTextColor("text-danger");
    }
    if (notification.status == "info") {
      setTextColor("text-primary");
    }
    setId(i);
    console.log("TextColor - " + textColor);
  };
   let bgColor = "bg-"+ (props.colorVariant||"success");
  let unread = props.hasOwnProperty("unreadCount") == true && props.unreadCount > 0  

  return (
    <Fragment>
      <div className="card ">
        <div className="card-header p-3 text-start headerStyle ">
          <div className="head ps-3 position-relative">
            {" "}
            Notification
           {unread==true&& 
              <span className={"position-absolute top-0 start-100 ms-2 translate-middle badge rounded-pill "+`${bgColor}`}>
                {props.unreadCount}
                <span className="visually-hidden">unread messages</span>
              </span>}
           {" "} 
          </div>
          <div>
            <RdsIcon
              name="gear"
              fill={false}
              stroke={true}
              colorVariant="dark"
              width="20px"
              height="20px"
            />{" "}
          </div>
        </div>
        {props.notifications.map((notification: any, index: any) => (
          <div
            className="card-body d-flex ps-4"
            onClick={() => textColorHandler(notification, index)}
          >
            <div className="d-flex p-1">
              <div
                className="px-3 d-flex ps-0"
                style={{ alignItems: "center" }}
              >
                <RdsIcon
                  name={getIcon(notification)}
                  fill={false}
                  stroke={true}
                  colorVariant={getColor(notification, true)}
                  width="20px"
                  height="20px"
                />
              </div>
              <div className="text-start ps-0 w-100">
                <div
                  className={
                    "fs-6 " +
                    `${notification.userNotificationId == id ? textColor : ""}`
                  }
                >
                  {notification.title}{" "}
                </div>
                {notification.hasOwnProperty("url") == true && (
                  <a href={notification.url}>{notification.urlTitle}</a>
                )}
                <div>
                  <small className="text-muted">{notification.time}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="card-footer text-muted  text-center">
          {props.footerText}
        </div>
      </div>
    </Fragment>
  );
};

export default RdsNotification;
