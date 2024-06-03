import React, { useState } from "react";
import { DatePicker } from "antd";

const WeekdayAndDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Moment | null>(null);

  const handleDateChange = (date: Moment | null) => {
    setSelectedDate(date);
  };

  return (
    <DatePicker
      placeholder="Filter by:Day"
      value={selectedDate}
      onChange={handleDateChange}
      format={(value: Moment | null) =>
        value ? `${value.format("dddd")} ${value.format("D")}` : ""
      }
      allowClear={true}
    />
  );
};

export default WeekdayAndDatePicker;
