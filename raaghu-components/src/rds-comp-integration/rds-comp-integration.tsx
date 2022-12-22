import React from "react";
import { RdsAppDetail, RdsButton, RdsSpinner } from "../rds-elements";

export interface RdsCompIntegrationProps {
	appDetailList: any;
	integrationList: any[];
}

const RdsCompIntegration = (props: RdsCompIntegrationProps) => {
	return (
		<>
			<div>
				<div className="row">
					{props.integrationList.map((item: any, index: number) => (
						<div className="mb-3 col-4 " key={index}>
							<RdsAppDetail appDetailsItem={item} />
						</div>
					))}
				</div>
				<hr />
				<div className="m-3 d-flex justify-content-end">
					<div className="col-2 me-3">
						<RdsButton
							label="Cancel"
							colorVariant="primary"
							block={true}
							tooltipTitle={""}
							type="submit"
							outlineButton={true}
						/>
					</div>
					<div className="col-2">
						<RdsButton
							children={
								<RdsSpinner
									spinnerType="border"
									height="15px"
									borderWidth="medium"
									width="15px"
									colorVariant="light"
								/>
							}
							colorVariant="primary"
							isDisabled={true}
							block={true}
							tooltipTitle={""}
							type="submit"
						/>
					</div>
				</div>
			</div>
		</>
	);
};
export default RdsCompIntegration;
