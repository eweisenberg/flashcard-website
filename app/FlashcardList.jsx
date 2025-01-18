'use client'

import Flashcard from "./Flashcard";
import {useRef, useState, useEffect} from "react";

export default function FlashcardList({flashcards}) {
    const flashcardRefs = useRef([])
    const componentRefs = useRef([])
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === " ") {
                event.preventDefault();
            }
            if (event.key === "ArrowDown" && currentIndex < flashcards.length - 1) {
                setCurrentIndex((prev) => prev + 1);
            } else if (event.key === "ArrowUp" && currentIndex > 0) {
                setCurrentIndex((prev) => prev - 1);
            } else if (event.key === " " && componentRefs.current[currentIndex]?.flip) {
                componentRefs.current[currentIndex].flip();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentIndex, flashcards.length]);

    useEffect(() => {
        if (flashcardRefs.current[currentIndex]) {
            flashcardRefs.current[currentIndex].scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }, [currentIndex]);

    return (
        <div>
            {flashcards.map((flashcard, index) => (
                <Flashcard
                    flashcard={flashcard}
                    key={flashcard.front}
                    ref={(card) => {
                        flashcardRefs.current[index] = card?.element
                        componentRefs.current[index] = card
                    }}
                />
            ))}
        </div>
    );
}