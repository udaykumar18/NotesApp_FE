import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";
import ToggleButton from "../Button/ToggleButton";

const Navbar = ({ handleClearSearch, onSearchNote, userInfo }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };
  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  };

  const navigate = useNavigate();
  const onLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="bg-white dark:bg-[#1b1b1f] dark:border-b-2 dark:border-[#ffffff1e] flex items-center justify-between px-6 py-3 drop-shadow">
      <h2 className="text-xl dark:text-[#fff] font-medium text-black py-2">
        NotesApp
      </h2>
      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />
      <div className="flex items-center gap-4">
        <ToggleButton />

        {userInfo ? (
          <ProfileInfo userInfo={userInfo} onLogOut={onLogOut} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
