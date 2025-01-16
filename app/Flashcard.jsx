import {forwardRef} from "react";

const Flashcard = forwardRef(({ flashcard }, ref) => {
    return (
        <div
            ref={ref}
            style={{
                border: "1px solid black",
                fontSize: "24px",
                fontFamily: "sans-serif",
                marginBottom: "10px",
                height: "100vh"
        }}
        >
            <div style={{fontWeight: "bold"}}>{flashcard.front}</div>
            {flashcard.back}
        </div>
    )
})

export default Flashcard;