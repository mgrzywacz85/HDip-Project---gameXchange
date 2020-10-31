import React, { useEffect, Fragment } from "react";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import NavBar from "../../components/posts/nav/NavBar";
import PostDashboard from "../../components/posts/postDashboard/PostDashboard";
import PostForm from "../../components/posts/postForm/PostForm";
import PostDetails from "../../components/posts/postDetails/PostDetails";
import LandingPage from "../../components/landing/LandingPage";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";
import Alert from '../alert/Alert';
import AuthToken from '../utils/AuthToken';
import { loadUserAction } from "../reduxStore/actions/AuthActions";
import store from '../../app/reduxStore/configureStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ScrollToTop from '../../app/main/ScrollToTop';

if (localStorage.token) {
  AuthToken(localStorage.token);
}

const App = () => { 

  useEffect(() => {
    store.dispatch(loadUserAction());
  }, []);  //the empty array parameter ensures the useEffect hook runs only once and is not in a loop

  //const { key } = useLocation();

  return (
  <Provider store={store}>
    <BrowserRouter>       
    <Fragment>
    <ScrollToTop />
      <Route exact path='/' component={LandingPage} />

      <Route
        path={"/(.+)"} //expression which helps separate the Home page from the NavBar
        render={() => (
          <Fragment>
            <NavBar />
            <Container className='main'>
              <Route exact path='/posts' component={PostDashboard} />
              <Route path='/posts/:id' component={PostDetails} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route
                path={["/newPost", "/edit/:id"]}
                component={PostForm}
                //locationKey={key}
              />
              <Alert />              
            </Container>            
          </Fragment> )}
          />
          </Fragment>
          </BrowserRouter> 
          </Provider>
        )};

export default App;
