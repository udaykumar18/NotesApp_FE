import React from "react";
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ userInfo, onLogOut }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {getInitials(userInfo?.fullName)}
      </div>
      <div>
        <p className="text-sm font-medium dark:text-[#fff]">
          {userInfo?.fullName}
        </p>
        <button
          className="text-sm text-white bg-blue-500 dark:text-black  dark:bg-white px-[6px] text-[12px] rounded-sm"
          onClick={onLogOut}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
