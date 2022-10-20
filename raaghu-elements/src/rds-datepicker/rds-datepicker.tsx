import "bootstrap/dist/js/bootstrap.min.js";
import React, { useState } from "react";
import "./rds-datepicker.scss";

// import * as LibDatePicker from "./lib"

export interface RdsDatepickerProps {

}

const RdsDatepicker = (props: RdsDatepickerProps) => {

    const today = new Date();

    const weekdaysList = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    const[date, setdate] = useState({
        weekday: today.getDay(),  //it returns weekday as a number starting from 0
        day: today.getDate(),
        month: today.getMonth() + 1,
        year: today.getFullYear(),
    })

    // const a=today.getDate();
    
    // while(a<0){}

    // for (let a=today.getDate(); a<0; a-=7){}

    // const monthArray = [[],[]]


    // const[starting, setStarting] =useState (date.day);
    // setStarting(date.day-date.weekday);
    // while(starting>1){
    //     setStarting(prev => prev-7)
    // }
    // const firstDayOfMonth = 7-starting    //weekday of first day of the month, sunday-->0

    // const weeks= [0,1,2,3,4,5 ]

    // let dayOne = 7-((date.day-date.weekday-1)%7) //weekday (0-starting) of first day of the month

    const dayOneWeekday = (new Date(date.year,date.month,1)).getDay();
    const noOfDaysInPreviousMonth = (new Date(date.year,date.month-1,0)).getDate();

    

    

    return (
        <div>

            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-2 text-center">
                            <span className="btn"> &lt; </span>
                        </div>
                        <div className="col-8 text-center"> Selected_date </div>
                        <div className="col-2 text-center">
                            <span className="btn"> &gt; </span>
                        </div>
                    </div>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sun</th>
                                    <th scope="col">Mon</th>
                                    <th scope="col">Tue</th>
                                    <th scope="col">Wed</th>
                                    <th scope="col">Thu</th>
                                    <th scope="col">Fri</th>
                                    <th scope="col">Sat</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>Larry the Bird</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



            <div>Today: {weekdaysList[date.weekday]} {date.day} {date.month} {date.year} </div>



        </div>
    );

};

export default RdsDatepicker;