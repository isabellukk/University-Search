import {useState, useRef} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

function UniversitySearch() {
	const [search, setSearch] = useState("");
	const [result, setResult] = useState([]);
	const inputRef = useRef(null);
	const navigate = useNavigate();

	const handleChange = event => {
		setSearch(event.target.value);
	};

	const handleSubmit = () => {
		const url = "http://universities.hipolabs.com/search?name=" + search;

		axios.get(url).then(response => {
			setResult(response.data);
		});

		const searchValue = inputRef.current.value;
		navigate(`/search?` + `name=` + `${searchValue}`);
	};

	const keySubmit = event => {
		if (event.keyCode === 13) {
			handleSubmit();
		}
	};

	return (
		<div className="container">
			<div className="container-label">
				<h2>University Search</h2>
			</div>
			<div className="search-container">
				<h5>Enter a search term to get started</h5>
				<div className="input-search">
					<h6>Name of University:</h6>
					<input
						onChange={handleChange}
						onKeyDown={keySubmit}
						type="text"
						name="name"
						ref={inputRef}
						placeholder="Type in here"
					/>
					<input onClick={handleSubmit} type="submit" />
				</div>
				<div className="result">
					{result.map((info, index) => {
						return (
							<ul key={(info, index)}>
								<a href={info.web_pages}>{info.name}</a>
							</ul>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default UniversitySearch;
