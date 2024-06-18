import Button from "@/components/common/Button";
import React from "react";

interface ScheduleReservationType {
  id: number;
  nickname: string;
  userId: number;
  teamId: string;
  activityId: number;
  status: string;
  reviewSubmitted: boolean;
  totalPrice: number;
  headCount: number;
  date: string;
  startTime: string;
  endTime: string;
}

const ReservationCard = ({
  reservation,
}: {
  reservation: ScheduleReservationType;
}) => {
  return (
    <div className="rounded border-[1px] border-gray-30 p-3 ">
      <div className="flex flex-col">
        <span className="text-base font-semibold leading-normal text-gray-70">
          닉네임
          <span className="text-base font-medium leading-normal text-black">
            {reservation.nickname}
          </span>
        </span>
        <span className="text-base font-semibold leading-normal text-gray-70">
          인원
          <span className="text-base font-medium leading-normal text-black">
            {reservation.headCount}
          </span>
        </span>
      </div>
      <div>
        {reservation.status === "pending" ? (
          <>
            <Button variant="primary" size="sm">
              승인하기
            </Button>
            <Button variant="white" size="sm">
              거절하기
            </Button>
          </>
        ) : (
          <div
            className={`px-4 py-2.5 text-sm font-bold leading-normal 
            ${reservation.status === "confirmed" ? "bg-blue-30 text-white" : "bg-red-10 text-red-20"}`}
          ></div>
        )}
      </div>
    </div>
  );
};

export default ReservationCard;
