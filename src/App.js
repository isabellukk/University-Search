import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UniversitySearch from "./components/UniversitySearch";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<UniversitySearch />}>
						<Route path="/search" element={<UniversitySearch />}>
							<Route path="/search:id" element={<UniversitySearch />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
