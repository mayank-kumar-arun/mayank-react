import { DatasetController } from "chart.js";
import { MouseEvent, useState, useEffect } from "react";
import {
  RdsIcon,
  RdsCheckbox,
  RdsInput,
  RdsButton,
  RdsPagination,
  RdsAvatar,
} from "../rds-elements";
import "./rds-comp-data-table.scss";
import RdsCompAlertPopup from "../rds-comp-alert-popup/rds-comp-alert-popup";

export interface RdsCompDatatableProps {
  enablecheckboxselection?: boolean;
  classes?: string;
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
  actions?: {
    displayName: string;
    id: string;
  }[];
  tableData: any[];
  pagination: boolean;
  recordsPerPage?: number;
  recordsPerPageSelectListOption?: boolean;
  onActionSelection: (
    clickEvent: any,
    tableDataRow: any,
    tableDataRowIndex: number,
    action: { displayName: string; id: string }
  ) => void;

  // onSortSelection(arg: {
  // 	sortClickEvent: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>;
  // 	sortOrder: string;
  // }): void;
}
const RdsCompDatatable = (props: RdsCompDatatableProps) => {
  const [data, setData] = useState(props.tableData);
  const [action, setAction] = useState("");
  const [rowStatus, setRowStatus] = useState({
    startingRow: 0,
    endingRow: props.recordsPerPage,
  });
  let sort: boolean;
  useEffect(() => {
    if (!sort) {
      setData(props.tableData);
    }
  }, [props.tableData]);

  const onPageChangeHandler = (currentPage: number, recordsPerPage: number) => {
    setRowStatus({
      startingRow: (currentPage - 1) * recordsPerPage, //0-index
      endingRow: currentPage * recordsPerPage, //considering that 1st element has '0' index
    });
  };
  const actionOnClickHandler = (
    clickEvent: any,
    tableDataRow: any,
    tableDataRowIndex: number,
    action: { displayName: string; id: string }
  ) => {
    if (action.id == "edit") {
      let tempData = data.map((Data) => {
        if (Data.id == tableDataRowIndex) {
          return { ...Data, isEndUserEditing: true };
        } else {
          return { ...Data };
        }
      });
      setData(tempData);
    } else {
      console.log("action.id ", action.id);
      setAction("delete");
    }

    // props.onActionSelection(
    //   clickEvent,
    //   tableDataRow,
    //   tableDataRowIndex,
    //   action,)
  };

  let tempData: any;
  const onInputChangeHandler = (
    e: any,
    tableDataRow: any,
    tableHeader: any,
    key: any,
    tableDataRowIndex: number
  ) => {
    tempData = data.map((Data) => {
      if (Data.id == tableDataRowIndex) {
        const obj = Object.assign({}, Data);
        obj[key] = e.target.value;
        return obj;
      } else {
        return { ...Data };
      }
    });
  };
  const onEditCheck = (
    clickEvent: any,
    tableDataRow: any,
    tableDataRowIndex: number
  ) => {
    let tempata = tempData.map((Data: any) => {
      if (Data.id == tableDataRowIndex) {
        return { ...Data, isEndUserEditing: false };
      } else {
        return { ...Data };
      }
    });
    setData(tempata);
  };
  const onEditClose = (
    clickEvent: any,
    tableDataRow: any,
    tableDataRowIndex: number
  ) => {
    let tempData = data.map((Data) => {
      if (Data.id == tableDataRowIndex) {
        return { ...Data, isEndUserEditing: false };
      } else {
        return { ...Data };
      }
    });
    setData(tempData);
  };

  const handleChange = (e: any) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = data.map((user) => {
        return { ...user, selected: checked };
      });
      setData(tempUser);
    } else {
      let tempUser = data.map((user) =>
        user.id == name ? { ...user, selected: checked } : user
      );
      setData(tempUser);
    }
  };

  const onSortClickHandler = (
    event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>,
    sortOrder: string,
    col: string
  ) => {
    const sorted = [...data].sort((a, b) => {
      if (a[col] === undefined) return 1;
      if (b[col] === undefined) return -1;
      if (a[col] === undefined && b[col] === undefined) return 0;
      return (
        a[col].toString().localeCompare(b[col].toString(), "en", {
          numeric: true,
        }) * (sortOrder === "ascending" ? 1 : -1)
      );
    });
    setData(sorted);
    sort = true;
  };
  let Classes = props.classes || " table-hover table-bordered";

  return (
    <>
      <div className="RdsCompDataTable sm-datatable table-responsive">
        <table
          className={`table h-100 ${Classes}`}
          id="sortTable"
          width="400px"
        >
          <thead>
            <tr>
              {props.enablecheckboxselection && (
                <th scope="col" className="checkbox-Style-class">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="allSelect"
                    checked={
                      data.filter((user) => user?.selected == true).length ==
                      data.length
                    }
                    onChange={handleChange}
                  />
                </th>
              )}
              {props.tableHeaders.map((tableHeader, index) => (
                <th key={"tableHeader-" + index}>
                  <span>{tableHeader.displayName}</span>
                  {tableHeader.sortable && (
                    <span className="px-2">
                      <span
                        className="btn btn-sm px-0"
                        onClick={(e) =>
                          onSortClickHandler(e, "ascending", tableHeader.key)
                        }
                      >
                        <RdsIcon
                          name={"up"}
                          height="12px"
                          width="12px"
                          stroke={true}
                        />
                      </span>
                      <span
                        className="btn btn-sm px-0"
                        onClick={(e) =>
                          onSortClickHandler(e, "descending", tableHeader.key)
                        }
                      >
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
            </tr>
          </thead>
          <tbody>
            {data.map(
              (tableDataRow, index) =>
                (props.pagination
                  ? typeof rowStatus.endingRow != "undefined" &&
                    index >= rowStatus.startingRow &&
                    index < rowStatus.endingRow
                  : true) && (
                  <tr key={"tableRow-" + index}>
                    {props.enablecheckboxselection && (
                      <th scope="row" className="checkbox-Style-class">
                        <input
                          type="checkbox"
                          name={tableDataRow.id}
                          onChange={handleChange}
                          checked={tableDataRow.selected}
                          className="form-check-input"
                          id="rowcheck{user.id}"
                        />
                      </th>
                    )}
                    {props.tableHeaders.map((tableHeader, tableHeaderIndex) => (
                      <td
                        key={
                          "column-" +
                          tableHeaderIndex +
                          "-inside-tableRow" +
                          index
                        }
                      >
                        {!tableDataRow.isEndUserEditing ? (
                          <div>
                            {tableHeader.datatype === "text" &&
                              tableDataRow[tableHeader.key]}
                            {tableHeader.datatype === "number" &&
                              tableDataRow[tableHeader.key]}
                            {tableHeader.datatype === "badge" && (
                              <span
                                className={
                                  "badge text-bg-" +
                                  (tableDataRow[tableHeader.key]
                                    .badgeColorVariant
                                    ? tableDataRow[tableHeader.key]
                                        .badgeColorVariant
                                    : "primary")
                                }
                              >
                                {tableDataRow[tableHeader.key].content
                                  ? tableDataRow[tableHeader.key].content
                                  : tableDataRow[tableHeader.key]}
                              </span>
                            )}
                            {tableHeader.datatype === "avatarTitleInfo" && (
                              <div className="avatarTitleInfo">
                                <RdsAvatar
                                  withProfilePic={true}
                                  profilePic={
                                    tableDataRow[tableHeader.key].avatar
                                  }
                                  isTitle={true}
                                  firstName={
                                    tableDataRow[tableHeader.key].title
                                      ? tableDataRow[tableHeader.key].title
                                      : tableDataRow[tableHeader.key]
                                  }
                                  role={tableDataRow[tableHeader.key].info}
                                />
                              </div>
                            )}
                            {tableHeader.datatype === "iconAvatarTitle" && (
                              <div className="iconAvatarTitle ">
                                <div className="col-1 me-2">
                                  <RdsIcon
                                    name={
                                      tableDataRow[tableHeader.key].iconName
                                    }
                                    fill={
                                      tableDataRow[tableHeader.key].iconFill
                                    }
                                    stroke={
                                      tableDataRow[tableHeader.key].iconStroke
                                    }
                                    colorVariant={
                                      tableDataRow[tableHeader.key].iconColor
                                    }
                                    width={
                                      tableDataRow[tableHeader.key].iconWidth
                                    }
                                    height={
                                      tableDataRow[tableHeader.key].iconHeight
                                    }
                                  />
                                </div>
                                {tableDataRow[tableHeader.key].withavatar && (
                                  <div>
                                    <div className="col-5">
                                      <RdsAvatar
                                        withProfilePic={true}
                                        profilePic={
                                          tableDataRow[tableHeader.key].avatar
                                        }
                                        isTitle={false}
                                      />
                                    </div>
                                    <div className="col-6">
                                      <label>
                                        {tableDataRow[tableHeader.key].title}{" "}
                                      </label>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                            {tableHeader.datatype === "children" && (
                              <div>
                                {" "}
                                {tableDataRow[tableHeader.key].children}
                              </div>
                            )}
                            {/* add more types here if reequired */}
                          </div>
                        ) : (
                          <RdsInput
                            inputType={tableHeader.datatype}
                            value={tableDataRow[tableHeader.key]}
                            onChange={(e) => {
                              onInputChangeHandler(
                                e,
                                tableDataRow,
                                tableHeader,
                                tableHeader.key,
                                tableDataRow.id
                              );
                            }}
                          />
                        )}
                      </td>
                    ))}
                    {props.actions && props.actions.length > 0 && (
                      <td className="align-middle text-center">
                        {!tableDataRow.isEndUserEditing ? (
                          <>
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
                                          tableDataRow.id,
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
                          </>
                        ) : (
                          <div className="d-flex">
                            <RdsButton
                              class="action"
                              colorVariant="primary"
                              size="medium"
                              tooltipTitle={""}
                              type={"button"}
                              onClick={(e) => {
                                onEditCheck(e, tableDataRow, tableDataRow.id);
                              }}
                            >
                              <RdsIcon
                                name={"check"}
                                height="14px"
                                width="14px"
                                stroke={true}
                                fill={false}
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
                              onClick={(e) => {
                                onEditClose(e, tableDataRow, tableDataRow.id);
                              }}
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
        </table>
      </div>

      {props.pagination && (
        <div className="RdsCompDataTable__RdsPagination d-flex justify-content-end ">
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

/*<div
                  className="icon"
                 >
                >
                  <RdsCompAlertPopup
                    id={element.id}
                    ondelete={() => deleteHandler(element.id)}
                    alertbutton={
                      <RdsIcon
                        width="17px"
                        height="17px"
                        name="delete"
                        stroke={true}
                      ></RdsIcon>
                    }
                   }
                  ></RdsCompAlertPopup>
              
                  </div>
                  */

/*<div *ngIf="!isShimmer">
  <ng-container *ngIf="tableData && tableData.length > 0; else emptyTemplate">
    <div class="sm-datatable table-responsive">
      <table class="table table-hover table-bordered h-100" id="sortTable" [class]="classes"
        [ngStyle]="{'width': width}">
        <thead>
          <tr>
            <th *ngIf="enableCheckboxSelection">
              <rds-checkbox [checked]="isAllCheckBoxChecked()" (change)="checkAllCheckBox($event)"></rds-checkbox>
            </th>
            <ng-container *ngFor="let header of tableHeaders;let i=index">
              <th scope="col" [class.sortable]="header.sortable" [ngStyle]="{'width': header.colWidth}">
                <div class="header d-flex">
                  <span>{{translate.instant(header.displayName)}}</span>
                  <div class="header-options mobile-header-option cursor-pointer ps-1">
                    <span (click)="sortByColumn(header)" class="text-right sort-icons mobile-sort"
                      *ngIf="header.sortable">
                      <rds-icon [name]="'up'" [width]="'12px'" [height]="'12px'"
                        [ngClass]="getDescIconClass(header)"></rds-icon>
                      <rds-icon [name]="'down'" [width]="'12px'" [height]="'12px'"
                        [ngClass]="getAscIconClass(header)"></rds-icon>
                    </span>
                    <div class="btn-group dropend">
                      <span class="text-right sort-icons sortable" [id]="'search-dropdown'+i+id" (click)="openSearchModal(i)"
                        *ngIf="header.filterable" data-bs-toggle="dropdown" aria-expanded="false">
                        <rds-icon [name]="'filter'" [height]="'12px'" [width]="'12px'">
                        </rds-icon>
                      </span>
                      <ul class="dropdown-menu searchModal p-1 border-0" [attr.aria-labelledby]="'search-dropdown'+i+id">
                        <div>
                          <div>
                            <rds-input [placeholder]="translate.instant('Search here')+' ...'"
                              [inputType]="header.dataType" [icon]="'search'" [name]="header.key" [size]="'small'"
                              [(ngModel)]="header[header.key+'Filter']" ngDefaultControl
                              (keyup)="onKeyup($event,header)"></rds-input>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </th>
            </ng-container>
            <th *ngIf="tableHeaders&&tableHeaders.length>0&&actions&&actions.length>0" class="text-center">
              {{translate.instant("Actions")}}
            </th>
          </tr>
        </thead>
        <tbody *ngIf="tableData&&tableData.length>0">
          <tr *ngFor="let data of dataSource; let i=index" (click)="onSelectData(data)">
            <td *ngIf="enableCheckboxSelection">
              <rds-checkbox [checked]="data.checked" (change)="changeCheckbox(data,$event)"></rds-checkbox>
            </td>
            <ng-container *ngFor="let column of tableHeaders">
              <ng-container *ngIf="column.dataType.toLowerCase()==='html'&&!data.isEdit; else iconTemplate">
                <td [innerHTML]="data[column.key]" class="align-middle"></td>
              </ng-container>

              <ng-template #iconTemplate>
                <ng-container *ngIf="column.dataType.toLowerCase()==='icon'&&!data.isEdit; else nonTemplateData">
                  <td>
                    <rds-icon [name]="data[column.key].icon" [width]="data[column.key].width"
                      [colorVariant]="data[column.key].colorVariant" [height]="data[column.key].height"></rds-icon>
                  </td>
                </ng-container>
              </ng-template>

              <ng-template #nonTemplateData>
                <td class="align-middle" >
                  <ng-container *ngIf="!data.isEdit; else editTemplate">
                    {{data[column.key]}}
                  </ng-container>
                  <ng-template #editTemplate>
                    <ng-container [ngSwitch]="column.dataType.toLowerCase()">
                      <ng-container *ngSwitchCase="'number'">
                        <rds-input [(ngModel)]="data[column.key]" #numberField="ngModel" [disabled]="column.disabled"
                          [value]="data[column.key]" [inputType]="'number'" ngDefaultControl>
                        </rds-input>
                        <small class="error"
                          *ngIf="(numberField.dirty || numberField.touched)&&column.required&&(data[column.key]===''||data[column.key]===undefined)">
                          {{translate.instant(column.displayName)}} {{translate.instant('is required')}}</small>
                      </ng-container>
                      <ng-container *ngSwitchCase="'text'">
                        <rds-input required [(ngModel)]="data[column.key]" [value]="data[column.key]"
                          [disabled]="column.disabled" [placeholder]=column.displayName #textField="ngModel"
                          [inputType]="'text'" ngDefaultControl></rds-input>
                        <small class="error"
                          *ngIf="(textField.dirty || textField.touched)&&column.required&&(data[column.key]===''||!data[column.key])">
                          {{translate.instant(column.displayName)}} {{translate.instant('is required')}}</small>

                      </ng-container>
                      <ng-container *ngSwitchCase="'html'">
                        <rds-input required [(ngModel)]="data[column.key]" [value]="data[column.key]"
                          [disabled]="column.disabled" [inputType]="'text'" ngDefaultControl>
                        </rds-input>
                        <small class="error" *ngIf="column.required&&(data[column.key]===''||!data[column.key])">
                          {{translate.instant(column.displayName)}} {{translate.instant('is required')}}</small>

                      </ng-container>
                    </ng-container>
                  </ng-template>
                </td>
              </ng-template>
            </ng-container>
            <td *ngIf="actions.length>0" class="align-middle text-center">
              <!-- <div class="d-flex align-items-center"> -->
                <div class="dropdown" *ngIf="!data.isEdit; else editActionTemplate">
                  <rds-button [colorVariant]="'default'" [submit]="false" [block]="false" [size]="'small'" 
                    [isIconFill]="true" [isIconStroke]="false" [isDisabled]="false" [isOutline]="true"
                    [isFabIcon]="true" icon="three_dots" [iconHeight]="'16px'" [iconWidth]="'16px'"
                     tooltipTitle="" tooltipPlacement="bottom" (click)="openAction(i)"
                    [attr.id]="'action-dropdown'+i+id" data-bs-toggle="dropdown" aria-expanded="false"></rds-button>
                  <div class="dropdown-menu" [attr.aria-labelledby]="'action-dropdown'+i+id">
                    <ng-container *ngFor="let action of actions">
                      <li>
                        <a class="dropdown-item" [attr.aria-label]="'Update'+action.displayName+data?.name"
                           (click)="onActionSelect(action,data)">{{translate.instant(action.displayName)}}</a>
                      </li>
                    </ng-container>
                  </div>
                </div>
                <ng-container *ngIf="showConfirmationPopup">
                  <rds-comp-alert-popup [alertID]="'deleteModal'" (onCancel)="close()" (onDelete)="delete()"
                    [alertData]="alertData">
                  </rds-comp-alert-popup>
                </ng-container>
                <ng-template #editActionTemplate>
                  <div class="d-flex">
                    <rds-button class="action" [colorVariant]="'primary'" [isFabIcon]="true" [size]="'medium'"
                    [icon]="'check'" [iconHeight]="'13px'" [iconWidth]="'20px'" (click)="saveChanges(data)">
                  </rds-button>

                  <rds-button class="ms-2 text-white" (click)="closeEdit(data)" [isFabIcon]="true" [tooltipPlacement]="'top'"
                    [colorVariant]="'danger'" [size]="'medium'" [icon]="'close'" [iconHeight]="'10px'"
                    [iconWidth]="'15px'">
                  </rds-button>
                  </div>
              </ng-template>
              <!-- </div> -->
            </td>

          </tr>
        </tbody>
      </table>
    </div>
    <ng-container *ngIf="pagination&&tableData">
      <rds-pagination (onPageChange)="onPagination($event)" [recordsPerPage]="+recordsPerPage"
        [totalRecords]="getTotalRecords()" [alignmentType]="alignmentType" [role]="role"></rds-pagination>
    </ng-container>
  </ng-container>
</div>
<ng-template #emptyTemplate>
  <div class="my-5 py-5 d-flex align-items-center justify-content-center">
    <div class="text-center">
      <div class="mb-3">
        <rds-icon name="file_plus" height="100px" width="100px"></rds-icon>
      </div>
      <div>
        <!-- <h5> {{noDataTitle|translate}} </h5> -->
        <h5><rds-label [label]="translate.instant(noDataTitle)"></rds-label></h5>
        <div *ngIf="showNodataSubtitle">
          <small class="text-muted">
            {{noDataSubTitle|translate}}
          </small>
        </div>
      </div>
    </div>
  </div>
</ng-template>*/
