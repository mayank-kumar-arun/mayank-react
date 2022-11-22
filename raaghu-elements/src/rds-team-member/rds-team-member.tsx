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
            <div style={{maxWidth: "270px"}}>
              <div className="card-border mt-5 pt-5">
                <div className="card pb-4 pt-5 px-3 justify-content-end">
                  <div>
                    <img
                      src={teamItems.imgLink}
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div className="mt-3">
                    <div className="d-flex justify-content-center mt-2">
                      <h2>
                        <RdsLabel
                          label={teamItems.title}
                          multiline={false}
                          bold={false}
                          italic={false}
                        ></RdsLabel>
                      </h2>
                    </div>
                    <div className="d-flex justify-content-center text-primary">
                      <h5>
                        <RdsLabel
                          label={teamItems.subTitle}
                          multiline={false}
                          bold={false}
                          italic={false}
                        ></RdsLabel>
                      </h5>
                    </div>
                    <div className="d-flex justify-content-center text-muted">
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
                <div className="text-center mt-3">
                  <RdsLabel
                    label={teamItems.description}
                    multiline={true}
                    bold={false}
                    italic={false}
                  ></RdsLabel>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default RdsTeamMember;
