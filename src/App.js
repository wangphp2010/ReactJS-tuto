import React, { Component } from 'react';
import HeaderComponent from './components/Header';
import FootComponent from './components/Foot';
import BodyComponent from './components/Body';
import ContactComponent from './components/Contact';

import Todo from './components/To-do';
import About from './components/About';
import Messageb from './components/Messageb';

import Rt from './components/Redux_totu';
import Component404 from './components/Component404';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./css/style.css";
import store from "./Store";
import { Provider } from 'react-redux'

/* 两种写法 class HeaderComponent extends Component function App() */


function App(props) {

  let pathroot = "/ReactJS-tuto/"

  return (

    <Provider store={store}> {/* 一定要传入 store={store} */}
      <BrowserRouter basename="/ReactJS-tuto/">
        <Route
          render={({ location }) => (
            <div   >{/* 一定要把全部东西包在 div 或其他一个标签里 */}

              <HeaderComponent />
             
              <div className="container" >
            
                <TransitionGroup>
                  <CSSTransition
                    key={location.pathname}
                    classNames="slide"
                    timeout={300}
                  >
                    <Switch location={location}>

                      <Route exact path="/:page(\d+)?" component={BodyComponent} />
                      <Route path="/contact/:msg(\d+)?" component={ContactComponent} />
                      <Route path="/todo" component={Todo} />
                      <Route path="/Messageb" component={Messageb} />

                      <Route path="/about" component={About} />
                      <Route path="/rt" component={Rt} />
                      <Route component={Component404} />
                      <Route render={() => <div>Not Found</div>} />

                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </div>
              <FootComponent />

            </div>
          )}
        />
      </BrowserRouter>
    </Provider>



  );
}


/*


      





class HeaderComponent extends Component {

  render() {
    return (
      <div>   
        <h1>this is a hdeader </h1>
        <hr />
      </div>

    );


  }
} */



export default App;
