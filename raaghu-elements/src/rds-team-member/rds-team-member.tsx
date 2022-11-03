import React from "react";
import RdsIcon from "../rds-icon";
import RdsLabel from "../rds-label";

export interface RdsTeamMemberProps {
  displayType: string;
  teamItem: any[];
}

const RdsTeamMember = (props: RdsTeamMemberProps) => {
  return (
    <div>
      {props.teamItem.map((teamItems, idx) => (
        <>
          <div className="row">
            <div className="col-md-3 card-border">
              <div
                className="card"
                key={idx}
                style={{
                  width: "18rem",
                  paddingTop: "40px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingBottom: "5px",
                }}
              >
                <img
                  src={teamItems.imgLink}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body mt-1">
                  <div
                    className="d-flex justify-content-center mt-1"
                    style={{ height: "2.4rem" }}
                  >
                    <h2>
                      <RdsLabel
                        label={teamItems.title}
                        multiline={false}
                        bold={false}
                        italic={false}
                      ></RdsLabel>
                    </h2>
                  </div>
                  <div
                    className="d-flex justify-content-center"
                    style={{ height: "2.4rem", color: "#7e2eef" }}
                  >
                    <h5>
                      <RdsLabel
                        label={teamItems.subTitle}
                        multiline={false}
                        bold={false}
                        italic={false}
                      ></RdsLabel>
                    </h5>
                  </div>
                  <div className="d-flex justify-content-center">
                    <RdsIcon
                      name={teamItems.twitterIcon}
                      height="27px"
                      fill={false}
                      stroke={true}
                      width="27px"
                      colorVariant=""
                    ></RdsIcon>
                    <RdsIcon
                      class="mx-2"
                      name={teamItems.twitterIcon}
                      height="27px"
                      fill={false}
                      stroke={true}
                      width="27px"
                      colorVariant=""
                    ></RdsIcon>
                  </div>
                </div>
              </div>
              <div className="text-center mt-2">
                <RdsLabel
                  label={teamItems.description}
                  multiline={true}
                  bold={false}
                  italic={false}
                ></RdsLabel>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default RdsTeamMember;
