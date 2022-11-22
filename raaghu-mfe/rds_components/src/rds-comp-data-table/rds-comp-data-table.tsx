import { MouseEvent, useState } from "react";
import {
	RdsIcon,
	RdsCheckbox,
	RdsButton,
	RdsPagination,
	RdsSelectList,
} from "../rds-elements";
export interface RdsCompDatatableProps {
	enablecheckboxselection?: boolean;
	tableHeaders: {
		displayName: string;
		key: string;
		datatype: string;
		dataLength?: number;
		required?: boolean;
		sortable?: boolean;
		colWidth?: string;
		disabled?: boolean;
		isEndUserEditing?: boolean;
	}[];
	actions: {
		displayName: string;
		id: string;
	}[];
	tableData: any[];
	pagination: boolean;
	recordsPerPage?: number;
	recordsPerPageSelectListOption?: boolean;
	onActionSelection(arg: any): any;
	onSortSelection(arg: {
		sortClickEvent: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>;
		sortOrder: string;
	}): void;
}
const RdsCompDatatable = (props: RdsCompDatatableProps) => {
	const [rowStatus, setRowStatus] = useState({
		startingRow: 0,
		endingRow: props.recordsPerPage,
	});
	const onPageChangeHandler = (currentPage: number, recordsPerPage: number) => {
		setRowStatus({
			startingRow: (currentPage - 1) * recordsPerPage, //0-index
			endingRow: currentPage * recordsPerPage, //considering that 1st element has '0' index
		});
	};
	const actionOnClickHandler = (
		clickEvent: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
		tableDataRow: any,
		tableDataRowIndex: number,
		action: { displayName: string; id: string }
	) => {
		props.onActionSelection({
			event: clickEvent,
			clickedRowTableData: tableDataRow,
			tableDataRowIndex: tableDataRowIndex,
			actionClicked: action,
		});
	};
	const onSortClickHandler = (
		event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>,
		sortOrder: string
	) => {
		props.onSortSelection({
			sortClickEvent: event,
			sortOrder: sortOrder,
		});
	};
	return (
		<>
			<div className="sm-datatable table-responsive">
				<table
					className="table table-hover table-bordered h-100"
					id="sortTable"
					width="400px"
				>
					<>
						<thead>
							<tr>
								<>
									{props.enablecheckboxselection && (
										<th>
											<RdsCheckbox label={""} checked={false}></RdsCheckbox>
										</th>
									)}
									{props.tableHeaders.map((tableHeader, index) => (
										<th key={"tableHeader-" + index}>
											<span>{tableHeader.displayName}</span>
											{tableHeader.sortable && (
												<span className="px-2">
													<span
														className="btn btn-sm px-0"
														onClick={(e) => onSortClickHandler(e, "ascending")}
													>
														<RdsIcon
															name={"up"}
															height="12px"
															width="12px"
															stroke={true}
														/>
													</span>
													<span className="btn btn-sm px-0">
														<RdsIcon
															name={"down"}
															height="12px"
															width="12px"
															stroke={true}
														/>
													</span>
												</span>
											)}
										</th>
									))}
									{props.tableHeaders &&
										props.tableHeaders.length > 0 &&
										props.actions &&
										props.actions.length > 0 && (
											<th className="text-center">Actions</th>
										)}
								</>
							</tr>
						</thead>
						<tbody>
							{props.tableData.map(
								(tableDataRow, index) =>
									(props.pagination
										? typeof rowStatus.endingRow != "undefined" &&
										  index >= rowStatus.startingRow &&
										  index < rowStatus.endingRow
										: true) && (
										<tr key={"tableRow-" + index}>
											{props.tableHeaders.map(
												(tableHeader, tableHeaderIndex) => (
													<td
														key={
															"column-" +
															tableHeaderIndex +
															"-inside-tableRow" +
															index
														}
													>
														{tableDataRow[tableHeader.key]}
													</td>
												)
											)}
											{props.actions.length > 0 && (
												<td className="align-middle text-center">
													{!tableDataRow.isEndUserEditing ? (
														<div className="dropdown">
															<button
																className="btn"
																type="button"
																data-bs-toggle="dropdown"
																aria-expanded="false"
															>
																<RdsIcon
																	name={"three_dots"}
																	height="14px"
																	width="14px"
																	stroke={true}
																	fill={true}
																	class="bi bi-three-dots-vertical"
																/>
															</button>
															<ul className="dropdown-menu RdsCompDataTable__Actions__Ul">
																{props.actions.map((action, actionIndex) => (
																	<li
																		key={
																			"action-" +
																			actionIndex +
																			"-inside-tableRow" +
																			index
																		}
																	>
																		<a
																			onClick={(e) => {
																				actionOnClickHandler(
																					e,
																					tableDataRow,
																					index,
																					action
																				);
																			}}
																			className="dropdown-item"
																		>
																			{action.displayName}
																		</a>
																	</li>
																))}
															</ul>
														</div>
													) : (
														<div className="d-flex">
															<RdsButton
																class="action"
																colorVariant="primary"
																size="medium"
																tooltipTitle={""}
																type={"button"}
															>
																<RdsIcon
																	name={"check"}
																	height="14px"
																	width="14px"
																	stroke={true}
																	fill={true}
																	class="bi bi-check2"
																/>
															</RdsButton>
															<RdsButton
																class="ms-2 text-white"
																colorVariant="danger"
																tooltipPlacement="top"
																size="medium"
																tooltipTitle={""}
																type={"button"}
															>
																<RdsIcon
																	name={"close"}
																	height="14px"
																	width="14px"
																	stroke={true}
																	fill={true}
																	class="bi bi-close"
																/>
															</RdsButton>
														</div>
													)}
												</td>
											)}
										</tr>
									)
							)}
						</tbody>
					</>
				</table>
			</div>
			{props.pagination && (
				<div className="RdsCompDataTable__RdsPagination">
					<RdsPagination
						totalRecords={props.tableData.length}
						recordsPerPage={props.recordsPerPage ? props.recordsPerPage : 5}
						onPageChange={onPageChangeHandler}
						paginationType={
							props.recordsPerPageSelectListOption ? "advance" : "default"
						}
					></RdsPagination>
				</div>
			)}
		</>
	);
};
export default RdsCompDatatable;
