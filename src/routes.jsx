import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Dashboard from "./components/dashboard/dashboard";
import Explore from "./components/explore/explore";
import GameDetails from "./components/gameDetails/gameDetails";
import Games from "./components/games/games";

const PrimaryRoutes = () => {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/game-details" element={<GameDetails />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/games" element={<Games />} />
            </Routes>
        </>
    )
}

export default PrimaryRoutes;