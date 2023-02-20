import React,{ useContext } from "react";
import PostFormContext from "../context/PostFormContext";

const usePostFormContext = () => {
  return useContext(PostFormContext);
};

export default usePostFormContext;
