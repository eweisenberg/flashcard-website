import Flashcard from "./Flashcard";

export default function FlashcardList({ flashcards }) {
    const cards = []
    flashcards.forEach(flashcard => {
        cards.push(
            <Flashcard flashcard={flashcard} key={flashcard.front} />
        )
    })

    return cards;
}