import { useState } from "react";

const Cat = () => {
    const [cat, setCat] = useState({name: 'Dexter', year: 5})

    // ...cat, hace una copia como esta. el setcat year: sobreescribe el valor (primera opcion)
    const handleClick = () => {
        // setCat({...cat, year: cat.year + 1})

        // (segunda opcion) funcion de callback
        setCat((prev) => ({...prev, year: cat.year + 1}))
    }

    return (
        <>
        <h2>{cat.name} - {cat. year}</h2>
        <button onClick={ handleClick } className="btn btn-dark mb-2">Update year</button>
        </>
    );
}
export default Cat;