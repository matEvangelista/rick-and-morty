import styled from "styled-components";

export const HeaderStyled = styled.div`
    background-color: darkgreen;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    img {
        width: 10rem;
    }
    .logo-button-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button {
        height: 2rem;
        display: none;
        flex-direction: column;
        justify-content: space-around;
        background-color: inherit;
        border: none;
        .button-line {
            width: 2rem;
            height: .2rem;
            border-radius: 10px;
            background-color: white;
        }
    }
    .options-container {
        display: flex;
        gap: 1rem;
        width: 80%;
        max-width: 1200px;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        color: white;
        padding: 10px 0;
    }
    .options-container input[type="text"] {
        padding: 10px;
        border-radius: 10px;
        border: none;
        min-width: 14rem;
        font-size: .8rem;
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
        justify-content: space-between;
        width: max-content;
    }

    select {
        margin-left: 1rem;
        font-size: .8rem;
        padding: 10px;
        border-radius: 10px;
        background-color: lightgreen;
        option {
            margin: 10px;
        }
    }

    @media screen and (max-width: 900px) {
        .logo-button-container {
            width: 90%;
            align-self: center;
        }
        button {
            display: flex;
            div:nth-child(1) {
                transform-origin: top left;
                transform: ${props=> props.clicked ? "rotate(45deg)" : "none"};
            }
            div:nth-child(2) {
                opacity: ${props=> props.clicked ? 0 : 1};
            }
            div:nth-child(3) {
                transform-origin: bottom left;
                transform: ${props=> props.clicked ? "rotate(-45deg)" : "none"};
            }
        }
        flex-direction: column;
        .options-container {
            display: ${props => props.clicked ? "flex" : "none"};
            flex-direction: column;
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
        font-size: 1.5rem;
    }
    h2 {
        font-size: 1rem;
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
    background-color: rgb(23, 12, 55);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    img {
        width: 100%;
        max-width: 300px;
    }
`;

export const CardContainer = styled.section`
    display: grid;
    margin-top: 4rem;
    grid-template-columns: repeat(3, 1fr);
    gap: .5rem;
    padding: 2rem 0;
    min-height: 100vh;
    width: 95%;
    max-width: 1200px;
    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
