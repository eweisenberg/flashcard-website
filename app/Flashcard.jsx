import {forwardRef, useState, useImperativeHandle, useRef} from "react";

const Flashcard = forwardRef(({ flashcard }, ref) => {
    const [isBackShown, setIsBackShown] = useState(false);
    const elementRef = useRef(null);

    useImperativeHandle(ref, () => ({
        flip: () => {
            setIsBackShown((prev) => {
                return !prev;
            });
        },
        element: elementRef.current,
    }));

    function backColor() {
        if (isBackShown) {
            return "black"
        } else {
            return "white"
        }
    }

    return (
        <div
            ref={elementRef}
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
            <div style={{color: backColor()}}>{flashcard.back}</div>
        </div>
    )
})

export default Flashcard;