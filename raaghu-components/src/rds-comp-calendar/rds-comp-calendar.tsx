import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

export interface RdsCalendarProps {
  events: any[];
}

const RdsCompCalendar = (props: RdsCalendarProps) => {
  const localizer = momentLocalizer(moment);
  return (
    <>
      <div>
        <Calendar
          localizer={localizer}
          events={props.events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </>
  );
};

export default RdsCompCalendar;
