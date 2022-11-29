import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "./rds-file-uploader.scss";
import { useState } from "react";

export interface RdsFileUploaderProps {
  placeholder: string;
  size: string;
  colorVariant: string;
  multiple: boolean;
}

const fileholder: any = [];

const RdsFileUploader = (props: RdsFileUploaderProps) => {
  const [FileArray, setFileArray] = useState(fileholder);

  let size: "form-select-sm" | "form-select-lg" | undefined = undefined;
  if (props.size == "small") {
    size = "form-select-sm";
  } else if (props.size == "large") {
    size = "form-select-lg";
  }
  const onchangehandler = (event: any) => {
    setFileArray([...FileArray, event.target.files[0]]);
    console.warn(event.target.files[0].name);
    console.warn(event.target.files);
    console.log(typeof FileArray);
  };
  console.log("name" + FileArray);
  return (
    <>
      <div className={`row pb ${props.multiple ? "display" : ""}`}>
        <div className="col-md-6">
          <div>
            <label className="label">Upload file</label>
          </div>

          <div>
            <input
              multiple
              className={` input  form-control  ${size} `}
              type="file"
              name="file"
              onChange={(event) => onchangehandler(event)}
            />
          </div>
        </div>
      </div>

      <div className={`row pb ${props.multiple ? "" : "display"}`}>
        <div>
          <div className="col-md-6">
            <div className="labelbox">
              <label className="label">Upload file</label>
              <label className="label">Maximum 5MB</label>
            </div>

            <div className="row fullbox ">
              <div className="col-md-6 leftinnerbox">
                <div className="row lefttext">
                  <h6>Drag and drop files</h6>
                </div>
                <div className="row lefttext">
                  <div className="format">PNG, JPG, DOC, PDF, PPT</div>
                </div>
              </div>
              <div className="col-md-6 rightbox ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-upload upload "
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                </svg>
              </div>

              <div className=" row pb inputbox">
                <input
                  className={` col-md-6 input mulinput   ${size} `}
                  type="file"
                  name="file"
                  onChange={(event) => onchangehandler(event)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RdsFileUploader;
