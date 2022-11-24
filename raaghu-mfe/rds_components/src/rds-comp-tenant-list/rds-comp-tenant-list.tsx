// import {
// 	RdsButton,
// 	RdsIcon,
// 	RdsFabMenu,
// 	RdsOffcanvas,
// 	RdsNavtabs,
// } from "../rds-elements";
// import RdsCompDataTable from "../rds-comp-data-table/rds-comp-data-table";
// import RdsCompTenantInformation from "../rds-comp-tenant-information/rds-comp-tenant-information";
// import RdsCompTenantSettings from "../rds-comp-tenant-settings/rds-comp-tenant-settings";
// import RdsCompPermissionTree from "../rds-comp-permission-tree/rds-comp-permission-tree";
// import { useState } from "react";
// import React from "react";

// export interface RdsCompTenatListProps {
// 	tenantHeaders: {
// 		displayName: string;
// 		key: string;
// 		datatype: string;
// 		dataLength?: number;
// 		required?: boolean;
// 		sortable?: boolean;
// 		filterable?: boolean;
// 		colWidth?: string;
// 		disabled?: boolean;
// 	}[];
// 	tenantData?: any;
// 	tenantSettingInfo?: any;
// 	tenantList?: any[];
// 	editionList: any[];
// 	tenantFeatures: any[];
// 	tenantFeatureValues?: any[];
// 	deleteEvent: React.EventHandler<any>;
// 	onEditTenant: React.EventHandler<any>;
// 	onSaveFeatures: React.EventHandler<any>;
// }

// const RdsCompTenantList = (props: RdsCompTenatListProps) => {
// 	const [viewCanvas, setViewCanvas] = useState(false);
// 	const [showEmailList, setshowEmailList] = useState(false);
// 	const [showEditData, setshowEditData] = useState(false);
// 	const [isTenantInfoValid, setisTenantInfoValid] = useState(false);
// 	const [canvasTitle, setCanvasTitle] = useState("");
// 	const [activpage, setactivpage] = useState(0);
// 	const [selectedId, setselectedId] = useState("");
// 	let bootstrap: any;
// 	const [tenant, setTenant] = useState({
// 		tenantInfo: undefined,
// 		tenantSettings: undefined,
// 		featureList: [],
// 	});
// 	const [navtabsItems, setnavtabsItems] = useState([
// 		{ label: "", tablink: "", ariacontrols: "" },
// 	]);
// 	const [PaneShowOrder, setPaneShowOrder] = useState(0);
// 	let selectedFeatureList: any = [];

// 	const getSelectedFeaturesList = (event: any): void => {
// 		selectedFeatureList = event;
// 	};

// 	const newTenant = (event: any, showEmail?: boolean) => {
// 		setViewCanvas(true);
// 		setshowEmailList(showEmail ? true : false);
// 		setshowEditData(showEmail ? true : false);
// 		if (showEmail) {
// 			setTenant({
// 				tenantInfo: undefined,
// 				tenantSettings: undefined,
// 				featureList: [],
// 			});
// 			props.tenantData = undefined;
// 			props.tenantSettingInfo = undefined;
// 			const eventdata: any = {
// 				newtenant: true,
// 				reset: true,
// 			};
// 		}
// 		if (event) {
// 			setCanvasTitle("NEW TENANT");
// 			props.tenantData = undefined;
// 			props.tenantSettingInfo = undefined;

// 			setnavtabsItems([
// 				{
// 					label: "Tenant Information",
// 					tablink: "#tenant-information",
// 					ariacontrols: "tenant-information",
// 				},
// 				{
// 					label: "Settings",
// 					tablink: "#settings",
// 					ariacontrols: "settings",
// 				},
// 			]);
// 		} else {
// 			setnavtabsItems([
// 				{
// 					label: "Tenant Information",
// 					tablink: "#tenant-information",
// 					ariacontrols: "tenant-information",
// 				},
// 				{
// 					label: "Settings",
// 					tablink: "#settings",
// 					ariacontrols: "settings",
// 				},
// 				{
// 					label: "Features",
// 					tablink: "#features",
// 					ariacontrols: "features",
// 				},
// 			]);
// 		}

// 		setTimeout(() => {
// 			var offcanvas = document.getElementById("tenantOffCanvas");
// 			var bsOffCanvas = new bootstrap.Offcanvas(offcanvas);
// 			bsOffCanvas.show();
// 		}, 100);
// 		setactivpage(0);
// 	};

// 	const getTenantData = (event: any) => {
// 		if (event.next) {
// 			setactivpage(1);
// 		}
// 		setTenant({
// 			tenantInfo: event.tenant,
// 			tenantSettings: undefined,
// 			featureList: [],
// 		});
// 		if (!event || !event.tenant) {
// 			setisTenantInfoValid(false);
// 		} else {
// 			setisTenantInfoValid(true);
// 		}
// 	};
// 	const NavPaneHandler = (order: number) => {
// 		setPaneShowOrder(order);
// 		return order;
// 	};

// 	const editTableRowData = (event: any): void => {
// 		setCanvasTitle("EDIT TENANT");
// 		newTenant(undefined);
// 		props.onEditTenant(event.id);
// 		setselectedId(event.id);
// 	};

// 	const onActionSelect = (event: any): void => {
// 		if (event.actionId === "delete") {
// 			props.deleteEvent(event.selectedData);
// 		} else if (event.actionId === "edit") {
// 			editTableRowData(event.selectedData);
// 		}
// 	};

// 	const onselect = () => {};

// 	const close = () => {
// 		setViewCanvas(false);
// 		setTenant({
// 			tenantInfo: undefined,
// 			tenantSettings: undefined,
// 			featureList: [],
// 		});
// 		props.tenantData = undefined;
// 		props.tenantSettingInfo = undefined;
// 	};

// 	const onSelectMenu = (event: any) => {
// 		if (event.key === "new") {
// 			newTenant(event);
// 		}
// 	};

// 	const save = (): void => {
// 		if (!selectedFeatureList || selectedFeatureList.length === 0) {
// 			return;
// 		}
// 		const data = {
// 			id: selectedId,
// 			featureValues: selectedFeatureList,
// 		};
// 		props.onSaveFeatures(data);
// 		setactivpage(0);
// 		var offcanvas = document.getElementById("tenantOffcanvas");
// 		var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
// 		bsOffcanvas.hide();
// 		setViewCanvas(false);
// 	};

// 	return (
// 		<div>
// 			<div>
// 				<div className="row">
// 					<div className="col-md-12 text-end pb-3 desktop-btn">
// 						<RdsButton
// 							label="New Tenant"
// 							icon=""
// 							databstarget="#offcanvasRight"
// 							databstoggle="offcanvas"
// 							ariacontrols="offcanvasRight"
// 							size="small"
// 							colorVariant="primary"
// 							onClick={newTenant}
// 							tooltipTitle={""}
// 							type={"button"}
// 						>
// 							<RdsIcon height="12px" width="12px" name={"plus"}></RdsIcon>
// 						</RdsButton>
// 					</div>
// 					<div className="col-md-12">
// 						<div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">
// 							<RdsCompDataTable
// 								tableHeaders={props.tenantHeaders}
// 								onActionSelection={onActionSelect}
// 								recordsPerPage={10}
// 								actions={[
// 									{ id: "loginAsTenant", displayName: "Login as Tenant" },
// 									{ id: "edit", displayName: "Edit" },
// 									{ id: "delete", displayName: "Delete" },
// 								]}
// 								pagination={true}
// 								tableData={props.tenantList?props.tenantList:[{}]}
// 								onSortSelection={onselect}
// 							></RdsCompDataTable>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="mobile-btn position-absolute bottom-0 end-0 my-5 me-5">
// 					<RdsFabMenu
// 						onClick={onSelectMenu}
// 						listItems={[
// 							{
// 								value: "New Tenant",
// 								some: "value",
// 								key: "new",
// 								icon: "plus",
// 								iconWidth: "20px",
// 								iconHeight: "20px",
// 							},
// 						]}
// 						colorVariant="primary"
// 						menuiconHeight="12px"
// 						menuiconWidth="12px"
// 						menuIcon="plus"
// 					></RdsFabMenu>
// 				</div>
// 			</div>
// 			{viewCanvas && (
// 				<RdsOffcanvas canvasTitle={canvasTitle} width="650px" placement="end">
// 					<RdsNavtabs
// 						activeNavtabOrder={NavPaneHandler}
// 						navtabsItems={[
// 							{
// 								label: "Tenant Information",
// 								tablink: "#tenant-information",
// 								ariacontrols: "tenant-information",
// 							},
// 							{ label: "Settings" },
// 						]}
// 					>
// 						<div className="row tab-content m-2" id="nav-tabContent">
// 							<div
// 								className={
// 									PaneShowOrder === 0
// 										? "tab-pane fade show active"
// 										: "tab-pane fade"
// 								}
// 								id="tenant-information"
// 								role="tabpanel"
// 								aria-labelledby="nav-home-tab"
// 							>
// 								<RdsCompTenantInformation
// 									onCancel={close}
// 									tenantInfo={getTenantData}
// 									editionList={[{ option: "sdfg" }]}
// 									tenantData={props.tenantData}
// 									showEmail={showEmailList}
// 								></RdsCompTenantInformation>
// 							</div>
// 							<div
// 								className={
// 									PaneShowOrder === 1
// 										? "tab-pane fade show active"
// 										: "tab-pane fade"
// 								}
// 								id="settings"
// 								role="tabpanel"
// 								aria-labelledby="nav-home-tab"
// 							>
// 								<RdsCompTenantSettings
// 									onCancel={close}
// 									passwordValidation={showEmailList}
// 									showEditData={showEditData}
// 									isTenantInfoValid={isTenantInfoValid}
// 									tenantSettingInfo={props.tenantSettingInfo}
// 								></RdsCompTenantSettings>
// 							</div>
// 							<div
// 								className="tab-pane fade"
// 								id="features"
// 								role="tabpanel"
// 								aria-labelledby="nav-home-tab"
// 							>
// 								<div className="tab-content features py-4">
// 									<RdsCompPermissionTree
// 										getAllselectedPermissions={getSelectedFeaturesList}
// 										selectedItems={props.tenantFeatureValues}
// 										selectAllLabel="Select Features"
// 										treeData={props.tenantFeatures}
// 									></RdsCompPermissionTree>
// 								</div>
// 								<div className="footer-buttons">
// 									<div className="col-md-12 ">
// 										<RdsButton
// 											label="Cancel"
// 											size="small"
// 											colorVariant="outline-primary"
// 											tooltipTitle={""}
// 											onClick={close}
// 											type={"button"}
// 										></RdsButton>
// 										<RdsButton
// 											label="Save"
// 											size="small"
// 											colorVariant="primary"
// 											class="ms-2"
// 											onClick={save}
// 											tooltipTitle={""}
// 											type={"button"}
// 										></RdsButton>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</RdsNavtabs>
// 				</RdsOffcanvas>
// 			)}
// 		</div>
// 	);
// };

// export default RdsCompTenantList;
































































import { MouseEvent } from 'react';
import RdsCompDatatable from '../rds-comp-data-table/rds-comp-data-table'
export interface RdsCompEditionListProps {
    enablecheckboxselection?: boolean;
    tableHeaders: {
        displayName: string,
        key: string,
        datatype: string,
        dataLength?: number,
        required?: boolean,
        sortable?: boolean,
        colWidth?: string,
        disabled?: boolean
        isEndUserEditing?: boolean
    }[];
    actions: {
        displayName: string,
        id: string
    }[];
    tableData: any[];
    pagination: boolean;
    recordsPerPage?: number;
    recordsPerPageSelectListOption?: boolean
    onActionSelection(arg: any): void
    onSortSelection(arg: { sortClickEvent: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>; sortOrder: string; }): void;
    onNewTenantClick(event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void
}
const RdsCompEditionList = (props: RdsCompEditionListProps) => {
    return (
        <div className='row'>

            <div className="col-md-12 text-end pb-3 desktop-btn">

                

            </div>
            <div className="col-md-12 pb-3 desktop-btn">
                <RdsCompDatatable
                    tableHeaders={props.tableHeaders}
                    actions={props.actions}
                    tableData={props.tableData}
                    pagination={props.pagination}
                    recordsPerPage={props.recordsPerPage}
                    onActionSelection={props.onActionSelection}
                    onSortSelection={props.onSortSelection}
                    recordsPerPageSelectListOption={props.recordsPerPageSelectListOption}
                ></RdsCompDatatable>
            </div>
        </div >

    );
};
export default RdsCompEditionList;