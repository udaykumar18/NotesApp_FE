import React from "react";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out dark:bg-[#121212] dark:border-[#ffffff1e]">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium dark:text-white">{title}</h6>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {date}
          </span>
        </div>
        <MdOutlinePushPin
          className={`icon-btn dark:text-white ${
            isPinned ? "text-primary" : "text-slate-300"
          }`}
          onClick={onPinNote}
        />
      </div>
      <p className="text-xs text-slate-500 dark:text-white">
        {content?.slice(0, 60)}
      </p>

      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-slate-500 dark:text-slate-400">
          {tags.map((item) => `#${item} `)}
        </div>

        <div className="flex items-center gap-2">
          <MdCreate
            className="icon-btn dark:text-white hover:text-green-600"
            onClick={onEdit}
          />
          <MdDelete
            className="icon-btn dark:text-white hover:text-red-500"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
