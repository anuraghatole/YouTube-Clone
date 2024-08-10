import React, { useContext, createContext, useState, useEffect } from "react";
import { fetchApiForYoutubeData } from "../utils/fetchApi";

export const context = createContext();

export const AppContext = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("0");
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState([]);
  const [mobileMenu, setMobileMenu] = useState(false);

  const fetchYoutubeData = async (params) => {
    setLoading(true);
    try {
      const res = await fetchApiForYoutubeData("videos", params);
      setVideoData(res.items);
      console.log(res.items);
    } catch (error) {
      console.log("error fetching youtube results", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      if (selectedCategory === "Home") {
        fetchYoutubeData({
          part: "snippet,contentDetails,statistics",
          regionCode: "IN",
          maxResults: 10,
        });
      } else {
        fetchYoutubeData({
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: "IN",
          maxResults: 10,
          videoCategoryId: selectedCategory,
        });
      }
    }
  }, [selectedCategory]);

  return (
    <context.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        setMobileMenu,
        mobileMenu,
        videoData,
        loading,
        setLoading,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useAppContext = () => {
  return useContext(context);
};
