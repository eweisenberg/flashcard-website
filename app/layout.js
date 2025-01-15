export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <title>Flashcard Website</title>
        </head>
        <body>
        {children}
        </body>
        </html>
    );
}
