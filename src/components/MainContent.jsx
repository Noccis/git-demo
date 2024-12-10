import React from 'react'

const MainContent = () => {
  return (
    <main>
      <section>
        <h2>Vad är Git?</h2>
        <p>
          Git är ett versionshanteringssystem som används för att spåra ändringar i filer och samordna arbete mellan flera utvecklare.
        </p>
        <p>
          Det är ett kraftfullt verktyg för att hålla koll på din kod och göra samarbeten enklare!
        </p>
      </section>
      <section>
        <h2>Måste man alltid följa git-flow?</h2>
        <p>Nej, men det är en bra idé att ha tydliga namn på sina branches samt att ha tydliga och "rena" pull requests.</p>
      </section>
    </main>
  )
}

export default MainContent