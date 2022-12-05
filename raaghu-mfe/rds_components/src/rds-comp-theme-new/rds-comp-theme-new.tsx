import React from "react";
import { RdsLabel, RdsSelectList } from "../rds-elements";
import "./rds-comp-theme-new.scss";

export interface RdsCompThemeNewProps {
	StyleList: any;
	WebList: any;
	MenuList: any;
	StatusList: any;
}

const RdsCompThemeNew = (props: RdsCompThemeNewProps) => {
	return (
		<>
			<form>
				<div className="row mb-3">
					<div className="col-lg-6 col-md-6 form-group">
						<RdsLabel
							label="Style"
							class="form-label"
							children={<span style={{ color: "red" }}>*</span>}
						></RdsLabel>
						<RdsSelectList
							label="Select"
							selectItems={props.StyleList}
							size="small"
						></RdsSelectList>
					</div>
					<div className="col-lg-6 col-md-6">
						<RdsLabel
							label="Public Website Style"
							class="form-label"
							children={<span style={{ color: "red" }}>*</span>}
						></RdsLabel>
						<RdsSelectList
							label="Select"
							selectItems={props.WebList}
							size="small"
						></RdsSelectList>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-6 col-md-6 form-group">
						<RdsLabel
							label="Menu Placement"
							class="form-label"
							children={<span style={{ color: "red" }}>*</span>}
						></RdsLabel>
						<RdsSelectList
							label="Select"
							selectItems={props.MenuList}
							size="small"
						></RdsSelectList>
					</div>
					<div className="col-lg-6 col-md-6">
						<RdsLabel
							label="Menu Status"
							class="form-label"
							children={<span style={{ color: "red" }}>*</span>}
						></RdsLabel>
						<RdsSelectList
							label="Select"
							selectItems={props.StatusList}
							size="small"
						></RdsSelectList>
					</div>
				</div>
			</form>
		</>
	);
};

export default RdsCompThemeNew;
