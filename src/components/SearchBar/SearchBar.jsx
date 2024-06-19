import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="w-80 dark:bg-[#121212] border dark:text-[#fff] dark:border-[#ffffff1e] flex items-center px-4 bg-slate-100 rounded-md">
      <input
        type="text"
        placeholder="Search Notes"
        className="w-full text-xs bg-transparent py-[11px] outline-none"
        value={value}
        onChange={onChange}
      />
      {value && (
        <IoMdClose
          className="text-xl mr-3 text-slate-400 cursor-pointer hover:text-black dark:hover:text-[#fff]"
          onClick={onClearSearch}
        />
      )}

      <FaMagnifyingGlass
        className="text-slate-400 cursor-pointer hover:text-black dark:hover:text-[#fff]"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
