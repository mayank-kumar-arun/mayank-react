import React, { useState } from "react";
import { RdsCompWebsiteLog, RdsCompCache, RdsCompAlertPopup } from "../../../rds-components";
import "./Maintainance.scss";
import {
	RdsButton,
	RdsFabMenu,
	RdsIcon,
	RdsNavtabs,
} from "../../../rds-elements";

const Maintainance = () => {
	const [tabcache, setTabcache] = useState(true);
	const [WebsiteLog, setWebsiteLog] = useState(false);
	const [activeNavTabId, setActiveNavTabId] = useState("nav-cache");
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

	const websiteLogData = [
		{
			status: "INFO",
			content:
				"2021-12-28 15:43:39,431 [1 ] oft.EntityFrameworkCore.Model.Validation - Entity &#39;Edition&#39; has a global query filter defined and is the required end of a relationship with the entity &#39;EditionFeatureSetting&#39;. This may lead to unexpected results when the required entity is filtered out. Either configure the navigation as optional, or define matching query filters for both entities in the navigation. See https://go.microsoft.com/fwlink/?linkid=2131316 for more information.",
		},
		{
			status: "WARN",
			content:
				"2021-12-28 15:43:39,624 [1 ] oft.EntityFrameworkCore.Model.Validation - No type was specified for the decimal property &#39;DailyPrice&#39; on entity type &#39;SubscribableEdition&#39;. This will cause values to be silently truncated if they do not fit in the default precision and scale. Explicitly specify the SQL server column type that can accommodate all the values in &#39;OnModelCreating&#39; using &#39;HasColumnType()&#39;, specify precision and scale using &#39;HasPrecision()&#39; or configure a value converter using &#39;HasConversion()&#39;.",
		},
		{
			status: "INFO",
			content:
				"2021-12-28 15:43:39,431 [1 ] oft.EntityFrameworkCore.Model.Validation - Entity &#39;Edition&#39; has a global query filter defined and is the required end of a relationship with the entity &#39;EditionFeatureSetting&#39;. This may lead to unexpected results when the required entity is filtered out. Either configure the navigation as optional, or define matching query filters for both entities in the navigation. See https://go.microsoft.com/fwlink/?linkid=2131316 for more information.",
		},
		{
			status: "ERROR",
			content:
				"2021-12-28 15:43:39,624 [1 ] oft.EntityFrameworkCore.Model.Validation - No type was specified for the decimal property &#39;DailyPrice&#39; on entity type &#39;SubscribableEdition&#39;. This will cause values to be silently truncated if they do not fit in the default precision and scale. Explicitly specify the SQL server column type that can accommodate all the values in &#39;OnModelCreating&#39; using &#39;HasColumnType()&#39;, specify precision and scale using &#39;HasPrecision()&#39; or configure a value converter using &#39;HasConversion()&#39;.",
		},
		{
			status: "WARN",
			content:
				"2021-12-28 15:43:39,431 [1 ] oft.EntityFrameworkCore.Model.Validation - Entity &#39;Edition&#39; has a global query filter defined and is the required end of a relationship with the entity &#39;EditionFeatureSetting&#39;. This may lead to unexpected results when the required entity is filtered out. Either configure the navigation as optional, or define matching query filters for both entities in the navigation. See https://go.microsoft.com/fwlink/?linkid=2131316 for more information.",
		},
		{
			status: "INFO",
			content:
				"2021-12-28 15:43:39,624 [1 ] oft.EntityFrameworkCore.Model.Validation - No type was specified for the decimal property &#39;DailyPrice&#39; on entity type &#39;SubscribableEdition&#39;. This will cause values to be silently truncated if they do not fit in the default precision and scale. Explicitly specify the SQL server column type that can accommodate all the values in &#39;OnModelCreating&#39; using &#39;HasColumnType()&#39;, specify precision and scale using &#39;HasPrecision()&#39; or configure a value converter using &#39;HasConversion()&#39;.",
		},
		{
			status: "ERROR",
			content:
				"2022-06-20 20:56:34,313 [4 ] Microsoft.AspNetCore.Hosting.Diagnostics - Request starting HTTP/2 GET https://localhost:44301/AbpUserConfiguration/GetAll?d=1655738793955 application/json -;. This will cause values to be silently truncated if they do not fit in the default precision and scale. Explicitly specify the SQL server column type that can accommodate all the values in &#39;OnModelCreating&#39; using &#39;HasColumnType()&#39;, specify precision and scale using &#39;HasPrecision()&#39; or configure a value converter using &#39;HasConversion()&#39;.",
		},
	];

	const onchangetabs = (activeNavTabId: any) => {
		setActiveNavTabId(activeNavTabId);
		setWebsiteLog(false);
		if (activeNavTabId == "nav-cache") {
			setTabcache(true);
			setWebsiteLog(false);
		} else {
			setTabcache(false);
			setWebsiteLog(true);
		}
	};
	const Delete = () => {};
	const refreshData = () => {};
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
									icon="delete"
									iconColorVariant="light"
									iconHeight="15px"
									iconWidth="15px"
									iconFill={false}
									iconStroke={true}
						
								></RdsButton>
								<RdsCompAlertPopup id="modal"></RdsCompAlertPopup>
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
									iconHeight="15px"
									iconWidth="15px"
									iconFill={false}
									iconStroke={true}
									iconColorVariant="light"
									onClick={refreshData}
								></RdsButton>
								<RdsButton
									type={"button"}
									label="DOWNLOAD ALL"
									outlineButton={true}
									colorVariant="primary"
									tooltipPlacement="top"
									size="small"
									icon="download"
									iconHeight="15px"
									iconWidth="15px"
									iconFill={false}
									iconStroke={true}
									iconColorVariant="primary"
								></RdsButton>
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
							activeNavTabId={activeNavTabId}
							activeNavtabOrder={onchangetabs}
							// (activeNavTabId) => {
							// 	setActiveNavTabId(activeNavTabId), setWebsiteLog(false);
							// }
							// activeNavtabOrder={onchangetabs}
						></RdsNavtabs>
						{/* <rds-nav-tab [navtabsItems]="getNavTabItems()" horizontalAlignment="start" [verticalAlignment]="false"
								[pills]="false" [tabs]="true" [fill]="false" [justified]="false" [flex]="false"
								(onClicktab)="getnavtabid($event)">
							</rds-nav-tab> */}
						<div className="tab-content py-4" id="headerbar">
							{activeNavTabId == "nav-cache" && (
								<div
									className=" fade active show"
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
								</div>
							)}
							{activeNavTabId == "nav-websiteLogs" && (

								<RdsCompWebsiteLog
									websiteLogData={websiteLogData}
									pagination={true}
									alignmentType="end"
									recordsPerPage={5}
									totalRecords={10}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Maintainance;
