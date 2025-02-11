import { BrowserRouter, Routes, Route } from "react-router-dom";
import CrimeIndex from "./CrimeIndex";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CrimeIndex />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
