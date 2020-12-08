import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Auth from "./helper/Auth";
import Home from './views/Community/Home';
import Account from './views/Community/Account';
import AccountSignin from './views/Community/AccountSignin';
import TopicView from './views/Community/TopicView';
import Profile from './views/Community/Profile';

// import Login from './containers/components/Login';
// import AccountrRegistration from './containers/components/Register';
// import EditContainer from './containers/components/Container';

// import Page404 from './views/Pages/Page404';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" name="Login Page" render={props => <Home {...props}/>} />
        {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
        <Route exact path="/register" name="Register Page" render={props => <AccountrRegistration {...props}/>} /> */}
        <Route exact path="/community_signup" name="Register Page" render={props => <Account {...props}/>} />
        <Route exact path="/community_login" name="Register Page" render={props => <AccountSignin {...props}/>} />
        <Route exact path="/community/topic/:topicId" name="Topic Detail Page" render={props => <TopicView {...props}/>} />
        <Route exact path="/community_profile" name="Profile" render={props => <Profile {...props}/>} />
        {/* <Route exact path="/complete_data" name="EditProfile Page" render={props => <EditContainer {...props}/>} /> */}
          {/* {Auth.isUserAuthenticated() ? (
          <Route path="/dashboard" name="Dashboard" render={props => <DefaultLayout {...props}/>} />
        ) : <Redirect to="/" />} */}
        {/* <Route exact path="/*" name="Page 404" render={props => <Page404 {...props}/>} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
