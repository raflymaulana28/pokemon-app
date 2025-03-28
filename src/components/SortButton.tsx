import { useDispatch } from "react-redux";
import { sortingPokemon } from "../reducers/slice";
import { useState } from "react";

function SortButton() {
  const dispatch = useDispatch();
  const [type, setType] = useState("asc");
  const handleSort = () => {
    const newType = type === "asc" ? "desc" : "asc";
    dispatch(sortingPokemon(newType));
    setType(newType);
  };
  return (
    <div>
      <button
        onClick={handleSort}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sort
      </button>
    </div>
  );
}

export default SortButton;
