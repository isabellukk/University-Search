import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UniversitySearch from "./components/UniversitySearch";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="/search" element={<UniversitySearch />}>
						<Route path="/search:id" element={<UniversitySearch />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

reportWebVitals();
