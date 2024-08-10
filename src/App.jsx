import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/HeaderSection/Header";
import Feed from "./components/FeedSection/Feed";
import SearchVideoResult from "./components/SearchSection/SearchVideoResult";
import VideoDetails from "./components/VideoSection/VideoDetails";
import { AppContext } from "./useContextHook/useContextApi";

function App() {
  return (
    <>
      <AppContext>
        <BrowserRouter>
          <div className=" flex flex-col w-full">
            <Header />
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route
                path="/search/:searchQuery"
                element={<SearchVideoResult />}
              />
              <Route
                path="/video/:categoryId/:videoId"
                element={<VideoDetails />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </AppContext>
    </>
  );
}

export default App;
