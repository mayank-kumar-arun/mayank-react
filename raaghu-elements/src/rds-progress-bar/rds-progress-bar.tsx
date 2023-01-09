import React from "react";
import "./rds-progress-bar.scss";

export interface RdsProgressBarProps {
  colorVariant: string;
  striped?: string;
  progressWidth: number;
  animation?: boolean;
  height?: number;
  progressValues?: any[];
  role: string;
  displayLevel?: boolean;
  displaypercentage?: boolean;
  width?: string;
}

const RdsProgressBar = (props: RdsProgressBarProps) => {
  return (
    <>
      {props.role == "single" && (
        <>
          <div
            className="progress"
            style={{ height: props.height, maxWidth: `${props.width}` }}
          >
            <div
              className={`progress-bar${
                props.striped == "progress-bar-striped" ? "-striped" : ""
              } ${
                props.animation
                  ? "progress-bar-striped progress-bar-animated"
                  : ""
              } bg-${props.colorVariant}`}
              role="progressbar"
              style={{ width: `${props.progressWidth}%`, textAlign: "center" }}
              aria-valuenow={props.progressWidth}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              {props.displaypercentage && <>{props.progressWidth}%</>}
            </div>
          </div>
          {props.displayLevel && (
            <div className="d-flex justify-content-between">
              <div>0</div>
              <div>100</div>
            </div>
          )}
        </>
      )}

      {props.role == "multiple" && (
        <>
          <div className="progress">
            {props.progressValues!.map((progressValue) => (
              <div
                className={`progress-bar bg-${progressValue.colorVariant} ${progressValue.stripe} ${progressValue.animation}`}
                role="progressbar"
                style={{ width: `${progressValue.progressWidth}%` }}
                aria-valuenow={progressValue.progressWidth}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                {progressValue.progressWidth}%
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default RdsProgressBar;
