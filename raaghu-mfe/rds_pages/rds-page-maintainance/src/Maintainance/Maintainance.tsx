import React, { useState } from "react";
import { RdsCompWebsiteLog, RdsCompCache } from "../../../rds-components";
import "./Maintainance.scss";
import {
	RdsButton,
	RdsFabMenu,
	RdsIcon,
	RdsNavtabs,
} from "../../../rds-elements";

const Maintainance = () => {
	const [tabcache, setTabcache] = useState(false);
	const [WebsiteLog, setWebsiteLog] = useState(true);
	const listItems1 = [
		{
			value: "Clear All",
			some: "value",
			key: "clearall",
			icon: "delete",
			iconWidth: "20px",
			iconHeight: "20px",
		},
	];

	const listItems2 = [
		{
			value: "Refresh",
			some: "value",
			key: "refresh",
			icon: "refresh",
			iconWidth: "20px",
			iconHeight: "20px",
		},
		{
			value: "Download All",
			some: "value",
			key: "downloadall",
			icon: "download_data",
			iconWidth: "20px",
			iconHeight: "20px",
		},
	];

	const navtabsItems = [
		{
			label: "Cache",
			id: "nav-cache",
			tablink: "#nav-cache",
			ariacontrols: "nav-cache",
		},
		{
			label: "WebsiteLog",
			id: "nav-websiteLogs",
			tablink: "#nav-websiteLogs",
			ariacontrols: "nav-websiteLogs",
		},
	];

	const onchangetabs = (e: any) => {
		let tabId = e.target.value;
		if (tabId == 0) {
			setTabcache(true);
			setWebsiteLog(false);
		} else {
			setTabcache(false);
			setWebsiteLog(true);
		}
	};
	const Delete = () => {};
	return (
		<div>
			<div className="row">
				<div className="col-md-12 text-end pb-3">
					{tabcache && (
						<div className="d-flex justify-content-end">
							<div className="desktop-btn">
								<RdsButton
									type={"button"}
									colorVariant="primary"
									size="small"
									tooltipPlacement="top"
									label="CLEAR ALL"
								>
									<RdsIcon name={"delete"} width="15px" height="15px"></RdsIcon>
								</RdsButton>
								{/* <rds-button (click)="deletAllcasheConfirmation()" [id]="'yes'" [size]="'small'" [tooltipPlacement]="'top'"
										[colorVariant]="'primary'" [label]="translate.instant('CLEAR ALL')">
										<rds-icon left name="delete" width="15px" height="15px"></rds-icon>
									</rds-button> */}
							</div>
							<div
								className="mobile-btn position-fixed bottom-0 end-0 my-5 me-5"
								style={{ zIndex: 1 }}
							>
								<RdsFabMenu
									listItems={listItems1}
									colorVariant="primary"
									menuIcon="plus"
									menuiconWidth="12px"
									menuiconHeight="12px"
								></RdsFabMenu>
							</div>
						</div>
					)}

					{WebsiteLog && (
						<div className="d-flex justify-content-end">
							<div className="desktop-btn">
								<RdsButton
									type={"button"}
									size="small"
									colorVariant="primary"
									roundedButton={true}
									icon="refresh"
									class="me-2"
								></RdsButton>
								<RdsButton
									type={"button"}
									label="DOWNLOAD ALL"
									outlineButton={true}
									colorVariant="primary"
									tooltipPlacement="top"
									size="small"
								>
									<RdsIcon
										name={"download_collected_data"}
										height="12px"
										width="12px"
									></RdsIcon>
								</RdsButton>
								{/* <rds-button type="button" [size]="'small'" [colorVariant]="'primary'" [roundedButton]="true"
									icon="refresh" iconHeight="16px" iconWidth="16px" (click)="refreshData()" class="me-2">
								</rds-button> */}
								{/* <rds-button [id]="'yes'" [size]="'small'" [tooltipPlacement]="'top'" [colorVariant]="'primary'"
									(click)="exportToExcel()" [label]="translate.instant('DOWNLOAD ALL')" [outlineButton]="true">
									<rds-icon left name="download_collected_data" height="12px" width="12px"></rds-icon>
								</rds-button> */}
							</div>
							<div
								className="mobile-btn position-fixed bottom-0 end-0 my-5 me-5"
								style={{ zIndex: 1 }}
							>
								<RdsFabMenu
									listItems={listItems2}
									menuIcon="plus"
									colorVariant="primary"
									menuiconHeight="12px"
									menuiconWidth="12px"
								></RdsFabMenu>
								{/* <rds-fab-menu [listItems]="listItems2" [menuicon]="'plus'" [colorVariant]="'primary'" [menuiconWidth]="'12px'" [menuiconHeight]="'12px'" (onSelect)="onSelectMenu($event)"></rds-fab-menu> */}
							</div>
						</div>
					)}
				</div>

				<div className="col-md-12">
					<div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">
						<RdsNavtabs
							navtabsItems={navtabsItems}
							type={"tabs"}
							fill={false}
							justified={false}
						></RdsNavtabs>
						{/* <rds-nav-tab [navtabsItems]="getNavTabItems()" horizontalAlignment="start" [verticalAlignment]="false"
								[pills]="false" [tabs]="true" [fill]="false" [justified]="false" [flex]="false"
								(onClicktab)="getnavtabid($event)">
							</rds-nav-tab> */}
						<div className="tab-content py-4" id="headerbar">
							<div
								className="tab-pane fade active show"
								id="nav-cache"
								role="tabpanel"
								aria-labelledby="nav-cache"
							>
								<RdsCompCache
									cachedata={[
										{ name: "AbpUserSettingsCache", id: 1 },
										{ name: "AbpZeroRolePermissions", id: 2 },
										{ name: "AbpZeroTenantCache", id: 3 },
										{ name: "AbpZeroEditionFeatures", id: 4 },
									]}
									recordsperpage={5}
									pagination={true}
									onclick={Delete}
									alignment={"end"}
								></RdsCompCache>
								{/* <app-cache [cashedata]="cashedata"></app-cache> */}
							</div>
							<div
								className="tab-pane fade"
								id="nav-websiteLogs"
								role="tabpanel"
								aria-labelledby="nav-websiteLogs"
							>
								<RdsCompWebsiteLog
									websiteLogData={[]}
									pagination={true}
									alignmentType="end"
									totalRecords={20}
									recordsPerPage={10}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Maintainance;
