"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import ReservationPopup from "../../../common/ModalPortal";
import ReservationDate from "./ReservationDate";
import "react-calendar/dist/Calendar.css";
import { CalendarValue } from "../calendarTypes";

interface Schedules {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
}

interface ReservationDatePresenterProp {
  schedules: Schedules[];
  date: string | null;
  setDate: (date: CalendarValue) => void;
  time: null | [string, string];
  setTime: (date: string) => void;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setShowNextModal: Dispatch<SetStateAction<boolean>>;
}

const ReservationDatePresenter = ({
  schedules,
  date,
  setDate,
  time,
  setTime,
  showModal,
  setShowModal,
  setShowNextModal,
}: ReservationDatePresenterProp) => {
  return (
    <div className="md:px-6 xl:p-0">
      <h5 className="mb-2 hidden text-xl font-bold leading-[130%] md:block">
        날짜
      </h5>
      <div className="hidden xl:block">
        <ReservationDate
          setDate={setDate}
          setTime={setTime}
          schedules={schedules}
        />
      </div>
      <span
        className="inline text-sm font-semibold leading-normal text-[#0b3b2d] underline md:text-base md:leading-6 xl:hidden"
        onClick={() => {
          setShowModal(true);
        }}
      >
        {date === null || time === null
          ? "날짜 선택하기"
          : String(date).slice(2).split("-").join("/") +
            " " +
            time[0] +
            " ~ " +
            time[1]}
      </span>
      <div className={`${showModal ? "block" : "hidden"}`}>
        <ReservationPopup
          title="날짜"
          setState={setShowModal}
          buttonName="확인"
          onButtonClick={() => {
            setShowNextModal(true);
            setShowModal(false);
          }}
        >
          <ReservationDate
            setDate={setDate}
            setTime={setTime}
            schedules={schedules}
          />
        </ReservationPopup>
      </div>
    </div>
  );
};

export default ReservationDatePresenter;
