import React from "react";
import NotesImg from "../../assets/notes.png";
import NoDataImg from "../../assets/NoData.webp";

const EmptyCard = ({ isSearch }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <img
        src={isSearch ? NoDataImg : NotesImg}
        alt="No Notes"
        className="w-60"
      />
      <p className="w-1/2 text-sm font-medium text-slate-700 text-center leading-7 mt-5 dark:text-[#fff]">
        {isSearch
          ? "Oops! No Notes found matching your search"
          : " Start creating Your first note! Click the Add button to write down your thoughts,ideas and reminders.Let's get started!"}
      </p>
    </div>
  );
};

export default EmptyCard;
