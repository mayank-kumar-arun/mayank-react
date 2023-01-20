import React from "react";
import { RdsButton, RdsOffcanvas } from "../../../rds-elements";
import { RdsCompDatatable  , RdsCompNewLanguage} from "../../../rds-components";

export interface LanguageProps {
	languagetableHeaders: any;
	languagetableData: any;
	actions?: any;
	onActionSelection?(arg: any): void;
}

const Language = (props: LanguageProps) => {
	console.log("language data : ", props.languagetableData);
	console.log("language data headers : ", props.languagetableHeaders);
	
	

	return (
		<>
			<div className="row">
				<div className="col-md-9">
					{/* <ng-container *ngIf="currentAlerts&&currentAlerts.length>0">
					<rds-comp-alert [currentAlerts]="currentAlerts" (onAlertHide)="onAlertHide($event)">
					</rds-comp-alert>
				</ng-container> */}
				</div>
				<div className=" col-md-3  pb-3 d-flex justify-content-end">
					<RdsOffcanvas
						offcanvasbutton={
							<RdsButton
								type={"button"}
								label="New Language"
								iconColorVariant="light"
								size="small"
								colorVariant="primary"
								icon="plus"
								iconFill={false}
								iconStroke={true}
								iconHeight="12px"
								iconWidth="12px"
							></RdsButton>
						}
						placement={"end"}
						backDrop={true}
						scrolling={false}
						preventEscapeKey={false}
						offId={"Language"}
						canvasTitle={"New Language"}
						offcanvaswidth={550}
					> <RdsCompNewLanguage></RdsCompNewLanguage></RdsOffcanvas>

					{/* <rds-button [label]="translate.instant('New Language')" type="button" [showLoadingSpinner]="showLoadingSpinner"
					style="float: right" [size]="'small'" [colorVariant]="'primary'" (click)="openCanvas()"
					[attr.aria-controls]="'AddLanguage'" [icon]="'plus'" [iconHeight]="'12px'" [iconWidth]="'12px'">
				</rds-button> */}
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">
						<div>
							<RdsCompDatatable
								classes="table__userTable"
								tableHeaders={props.languagetableHeaders}
								pagination={true}
								tableData={props.languagetableData}
								actions={props.actions}
								onActionSelection={props.onActionSelection!}
								recordsPerPage={5}
								recordsPerPageSelectListOption={true}
							></RdsCompDatatable>
							{/* <rds-comp-data-table [tableHeaders]="languageTableHeader" [tableStyle]="tableStyle"
          [tableData]="languageTableData" [recordsPerPage]="recordsPerpage" [width]="100"
          [pagination]="languageTableData.length>5?true:false" [inlineEdit]="false"
          noDataTitle='Currently you do not have language' [actions]="actions" [isShimmer]="isShimmer"
          (onActionSelection)="onActionSelection($event)">
        </rds-comp-data-table> */}
						</div>
					</div>
				</div>
			</div>
			<div className="mobile-btn position-absolute bottom-0 end-0 my-4 mx-5">
				{/* <rds-fab-menu [listItems]="listItems" [menuicon]="'plus'" [colorVariant]="'primary'" [menuiconWidth]="'12px'"
    [menuiconHeight]="'12px'" (onSelect)="onSelectMenu($event)"></rds-fab-menu> */}
			</div>
		</>
	);
};

export default Language;
