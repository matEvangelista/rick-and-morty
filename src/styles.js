import styled from "styled-components";

export const HeaderStyled = styled.div`
    background-color: darkgreen;
    width: 100%;
    position: fixed;
    top: 0;
    .options-container {
        display: flex;
        gap: 1rem;
        width: 80%;
        max-width: 1200px;
        margin: 0 auto;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        color: white;
        padding: 10px 0;
    }
    .options-container input[type="text"] {
        padding: 10px;
        border-radius: 10px;
        border: none;
        background-color: lightgreen;
        ::placeholder {
            color: darkgreen;
        }
        :focus {
            outline: none;
            box-shadow: 0px 0px 5px lightgreen;
        }
    }

    .options {
        display: flex;
        align-items: center;
    }

    select {
        padding: 10px;
        border-radius: 10px;
        background-color: lightgreen;
        option {
            margin: 10px;
        }
    }
`;

function colorGender(gender) {
    let result;
    switch (gender[0]) {
        case "M":
            result = "rgb(26, 147, 190)";
            break;
        case "F":
            result = "pink";
            break;
        default:
            result = "gray";
            break;
    }
    return result;
}

function colorStatus(status) {
    let result;
    switch (status[0]) {
        case "A":
            result = "green";
            break;
        case "D":
            result = "red";
            break;
        default:
            result = "gray";
            break;
    }
    return result;
}

export const CardItSelf = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #22262a;
    color: white;
    border-radius: 10px;
    box-shadow: 0 0 5px black;
    padding: 1rem;
    text-align: center;
    h2:first-child {
        font-size: 2rem;
    }
    .gender {
        color: ${(props) => colorGender(props.gender)};
    }
    .status {
        color: ${(props) => colorStatus(props.status)};
    }
    img {
        border-radius: 50%;
        margin-top: 1rem;
        max-width: 300px;
    }
`;

export const Everything = styled.section`
    background-color: rgb(12, 55, 19);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 3rem;
    img {
        width: 100%;
        max-width: 700px;
    }
`;

export const CardContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    padding: 2rem 0;
    margin-top: 1rem;
    min-height: 100vh;
    width: 95%;
    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
