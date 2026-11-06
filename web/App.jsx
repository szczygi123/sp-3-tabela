import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const Pracownicy = [
    {id: 1, imie: "Michał", nazwisko: "Gołądź", dzial: "IT", pensja: 8700},
    {id: 2, imie: "Ola", nazwisko: "Wojcieszak", dzial: "IT", pensja: 8700},
    {id: 3, imie: "Maciek", nazwisko: "Szymoś", dzial: "Sprzedaż", pensja: 5435},
    {id: 4, imie: "Wojtek", nazwisko: "Szczygieł", dzial: "IT", pensja: 4321},
    {id: 5, imie: "Jakub", nazwisko: "Alan", dzial: "IT", pensja: 3213},
    {id: 6, imie: "Dawid", nazwisko: "Nowak", dzial: "IT", pensja: 5435},
    {id: 7, imie: "Olek", nazwisko: "Marcel", dzial: "Sprzedaż", pensja: 8700},
    {id: 8, imie: "Krzysztof", nazwisko: "Szczygieł", dzial: "Księgowość", pensja: 3200},
    {id: 9, imie: "Kuba", nazwisko: "Nowak", dzial: "IT", pensja: 8700},
    {id: 10, imie: "Maurycy", nazwisko: "Szczygieł", dzial: "Sprzedaż", pensja: 8700},
    {id: 11, imie: "Dawid", nazwisko: "Nowak", dzial: "Księgowość", pensja: 8788},
    {id: 12, imie: "Ola", nazwisko: "Lola", dzial: "Księgowość", pensja: 9888},
  ]

  const [nazwisko, setNazwisko] = useState("");
  const [dzial, setDzial] = useState("");

  const przefiltrowaniPracownicy = Pracownicy.filter(pracownik =>
    pracownik.nazwisko.toLowerCase().includes(nazwisko.trim().toLowerCase()) &&
    (dzial === '' || pracownik.dzial === dzial)
  );


  const ustawNazwisko = (e) => {
    setNazwisko(e.target.value);
  }
  const ustawDzial = (e) => {
    setDzial(e.target.value);
  }

  console.log(`Wyniki: ${przefiltrowaniPracownicy.length}`);




  return (
    <div>
      <h2>Pracownicy</h2>
      <div className="d-flex gap-2">

        <div className="mb-3 w-100">
          <label htmlFor="szukaj" className="form-label">Szukaj:</label>
          <input type="text" className="form-control" id="szukaj" value={nazwisko} onChange={ustawNazwisko} />
        </div>

        <div className="mb-3 w-100">
          <label htmlFor="dzial" className="form-label">Dział:</label>
          <select className="form-select" id="dzial" value={dzial} onChange={ustawDzial}>
            <option value="">Wszystkie</option>
            <option value="IT">IT</option>
            <option value="Sprzedaż">Sprzedaż</option>
            <option value="Księgowość">Księgowość</option>
          </select>
        </div>

      </div>

      <p className="fw-bold">Liczba pracowników: {przefiltrowaniPracownicy.length}</p>
      {przefiltrowaniPracownicy.length > 0 ? (
        <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">Imię</th>
            <th scope="col">Nazwisko</th>
            <th scope="col">Dział</th>
            <th scope="col">Pensja</th>
          </tr>
        </thead>
        <tbody>
           {przefiltrowaniPracownicy.map(pracownik => (
              <tr key={pracownik.id}>
                <td>{pracownik.imie}</td>
                <td>{pracownik.nazwisko}</td>
                <td>{pracownik.dzial}</td>
                <td>{pracownik.pensja}</td>
              </tr>
            ))}
        </tbody>
      </table>
      ):(
        <div className="alert alert-warning" role="alert">Brak pracowników spełniających kryteria</div>
      )}
      



    </div>
  )
}

export default App
