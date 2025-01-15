import FlashcardList from "@/app/FlashcardList";

const FLASHCARDS = [
    {front: "2 + 2", back: "4", correct: false},
    {front: "3 + 3", back: "6", correct: false},
    {front: "6 + 4", back: "10", correct: false},
    {front: "5 + 5", back: "10", correct: false},
    {front: "6 + 5", back: "11", correct: false}
]

export default function App() {return (
        <FlashcardList flashcards={FLASHCARDS} />
    );
}
