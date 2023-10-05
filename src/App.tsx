import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/general/Home';
import Learning from './pages/general/Learning';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/learning`} element={<Learning />} />
        <Route path={`/learning/:bab`} element={<Learning />} />
        <Route path={`/learning/:bab/:headline`} element={<Learning />} />
        <Route
          path={`/learning/:bab/:headline/:subheadline`}
          element={<Learning />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
