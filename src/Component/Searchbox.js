import React from "react";

const Searchbox = ({ searchChange }) => {
  return (
    <div className="pa3 ma3">
      <input
        className="pa3 ba b- -geen bg-lightest-blue"
        placeholder="add robot"
        type="search"
        onChange={searchChange}
      />
    </div>
  );
};
export default Searchbox;
