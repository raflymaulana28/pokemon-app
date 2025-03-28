import { useNavigate } from "react-router-dom";

interface PokemonCardProps {
  data: {
    name: string;
  };
}

function PokemonCard(props: PokemonCardProps) {
  const { data } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${data.name}`);
  };
  return (
    <div
      className="bg-white p-4 m-4 cursor-pointer border border-solid border-gray-500 rounded"
      onClick={handleClick}
    >
      <h1 className="font-bold">{data.name}</h1>
    </div>
  );
}

export default PokemonCard;
