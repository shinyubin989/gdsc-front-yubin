import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

import Main from "./pages/Main";
import Board from "./pages/Board/Main";
import Alarm from "./pages/Alarm";
import Signup from "./pages/Account/Signup"
import Login from "./pages/Account/Login";
import MyPage from "./pages/Mypage";
import ChangeNick from "./pages/Mypage/ChangeNick";
import AuthUniv from "./pages/Mypage/AuthUniv";
import AuthEmail from "./pages/Mypage/AuthEmail";
import Setting from "./Setting";
import Posting from "./pages/Posting";
import BoardCategory from "./pages/Board/BoardCategory";
import BoardDetail from "./pages/Board/BoardDetail";
import Searching from "./pages/Search";

const App = () => {

  const [isLogin, setIsLogin] = useState(true);
  
  useEffect(() => {
    const fetchLogin = async () =>{
      const result = await axios("/api/user");
      if(result.data.success){
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    };
    fetchLogin();
  }, []);


  return (
    <BrowserRouter>
      <Switch>
        
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login} >
          {isLogin ? <Redirect path="/" /> : <Login />}
        </Route>

        {isLogin ? (
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/board" component={Board} />
            <Route exact path="/board/list/:category" component={BoardCategory} />
            <Route exact path="/board/detail/:id" component={BoardDetail} />
            <Route exact path="/alarm" component={Alarm} />
            <Route exact path="/mypage" component={MyPage} />
            <Route exact path="/mypage/ChangeNick" component={ChangeNick} />
            <Route exact path="/mypage/AuthUniv" component={AuthUniv} />
            <Route exact path="/mypage/AuthEmail" component={AuthEmail} />
            <Route exact path="/setting" component={Setting} />
            <Route exact path="/posting" component={Posting} />
            <Route exact path="/search" component={Searching} />
          </Switch>
            ) : (
          <Redirect to ="/login" />
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
