import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import IndexPage from './pages/IndexPage/IndexPage';
import PageWrapper from './pages/PageWrapper/PageWrapper';
import ScriptsPage from './pages/ScriptsPage/ScriptsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageWrapper/>}>
          <Route index element={<IndexPage/>}/>
          <Route path="/scripts"/>
          <Route path="/create"/>
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;

/*
Images : 
RUBY: https://www.wh.group/ru/en/service/iot_system_ruby/190913_w_h_ruby_key_visual_product_information_3840x2160_r_stage_master.jpg
PYTHON: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/2560px-Python_logo_and_wordmark.svg.png
C: https://itstan.ru/wp-content/uploads/2021/10/5-c.jpg
*/