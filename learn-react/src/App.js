import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import MovieApp from "./pages/movie/MovieApp";
import MovieDetail from "./pages/movie/MovieDetail";
import ToDo from "./pages/todo/ToDo";
import CleanUp from "./pages/cleanup/CleanUp";
import UseEffect from "./pages/useeffect/UseEffect";
import CoinTracker from "./pages/cointracker/CoinTracker";

function App() {
    return (
        <BrowserRouter
            basename={process.env.PUBLIC_URL}
        >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie" element={<MovieApp />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
                <Route path="/todo" element={<ToDo />} />
                <Route path="/coin" element={<CoinTracker />} />
                <Route path="/cleanUp" element={<CleanUp />} />
                <Route path="/useEffect" element={<UseEffect />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
