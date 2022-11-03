import "bootstrap/dist/js/bootstrap.min.js";
import React, { forwardRef, useState } from "react";
import "./rds-datepicker.scss";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "bootstrap";

export interface RdsDatepickerProps {
    DatePickerLabel: string
    type?: "default" | "advanced"
}

const RdsDatepicker = (props: RdsDatepickerProps) => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates: [any, any]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };


    const [dropShow, setDropShow] = useState(false);

    const divClickHandler = () => {
        setDropShow(
            prev => !prev
        )
    }


    const ExampleCustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
        <li className="example-custom-input dropdown-item" onClick={onClick} ref={ref}>
            Custom {value}
        </li>));

        const today = new Date()
    const [dropdownDisplayValue, setDropdownDisplayValue] = useState(today.toDateString());

    const yesterdayClickHandler = () => {
        const newDate = new Date(today.getFullYear(),today.getMonth(), today.getDate()-1);
        setDropdownDisplayValue(newDate.toDateString())
    }    
    const todayClickHandler = () => {
        const newDate = new Date(today.getFullYear(),today.getMonth(), today.getDate());
        setDropdownDisplayValue(newDate.toDateString())
    }




    return (
        <div>
            <div>{props.DatePickerLabel}</div>
            <div className="input-group mb-3">
                {/* <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"> */}
                {/* <input type="text" className="alpha"></input> */}
                <DatePicker
                    selected={startDate}
                    onChange={
                        (date) => {
                            if (date != null)
                                setStartDate(date)
                            else
                                setStartDate(new Date())
                        }}
                    className="datepicker__input"
                    wrapperClassName="datepicker__wrapper"

                />
                <div className="input-group-append datepicker__icon-box">
                    <span className="input-group-text" id="basic-addon2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                    </span>
                </div>
            </div>




            <hr></hr>

            {/* <div>Date Range (hardcoded label) </div> */}
            
            <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                    {props.DatePickerLabel}
                </button>
                <ul className="dropdown-menu">
                    <li className="daterange__dropdown-item dropdown-item" >Custom Date Range</li>
                    <small className="ps-4">{dropdownDisplayValue}</small>
                    <li className="daterange__dropdown-item dropdown-item" onClick={todayClickHandler}>Today</li>
                    <li className="daterange__dropdown-item dropdown-item" onClick={yesterdayClickHandler}>Yesterday</li>
                    <li className="daterange__dropdown-item dropdown-item" >Last 7 days</li>
                    <li className="daterange__dropdown-item dropdown-item" >Last 14 days</li>
                    <DatePicker
                        selected={startDate}
                        onChange={onChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        // inline

                        customInput={<ExampleCustomInput />}
                    />
                </ul>
            </div>




        </div>
    );

};


export default RdsDatepicker;


