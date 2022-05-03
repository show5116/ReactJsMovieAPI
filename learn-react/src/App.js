import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import MovieApp from "./pages/movie/MovieApp";
import MovieDetail from "./pages/movie/MovieDetail";
import ToDo from "./pages/todo/ToDo";
import CleanUp from "./pages/cleanup/CleanUp";
import UseEffect from "./pages/useeffect/UseEffect";
import CoinTracker from "./pages/cointracker/CoinTracker";
import {Reset} from "styled-reset";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import styles from "./App.module.css";
import {useEffect} from "react";

function App() {

    function setScreenSize(){
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh",`${vh}px`)
    }

    useEffect(()=>{
        setScreenSize();
    })

    return (
        <BrowserRouter
            basename={process.env.PUBLIC_URL}
        >
            <div className={styles.main__container}>
                <Reset />
                <Header />
                <div className={styles.main__component}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/movie" element={<MovieApp />} />
                        <Route path="/movie/:id" element={<MovieDetail />} />
                        <Route path="/todo" element={<ToDo />} />
                        <Route path="/coin" element={<CoinTracker />} />
                        <Route path="/cleanUp" element={<CleanUp />} />
                        <Route path="/useEffect" element={<UseEffect />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
