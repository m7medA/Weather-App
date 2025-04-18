import { useContext, useState } from "react";
import WeatherContext from "../../context/weather.context";
import { searchPlaces } from "../../api";
import "../../styles/components/Search.scss";

export default function Search() {
  const { setPlace } = useContext(WeatherContext);
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [openSearchResult, setOpenSearchResult] = useState(false);

  async function onSearch(e) {
    setText(e.target.value);
    const data = await searchPlaces(e.target.value);
    setSearchResults(data);
    setOpenSearchResult(data.length);
  }

  function changePlace(place) {
    setPlace(place);
    setText("");
    setOpenSearchResult(false);
  }

  return (
    <>
      <div className="search-container">
        <div className="search-icon">
          <i className="bi bi-search"></i>
        </div>
        <div className="search-input">
          <input
            type="text"
            value={text}
            name="search-city"
            placeholder="Search city ..."
            onChange={onSearch}
          />
        </div>
        {openSearchResult && (
          <div className="search-results">
            <div className="results-container">
              {searchResults.map((place) => (
                <div
                  className="result"
                  key={place.place_id}
                  onClick={() => changePlace(place)}
                >
                  {place.name}, {place.adm_area1}, {place.country}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
