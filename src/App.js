import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Board from "./pages/Board";
import Alarm from "./pages/Alarm";
import Signup from "./pages/Account/Signup"
import Login from "./pages/Account/Login";
import MyPage from "./pages/Mypage";
import ChangeNick from "./pages/Mypage/ChangeNick";
import AuthUniv from "./pages/Mypage/AuthUniv";
import AuthEmail from "./pages/Mypage/AuthEmail";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/board" component={Board} />
        <Route exact path="/alarm" component={Alarm} />

        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/mypage/ChangeNick" component={ChangeNick} />
        <Route exact path="/mypage/AuthUniv" component={AuthUniv} />
        <Route exact path="/mypage/AuthEmail" component={AuthEmail} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
