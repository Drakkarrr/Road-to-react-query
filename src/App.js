import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import './App.css';
import Nav from './components/Nav';
import Home from "./components/Home";
import DataFetchAxios from './components/DataFetchAxios';
import DataFetchRQ from './components/DataFetchRQ';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <div className="App">
        <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/axios' element={<DataFetchAxios />} />
        <Route path='/react-query' element={<DataFetchRQ />} />
      </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false}  />
    </QueryClientProvider>
  );
}

export default App;
