import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import { CardContainer, CardsContainer, Everything } from "./styles";
import APIPage from "./components/APIPage";

function App() {
    const [headerData, setHeaderData] = useState({
        gender: "everything",
        status: "everything",
        text: "",
    });
    const [dataAPI, setDataAPI] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const arr = Array.from({ length: 42 }, (_, index) => index + 1);

    function displayStuff(i) {
        return <APIPage index={i} conditions={headerData} />;
    }

    return (
        <>
            <Header onQuery={setHeaderData} />
            <Everything>
                <CardContainer>{arr.map(displayStuff)}</CardContainer>
            </Everything>
        </>
    );
}

export default App;
