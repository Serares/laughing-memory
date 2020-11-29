import React, { useState, useEffect } from 'react';
import { useHistory, Switch } from 'react-router-dom';
import Layout from './Layout/Layout';
import AdminNavbar from "./components/Navbars/AdminNavbar";
import Modal from './components/Modal/Modal';
import Main from './pages/Main';
import Authentication from './pages/Authentication';
import { ILoginInformation, ISignupInformation } from './interfaces/authenticate/IAuthenticate';

export interface ILoginState {
  showBackdrop: boolean;
  showMobileNav: boolean;
  token: string | null;
  userId: string | null;
  authLoading: boolean;
  error: null;
  isAuth: boolean;
};

const App = () => {
  const modal_data = {
    message: "",
    title: "",
    showModal: false
  };
  const loginStateData: ILoginState = {
    showBackdrop: false,
    showMobileNav: false,
    token: null,
    userId: null,
    authLoading: false,
    isAuth: false,
    error: null
  };

  const [modalInfo, setModalInfo] = useState(modal_data);
  const [loginState, setLoginState] = useState(loginStateData);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');
    if (!token || !expiryDate) {
      return;
    };

    if (new Date(expiryDate) <= new Date()) {
      logoutHandler();
      return;
    };

    const userId = localStorage.getItem('userId');
    const remainingMilliseconds = new Date(expiryDate).getTime() - new Date().getTime();
    console.log("remaingin minutes", remainingMilliseconds / 60000);
    setLoginState({ ...loginState, isAuth: true, token: token, userId: userId });
    setAutoLogout(remainingMilliseconds);
    history.replace("/admin");
  }, [loginState["isAuth"]]);

  const logoutHandler = (): void => {
    setLoginState({ ...loginState, isAuth: false, token: null });
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('userId');
  };

  const loginHandler = (event: MouseEvent, authData: ILoginInformation): void => {
    event.preventDefault();
    setLoginState({ ...loginState, authLoading: true });
    fetch('http://localhost:5000/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: authData.email,
        password: authData.password
      })
    })
      .then(res => {
        if (res.status === 422) {
          throw new Error('Validation failed.');
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Could not authenticate you!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        setLoginState({
          ...loginState,
          isAuth: true,
          token: resData.token,
          authLoading: false,
          userId: resData.userId
        });
        localStorage.setItem('token', resData.token);
        localStorage.setItem('userId', resData.userId);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem('expiryDate', expiryDate.toISOString());
        setAutoLogout(remainingMilliseconds);
        // redirect to dashboard
        history.replace("/admin");
      })
      .catch(err => {
        console.log(err);
        setLoginState({
          ...loginState,
          isAuth: false,
          authLoading: false,
          error: err
        });
      });
  };

  const signupHandler = (event: MouseEvent, authData: ISignupInformation): void => {
    // TODO replace constant strings with process.env.
    event.preventDefault();
    setLoginState({ ...loginState, authLoading: true });
    fetch('http://localhost:5000/signup', {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: authData.email,
        password: authData.password,
        firstName: authData.firstName,
        lastName: authData.lastName,
        phoneNumber: authData.phoneNumber
      })
    })
      .then(res => {
        if (res.status === 422) {
          throw new Error(
            "Validation failed. Make sure the email address isn't used yet!"
          );
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Creating a user failed!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        setLoginState({ ...loginState, isAuth: false, authLoading: false });
        history.replace('/');
      })
      .catch(err => {
        console.log(err);
        setLoginState({
          ...loginState,
          isAuth: false,
          authLoading: false,
          error: err
        });
      });
  };

  const setAutoLogout = (milliseconds: number) => {
    setTimeout(() => {
      logoutHandler();
    }, milliseconds);
  };

  let getRoutes = () => {
    //TODO think of a better way of doing this
    
    if (loginState["isAuth"]) {
      return (<Authentication
        signupHandler={signupHandler}
        loginHandler={loginHandler}
      />)
    } else {
      return (
        <Main
          isAuth={loginState["isAuth"]}
        />
      )
    }
  };

  const handleNavigation = (path: string): void => {
    if (path.indexOf("logout") > -1) {
      logoutHandler();
      history.replace("/");
      return
    };
    history.push(path);
  };

  return (
    <>
      <Layout
        navigation={
          <AdminNavbar
            isAuth={loginState["isAuth"]}
            handleNavigation={handleNavigation}
          />
        }
        footer={
          <div>Footer</div>
        }
      >
        <Modal
        />
        {getRoutes()}
      </Layout>
    </>
  )
};

export default App;
