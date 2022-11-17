
import React, { Fragment, useEffect, useState } from "react";
import RdsIcon from "../rds-icon";
import "./rds-pagination.scss";
export interface RdsPaginationProps {
  totalRecords: number;
  recordsPerPage: any;
  paginationType?: string;
  alignmentType?: string;
  size?: string;
  onPageChange: (
    // event:
    //   | React.MouseEvent<HTMLAnchorElement>
    //   | React.ChangeEvent<HTMLSelectElement>,
    currentPage: number,
    recordsPerPage: number
  ) => void;
}
const RdsPagination = (props: RdsPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(props.recordsPerPage);

  let paginType = props.paginationType || "default";


  const setItemsPerPage = (e: any, current: any) => {
    // console.log("value - " + e.target.value);
    if (e.target.value > props.totalRecords || e.target.value == "All") {
      setRecordsPerPage(props.totalRecords);
      // console.log(" value > tr " + recordsPerPage);
    } else {
      setRecordsPerPage(e.target.value);
      //console.log(" value " + recordsPerPage);
    }
    // props.onPageChange(e, current, recordsPerPage);
  };

  const PageNumbers = [];
  let int: any;
  // console.log("records pp " + recordsPerPage);

  if (paginType == "default") {
    int = Math.ceil(props.totalRecords / props.recordsPerPage);
    for (let i = 1; i <= int; i++) {
      PageNumbers.push(i);
    }
  } else {
    int = Math.ceil(props.totalRecords / recordsPerPage);
    for (let i = 1; i <= int; i++) {
      PageNumbers.push(i);
    }
  }

  const onNext = (e: any, current: any) => {
    setCurrentPage(current + 1);
    // props.onPageChange(e, currentPage, recordsPerPage);
  };
  const onPage = (e: any, current: any) => {
    setCurrentPage(current);
    // props.onPageChange(e, current, recordsPerPage);
  };
  const onPrevious = (e: any, current: any) => {
    setCurrentPage(current - 1);
    // props.onPageChange(e, currentPage, recordsPerPage);
  };
  useEffect(() => { props.onPageChange(currentPage, recordsPerPage); }, [currentPage, recordsPerPage])


  const size = " pagination-" + `${props.size || "md"}`;
  const align =
    " pagination justify-content-" + `${props.alignmentType || "start"}`;

  return (
    <div>
      {paginType == "default" && (
        <nav aria-label="Page navigation example">
          <ul
            className={"pagination align-items-center" + `${size}` + `${align}`}
          >
            <li
              className={
                "m-1 page-item " + `${currentPage == 1 ? "disabled" : " "}`
              }
            >
              <a
                className="page-link b"
                // href="javascript:void(0);"
                onClick={
                  (e) => onPrevious(e, currentPage)
                  //console.log("currentPage -  " + currentPage);
                }
              >
                <RdsIcon
                  name="chevron_left"
                  width="15px"
                  height="15px"
                  fill={false}
                  stroke={true}
                  colorVariant="primary"
                />
                <span className="ms-1 pagination-prev">Prev</span>
              </a>
            </li>
            {PageNumbers.map((number) => (
              <li
                key={number}
                className={`${number === currentPage
                    ? "page-item m-1 default-li active"
                    : "page-item m-1 default-li "
                  }`}
              >
                <a
                  onClick={(e) => {
                    onPage(e, number);
                    // console.log("currentPage -  " + currentPage);
                  }}
                  className="page-link"
                // href="javascript:void(0);"
                >
                  {number}
                </a>
              </li>
            ))}
            <li
              className={
                "page-item m-1 " + `${currentPage == int ? "disabled" : " "}`
              }
            >
              <a
                className="page-link"
                ///href="javascript:void(0);"
                onClick={
                  (e) =>
                    // setCurrentPage(currentPage + 1);
                    onNext(e, currentPage)
                  //console.log("currentPage -  " + currentPage);
                }
              >
                <span className="pagination-next me-1">Next</span>
                <RdsIcon
                  name="chevron_right"
                  width="15px"
                  height="15px"
                  fill={false}
                  stroke={true}
                  colorVariant="primary"
                />
              </a>
            </li>
          </ul>
        </nav>
      )}
      {paginType == "advance" && (
        <nav aria-label="page navigation">
          <ul
            className={
              "pagination align-items-center " + `${size}` + `${align}`
            }
          >
            <li
              className={
                "m-1 page-item " + `${currentPage == 1 ? "disabled" : " "}`
              }
            >
              <a
                className="page-link rounds"
                //href="javascript:void(0);"
                onClick={
                  (e) => onPrevious(e, currentPage)
                  // setCurrentPage(currentPage - 1);
                  // props.onPageChange(e, currentPage, recordsPerPage);
                  // console.log("currentPage -  " + currentPage);
                }
              >
                <RdsIcon
                  name="chevron_left"
                  width="15px"
                  height="15px"
                  fill={false}
                  stroke={true}
                  colorVariant="primary"
                />
              </a>
            </li>
            {PageNumbers.map((number) => (
              <li
                key={number}
                className={`${number === currentPage
                    ? "page-item m-1 default-li active"
                    : "page-item m-1 default-li "
                  }`}
              >
                <a
                  onClick={
                    (e) => onPage(e, number)
                    // setCurrentPage(number);
                    // props.onPageChange(e, number, recordsPerPage);
                    //console.log("currentPage -  " + currentPage);
                  }
                  className="page-link roundeds"
                //href="javascript:void(0);"
                >
                  {number}
                </a>
              </li>
            ))}
            <li
              className={
                "page-item m-1 " + `${currentPage == int ? "disabled" : " "}`
              }
            >
              <a
                className="page-link rounds "
                //href="javascript:void(0);"
                onClick={
                  (e) => onNext(e, currentPage)
                  // setCurrentPage(currentPage + 1);
                  // props.onPageChange(e, currentPage, recordsPerPage);
                  // console.log("currentPage -  " + currentPage);
                }
              >
                <RdsIcon
                  name="chevron_right"
                  width="15px"
                  height="15px"
                  fill={false}
                  stroke={true}
                  colorVariant="primary"
                />
              </a>
            </li>

            <li className="page-item">
              <div className="btn-group dropdown page-counter">
                <select
                  className="form-select form-select-sm custom-select py-2"
                  onChange={(e) => setItemsPerPage(e, currentPage)}
                //   onChange={() => {
                //    // console.log("changed" );
                // setItemsPerPage
                //     //console.log("recordsPerPage -  " + recordsPerPage);
                //    // props.onPageChange(e,currentPage, recordsPerPage);
                //   }
                // }
                >
                  <option value="All">All</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </select>
              </div>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default RdsPagination;
