import { useState, useEffect } from "react";
import { CardContainer } from "../styles";
import CardCharacter from "./CardCharacter";

export default function ({ index, conditions }) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${index}`)
            .then((resp) => resp.json())
            .then((dataResp) => {
                setData(dataResp.results);
                setLoading(false);
            })
            .catch((err) => {
                alert(err);
                setError(err);
            });
    }, []);

    function filtersCards(data) {
        return (
            (conditions.gender === "everything"
                ? true
                : conditions.gender === data.gender) &&
            (conditions.status === "everything"
                ? true
                : conditions.status === data.status) &&
            data.name
                .toLowerCase()
                .includes(conditions.text.toLowerCase().trim())
        );
    }

    function createsCards(val) {
        return (
            <CardCharacter
                name={val.name}
                status={val.status}
                gender={val.gender}
                image={val.image}
                species={val.species}
                origin={val.origin.name}
            />
        );
    }

    if (loading) return <h1>Wait...</h1>;

    return <>{data.filter(filtersCards).map(createsCards)}</>;
}
