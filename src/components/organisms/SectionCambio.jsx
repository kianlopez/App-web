import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import Dropdown from "../molecules/Selection";
import './SectionCambio.css';

const API_KEY = "049334f4152e02b126a2fa5b";
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

function SectionCambio() {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [currencies, setCurrencies] = useState([]);
    const [exchangeRate, setExchangeRate] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                setCurrencies(Object.keys(data.conversion_rates));
                setExchangeRate(data.conversion_rates);
            })
            .catch(error => console.error("Error fetching data: ", error));
    }, []);

    const handlerClick = (event) => {
        const rate = exchangeRate[toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        Swal.fire({
            title: "Conversion ",
            text: `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`,
        });
    }

    return (
        <div id="cambio_section">
            <Field type="number" placeholder="Introduzca cantidad" text="Cantidad a convertir" val={amount} fnVal={setAmount}/>
            <Dropdown options={currencies} val={fromCurrency} fnVal={setFromCurrency}/>
            <Dropdown options={currencies} val={toCurrency} fnVal={setToCurrency}/>
            <Button title="Convertir" onclick={handlerClick}/>
        </div> 
    );
}

export default SectionCambio;