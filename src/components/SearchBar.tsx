import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemon } from "../reducers/slice";

function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const handleSearch = () => {
	dispatch(searchPokemon(keyword));
  }
  return (
    <div className="w-full mb-4 flex justify-between gap-3">
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        type="text"
        placeholder="Search Pokemon..."
        className="w-full p-4 rounded outline-none bg-none border border-solid border-gray-300 bg-white"
      />
	  <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
    </div>
  );
}

export default SearchBar;
