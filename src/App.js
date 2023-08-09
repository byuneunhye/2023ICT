import Main from "./main";
import PostPage from "./common/postpage";
import Login from "./common/login";
import Signup from "./common/signup";
import WritePage from "./common/write";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/post" element={<PostPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/write" element={<WritePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
