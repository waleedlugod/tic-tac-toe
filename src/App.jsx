import { useEffect, useState } from "react";
import Cell from "./Cell.jsx";

export default function App() {
	const [turn, setTurn] = useState(false);
	const [grid, setGrid] = useState([...Array(9)]);
	const [won, setWon] = useState(false);

	function calcWin() {
		let win = false;

		for (let i = 0; i < 3; i++) {
			if (grid[i] && grid[i] === grid[i + 3] && grid[i] === grid[i + 3 * 2]) {
				win = true;
			}
		}

		for (let i = 0; i < 9; i += 3) {
			if (grid[i] && grid[i] === grid[i + 1] && grid[i] === grid[i + 1 * 2]) {
				win = true;
			}
		}

		if (grid[0] && grid[0] === grid[4] && grid[0] === grid[9]) {
			win = true;
		} else if (grid[2] && grid[2] === grid[4] && grid[2] === grid[6]) {
			win = true;
		}

		if (win) {
			setWon(win);
			console.log(`player ${turn ? 1 : 2} won`);
		}
	}

	function handleTurn(idx) {
		if (!won && !grid[idx]) {
			let newGrid = [...grid];
			newGrid[idx] = turn ? "X" : "O";
			setGrid(newGrid);
			setTurn((prev) => !prev);
		}
	}

	useEffect(() => {
		if (!won) {
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
