import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import React, { useState, useEffect } from 'react';
import { Wheel } from 'react-custom-roulette';
import useSound from 'use-sound';

import ahn from './sounds/ahn.mp3';

const data = [
    { option: 'F', style: { backgroundColor: '#262423', textColor: 'white' } },
    { option: '1 Sub pro Chat', style: { backgroundColor: '#DB1F47', textColor: 'white' } },
    { option: '1 Sub para Você', style: { backgroundColor: '#D89A43', textColor: 'white' } },
    { option: '3k no CoW', style: { backgroundColor: '#2F3470', textColor: 'white' } },
    { option: '1 Sub pro Chat', style: { backgroundColor: '#DB1F47', textColor: 'white' } },
    { option: 'F', style: { backgroundColor: '#262423', textColor: 'white' } },
    { option: '1k no CoW', style: { backgroundColor: '#2A3A59', textColor: 'white' } },
    { option: '1 Sub pro Chat', style: { backgroundColor: '#DB1F47', textColor: 'white' } },
    { option: '2k no CoW', style: { backgroundColor: '#2F5670', textColor: 'white' } },
    { option: '1 Sub para Você', style: { backgroundColor: '#D89A43', textColor: 'white' } }
]

function App() {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [mostrarResultado, setMostrarResultado] = useState(false);

    const [play] = useSound(ahn, {interrupt: true, volume: 0.3});

    useEffect(() => { document.body.style.backgroundColor = '#141414' }, [])

    function girar() {
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        setPrizeNumber(newPrizeNumber);
        setMustSpin(true);
        setMostrarResultado(false);
    }

    function playSound(id) {
        switch (id) {
            default:
                play();
            break;
        }
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
                        radiusLineColor={['#ffffff']}
                        radiusLineWidth={3}
                        onStopSpinning={() => {
                            setMustSpin(false);
                            setMostrarResultado(true);
                            playSound(prizeNumber);
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
