import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import React, { useState, useEffect } from 'react'
import { Wheel } from 'react-custom-roulette';

const data = [
    { option: '1 Sub pro Chat', style: { backgroundColor: 'blue', textColor: 'white' } },
    { option: '1 Sub para Você', style: { backgroundColor: 'blue', textColor: 'white' } },
    { option: '3k no CoW', style: { backgroundColor: 'blue', textColor: 'white' } },
    { option: '1 Sub pro Chat', style: { backgroundColor: 'blue', textColor: 'white' } },
    { option: '1k no CoW', style: { backgroundColor: 'blue', textColor: 'white' } },
    { option: '2k no CoW', style: { backgroundColor: 'blue', textColor: 'white' } },
    { option: '1k no CoW', style: { backgroundColor: 'blue', textColor: 'white' } },
    { option: '1 Sub pro Chat', style: { backgroundColor: 'blue', textColor: 'white' } },
    { option: '5k no CoW', style: { backgroundColor: 'blue', textColor: 'white' } },
    { option: '1 Sub para Você', style: { backgroundColor: 'blue', textColor: 'white' } }
]

function App() {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [mostrarResultado, setMostrarResultado] = useState(false);

    useEffect(() => { document.body.style.backgroundColor = '#141414' }, [])

    function girar() {
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        setPrizeNumber(newPrizeNumber);
        setMustSpin(true);
        setMostrarResultado(false);
    }
    
    return (
        <div className="container">
            <div className="mt-4 row">
                <div className="d-flex justify-content-center">
                    <Wheel
                        mustStartSpinning={mustSpin}
                        prizeNumber={prizeNumber}
                        data={data}
                        backgroundColors={['#3e3e3e', '#df3428']}
                        textColors={['#ffffff']}
                        outerBorderColor={['#ffffff']}
                        outerBorderWidth={3}
                        onStopSpinning={() => {
                            setMustSpin(false);
                            setMostrarResultado(true);
                        }}
                    />
                </div>
            </div>
            <div className="mt-4 d-flex justify-content-center">
                <button className="btn btn-lg btn-light" onClick={girar}>Dale!</button>
            </div>
            <div className="mt-4 d-flex justify-content-center" style={{color: "white"}}>
                <h1>{(mostrarResultado === false) ? ("") : (data[prizeNumber].option)}</h1>
            </div>
        </div>
    );
}

export default App;
