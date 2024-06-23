"use client";

import React, { useState, useEffect } from "react";
import AlertSvg from "../../svg/AlertSvg";
import NotificationModal, {
  Notification,
} from "../../NotificationModal/NotificationModal";

interface ResponseNotificationsApi {
  totalCount: 0;
  notifications: Notification[];
  cursorId: number | null;
}

type Props = {
  notificationsFromApi: ResponseNotificationsApi;
};

const AlertMenu = ({ notificationsFromApi }: Props) => {
  const [notifications, setNotifications] = useState<Notification[]>(
    notificationsFromApi?.notifications || [],
  );
  const [isAlertClicked, setIsAlertClicked] = useState(false);

  useEffect(() => {
    console.log(isAlertClicked);
  }, [isAlertClicked]);

  const handleAlertClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // 이벤트 버블링 막기
    setIsAlertClicked((prev) => !prev);
  };

  return (
    <>
      <div onClick={handleAlertClick} className="relative">
        <AlertSvg isClicked={isAlertClicked} />
        {isAlertClicked && (
          <NotificationModal
            setState={setIsAlertClicked}
            notifications={notifications}
            setNotifications={setNotifications}
            buttonPosition={{ left: 0, top: 22 }}
          />
        )}
      </div>
    </>
  );
};

export default AlertMenu;
