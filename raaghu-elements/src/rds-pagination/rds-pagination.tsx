import React, { Fragment, useState } from "react";
import RdsIcon from "../rds-icon";

import "./rds-pagination.scss";

export interface RdsPaginationProps {
  totalRecords: number;
  recordsPerPage: number;
  recodes: any[];
  paginate: any;
}

const RdsPagination = (props: RdsPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(0);

  //console.log(props.totalRecords);
  const PageNumbers = [];

  const int = Math.ceil(props.totalRecords / props.recordsPerPage);
  if (int === 1) return null;
  for (let i = 1; i <= int; i++) {
    PageNumbers.push(i);
  }
 const prevHandler =() =>{

  }
  let disabled = "disabled"
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          
           <li className="page-item" aria-disabled ={currentPage == 0} > <a onClick={() => {
                setCurrentPage(currentPage - 1);
                console.log("currentPage -  "+currentPage)
                //disabled={}
               // props.paginate(currentPage - 1);
              }}>Prev</a>
         </li>
          {PageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => {
                  setCurrentPage(number);
                 // props.paginate(number);
                 console.log("currentPage -  "+currentPage)
                }}
               // href="!#"
               // className="page-link"
                className={`${
                  number === currentPage
                    ? " border-color"
                    : "border"
                }`}
              >
                {number}
              </a>
            </li>
          ))}
          <li className={"page-item"+ `${disabled}`} >
            <a
              onClick={() => {
                setCurrentPage(currentPage + 1);
                console.log("currentPage -  " + currentPage)
                //props.paginate(currentPage + 1);
               
              }} 
            >
              Next
            </a>
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default RdsPagination;

/*
<div>
        <div //ngSwitchCase="'Basic'"
        >
          <nav aria-label="Page navigation">
            <ul
              className="pagination" //[class]="classes"
            >
              <li
                className="page-item" // (click)="setPage(pager.currentPage - 1)" [ngClass]="{disabled:pager.currentPage === 1}"
              >
                <a className="page-link b" href="javascript:void(0);">
                  <RdsIcon name="chevron_left" width="15px" height="15px" />{" "}
                  <span className="pagination-prev">Prev</span>
                </a>
              </li>
              <li
                className="page-item default-li"
                // (click)="setPage(page)" *ngFor="let page of pager.pages"
                //[ngClass]="{active:pager.currentPage === page}"
              >
                <a className="page-link" href="javascript:void(0);">
                  {page}
                </a>
              </li>
              <li
                className="page-item" //(click)="setPage(pager.currentPage + 1)" [ngClass]="{disabled:pager.currentPage === pager.totalPages}"
              >
                <a
                  className="page-link b"
                  //  href="javascript:void(0);"
                >
                  <span className="pagination-next">Next</span>
                  <RdsIcon name="chevron_right" width="15px" height="15px" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <nav aria-label="page navigation">
            <ul //</nav>*ngIf="pager && pager.pages"
              className="pagination rounded" // [class]="classes"
            >
              <li
                className="page-item"
                aria-hidden="true" //</ul>[ngClass]="{disabled:pager.currentPage === 1}"
              >
                <a
                  className="page-link " // (click)="setPage(pager.currentPage - 1)"
                  href="javascript:void(0);"
                  aria-label="prev Page"
                ></a>
              </li>
              <li
                className="page-item" //</ul> [ngClass]="{active:pager.currentPage === page}" *ngFor="let page of pager.pages" (click)="setPage(page)"
              >
                <a className="page-link" href="javascript:void(0);">
                  {page}
                </a>
              </li>
              <li
                className="page-item" //[ngClass]="{disabled:pager.currentPage === pager.totalPages}"
              >
                <a
                  className="page-link btn-arrows2" // (click)="setPage(pager.currentPage + 1)"
                  href="javascript:void(0);"
                  aria-label="Next Page"
                >
                  <RdsIcon name="chevron_right" width="15px" height="15px" />
                </a>
              </li>
              <li
                className="page-item" //[ngClass]="{disabled:pager.currentPage === pager.totalPages}"
              >
                <a
                  className="page-link btn-arrows1" //(click)="setPage(pager.totalPages)" href="javascript:void(0);"
                  aria-label="Last Page"
                >
                  &raquo;
                </a>
              </li>
              <li className="page-item">
                <div className="btn-group dropdown page-counter">
                  <select
                    className="form-select form-select-sm custom-select py-2" // [(ngModel)]="recordsPerPage"(change)="setItemsPerPage(pager.currentPage,$event)"
                  >
                    <option value="All">All</option>
                    <option value="5" selected>
                      5
                    </option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                  </select>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      //
*/
/*
const[ currPage, setCurrPage]= useState(1);
  //const[ recordsPerPage, setCurrPage]= useState(1);
    
  
   const  handleClick =(event :any) => {
    let a = event.target.id
    setCurrPage(a);
    } 
  
      const indexOfLastTodo = currPage * props.recordsPerPage;
      const indexOfFirstTodo = indexOfLastTodo - props.recordsPerPage;
      const currentTodos = props.recodes.slice(indexOfFirstTodo, indexOfLastTodo);
  
      const renderTodos = currentTodos.map((todo:any, index:any) => {
        return <li key={index}>{todo}</li>;
      });
  
      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(props.recodes.length / props.recordsPerPage); i++) {
        pageNumbers.push(i);
      }
  
      const renderPageNumbers = pageNumbers.map((number:any ,index:any) => {
        return (
          <div className="d-flex "
            key={number}
            id={index}
            onClick={handleClick}
          >
            {number}
          </div>
        );
      });
*/
