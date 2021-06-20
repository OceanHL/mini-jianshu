import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Writer from './pages/writer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/detail/:id' component={Detail} />
          <Route path='/login' component={Login} />
          <Route path='/writer' component={Writer} />
          <Route path='/app' render={() => <div>下载app</div>} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
