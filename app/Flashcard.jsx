export default function Flashcard({ flashcard }) {
    return (
        <div style={{border: "1px solid black", fontSize: "24px", fontFamily: "sans-serif", marginBottom: "10px"}}>
            <div style={{fontWeight: "bold"}}>{flashcard.front}</div>
            {flashcard.back}
        </div>
    )
}