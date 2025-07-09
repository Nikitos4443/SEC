import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Home, Contact, About, NotFound} from './pages';
import './config/i18n.js';
import MainLayOut from "./layouts/MainLayOut.jsx";
import {ScrollToTop} from "./Components/index.js";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<MainLayOut />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
