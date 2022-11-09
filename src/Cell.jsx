export default function Cell({ idx, state, handleTurn }) {
	return (
		<div className="cell-wrapper" onClick={() => handleTurn(idx)}>
			<p>{state}</p>
		</div>
	);
}
