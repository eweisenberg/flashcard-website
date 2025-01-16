import {forwardRef} from "react";

const Flashcard = forwardRef(({ flashcard }, ref) => {
    let isBackShown = false

    return (
        <div
            ref={ref}
            style={{
                border: "1px solid black",
                fontSize: "50px",
                fontFamily: "sans-serif",
                alignContent: "center",
                textAlign: "center",
                marginBottom: "10px",
                height: "100vh"
        }}
        >
            <div style={{fontWeight: "bold"}}>{flashcard.front}</div>
            <div>{flashcard.back}</div>
        </div>
    )
})

export default Flashcard;