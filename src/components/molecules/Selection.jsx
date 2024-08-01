import styled from "styled-components";

const SelectStyled = styled.select`
    width: 100%;
    height: 40px;
    border: 1px gray solid;
    border-radius: 5px;
    font-size: 20px;
    color: #0308a3;
    padding: 0 10px;
`;

function Selection(props) {
    const handlerOnChange = (event) => {
        props.fnVal(event.target.value);
    }

    const isFavorite = (currency) => {
        return ['USD', 'EUR', 'MXN'].includes(currency);
    }

    return (
        <SelectStyled value={props.val} onChange={handlerOnChange}>
            {props.options.map(option => (
                <option key={option} value={option}>
                    {option} {isFavorite(option) && '★'}
                </option>
            ))}
        </SelectStyled>
    );
}

export default Selection;