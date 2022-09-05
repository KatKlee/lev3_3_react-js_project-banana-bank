import { useState } from "react"

const Girokonto = () => {
    const [kontostand, setKontostand] = useState(0)
    const [change, setChange] = useState(0)

    return (
        <>
            <main>
                <h2>Dein Konto</h2>
                <p>{kontostand} €</p>
                <input value={change} onChange={e => setChange(e.target.value)} type="number" name="" id="" placeholder="Gib einen Betrag ein" />
                <section>
                    <button onClick={(e) => { setKontostand((prev) => prev + Number(change)); setChange(0) }}>Einzahlen</button>
                    {/* in der folgenden Zeile noch den ternary operator einfügen für verhindern des Dispo */}
                    <button onClick={(e) => { kontostand - change >= 0 ? setKontostand((prev) => prev - Number(change)) : window.alert('Sie haben nicht genügend Guthaben für diese Transaktion'); setChange(0) }}>Auszahlen</button>
                </section>
            </main>
        </>

    )
}

export default Girokonto