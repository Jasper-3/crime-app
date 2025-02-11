import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App.jsx";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<CompaniesIndex />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
