import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App({ state, dispatch, store }) {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Navbar state={state.sideBar} />
        <div className="app_wrapper_content">
          <Routes>
            <Route
              element={<Dialogs dispatch={dispatch} store={store} />}
              path="/dialogs/*"
            />
            <Route
              element={
                <Profile
                  profile={state.profile}
                  newPostValue={state.profile.newPostValue}
                  dispatch={dispatch}
                />
              }
              path="/profile"
            />
            <Route element={<News />} path="/news" />
            <Route element={<Music />} path="/music" />
            <Route element={<Settings />} path="/settings" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
