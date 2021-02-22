import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";
import { fetchPosts, postSelectors } from "../store/post";

const SearchApp = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector(postSelectors.selectEntities);
  const filteredPosts = useSelector((state) => state.posts.filteredPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="container bg-red-300 p-1">
      <div className=" bg-yellow-200 px-4 py-2">
        <div className="bg-gray-300 px-1">
          <SearchInput allPosts={allPosts} />
        </div>
        <SearchList filteredPosts={filteredPosts} />
      </div>
    </div>
  );
};

export default SearchApp;
