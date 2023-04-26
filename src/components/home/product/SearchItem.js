import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../store/slices/productSlice";
import { searchData } from "../../../store/slices/productSlice";
const SearchItem = () => {
  const {data} = useSelector(state => state.product);
  // const [filterItem, setFilterItem] = useState(data)
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  
  const searchHandler = (e) => {
    setSearchInput(e.target.value)
    console.log(searchInput);
    if(searchInput)
    dispatch(searchData(searchInput))
  }

  // useEffect(() => {
  //   getSearchData()
  // },[searchInput]);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-black my-3 text-xl">Search Products</h1>
      <div className="flex justify-center w-[30%] rounded-2xl bg-white">
        {/* <form onSubmit={getSearchData} className="flex justify-center w-full"> */}
          <input
            type="search"
            className="text-black rounded-lg py-2 px-8 text-lg w-full pt-1 pl-1 pb-1 pr-2 h-10 outline-none"
            placeholder="search..."
            value={searchInput}
            onChange={searchHandler}
          />
          <button type="submit" className="py-0 px-2 cursor-pointer h-10">
            <i className="fa fa-search"></i>
          </button>
        {/* </form> */}
      </div>
    </div>
  );
};

export default SearchItem;
