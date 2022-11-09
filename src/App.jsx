import { useEffect, useState } from "react";
import Cell from "./Cell.jsx";

export default function App() {
	const [turn, setTurn] = useState(false);
	const [grid, setGrid] = useState([...Array(9)]);
	const [winner, setWinner] = useState(0);

	function handleTurn(idx) {
		if (!winner && !grid[idx]) {
			let newGrid = [...grid];
			newGrid[idx] = turn ? "X" : "O";
			setGrid(newGrid);
			setTurn((prev) => !prev);
		}
	}

	useEffect(() => {
		if (!winner) {
			calcWin();
		}
	}, [grid]);

	return (
		<div className="grid">
			{grid.map((e, i) => {
				return <Cell key={i} idx={i} state={grid[i]} handleTurn={handleTurn} />;
			})}
		</div>
	);
}
