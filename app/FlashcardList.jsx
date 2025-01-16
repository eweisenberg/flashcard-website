'use client'

import Flashcard from "./Flashcard";
import {useRef, useState} from "react";

export default function FlashcardList({flashcards}) {
    const flashcardRefs = useRef([])
    const [currentIndex, setCurrentIndex] = useState(0);



    return (
        <div>
            {flashcards.map((flashcard, index) => (
                <Flashcard
                    flashcard={flashcard}
                    key={flashcard.front}
                    ref={(card) => (flashcardRefs.current[index] = card)}
                />
            ))}
        </div>
    );
}