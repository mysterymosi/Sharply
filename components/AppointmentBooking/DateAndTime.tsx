import { ReferPartnerTypes } from "../../types";
import { Button } from "../Button";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Cookies from "js-cookie";

export const DateAndTime = ({ setTabId }: ReferPartnerTypes) => {
  const [times, setTimes] = useState([
    {
      id: 1,
      time: "8:00 AM",
      active: false,
      disabled: false,
    },
    {
      id: 2,
      time: "8:30 AM",
      active: false,
      disabled: false,
    },
    {
      id: 3,
      time: "9:00 AM",
      active: false,
      disabled: false,
    },
    {
      id: 4,
      time: "9:30 AM",
      active: false,
      disabled: false,
    },
    {
      id: 5,
      time: "10:00 AM",
      active: false,
      disabled: false,
    },
    {
      id: 6,
      time: "10:30 AM",
      active: false,
      disabled: false,
    },
    {
      id: 7,
      time: "11:00 AM",
      active: false,
      disabled: false,
    },
    {
      id: 8,
      time: "11:30 AM",
      active: false,
      disabled: false,
    },
    {
      id: 9,
      time: "12:00 PM",
      active: false,
      disabled: false,
    },
    {
      id: 10,
      time: "12:30 PM",
      active: false,
      disabled: false,
    },
    {
      id: 11,
      time: "1:00 PM",
      active: false,
      disabled: false,
    },
    {
      id: 12,
      time: "1:30 PM",
      active: false,
      disabled: false,
    },
    {
      id: 13,
      time: "2:00 PM",
      active: false,
      disabled: false,
    },
    {
      id: 14,
      time: "2:30 PM",
      active: false,
      disabled: false,
    },
    {
      id: 15,
      time: "3:00 PM",
      active: false,
      disabled: false,
    },
  ]);

  const [value, onChange] = useState(new Date());
  const getFormattedDate = () => {
    let year = value.getFullYear();
    let month = ("0" + (value.getMonth() + 1)).slice(-2);
    let day = ("0" + value.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };
  const [bookTime, setBookTime] = useState("");
  const handleBookTime = (timevalue: string) => {
    const newTimes = times.map((t) => {
      if (t.time === timevalue) {
        return { ...t, active: true };
      } else {
        return { ...t, active: false };
      }
    });
    setTimes(newTimes);
    let formattedDate = getFormattedDate();
    let time = new Date(formattedDate + " " + timevalue);
    let utcDate = new Date(
      Date.UTC(
        time.getFullYear(),
        time.getMonth(),
        time.getDate(),
        time.getHours(),
        time.getMinutes(),
        time.getSeconds()
      )
    );
    setBookTime(utcDate.toISOString());
  };
  const handleClick = () => {
    Cookies.set("day", getFormattedDate());
    Cookies.set("time", bookTime);
    setTabId(4);
  };
  return (
    <div className="mt-[54px] flex flex-col items-center">
      <h1 className="font-semibold text-[20px] text-center">
        Select appointment date and time
      </h1>
      <div className="w-full mt-[30px] mb-[30px]">
        <div className="grid gap-7 md:grid-cols-2 grid-cols-1">
          <Calendar
            className="calendar-container"
            onChange={onChange}
            value={value}
          />
          <div className="rounded-[24px] border border-grey11 border-solid py-[32px] px-[32px]">
            <h4 className="font-semibold text-[17px] text-black">
              Time best for you
            </h4>
            <div className="grid gap-5 grid-cols-3 mt-[34px]">
              {times.map((appointmentTime: any, index: number) => (
                <div
                  key={appointmentTime?.id}
                  onClick={() => handleBookTime(appointmentTime?.time)}
                  className={`${
                    appointmentTime?.active
                      ? "border-blue3 bg-blue4"
                      : "border-grey12"
                  } ${
                    appointmentTime?.disabled
                      ? "border-grey13 bg-grey14"
                      : "border-grey12 bg-white"
                  } cursor-pointer rounded-[8px] border border-solid py-[12px] px-[8px]`}
                >
                  <p className="text-center text-blue2">
                    {appointmentTime?.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <Button
          onClick={() => setTabId(1)}
          variant="default"
          className="mr-[20px]"
        >
          Back
        </Button>
        <Button onClick={handleClick} variant="primary">
          Next
        </Button>
      </div>
    </div>
  );
};
