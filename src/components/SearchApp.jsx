import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchInput from "./SearchInput";
import { fetchPosts, postSelectors } from "../store/post";

const SearchApp = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postSelectors.selectEntities);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div className="container bg-red-300 p-1">
      <div className=" bg-yellow-200 px-4 py-2">
        <div className="bg-gray-300 px-1">
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default SearchApp;
