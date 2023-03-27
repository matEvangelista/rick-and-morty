import { CardItSelf } from "../styles";
export default function CardCharacter({ name, image, status, gender, species, origin}) {
    return (
        <CardItSelf gender={gender} status={status}>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <h2>Species: {species}</h2>
            <h2>
                Gender: <span className="gender">{gender}</span>
            </h2>
            <h2>
                Status: <span className="status">{status}</span>
            </h2>
            <h2>
                Origin: <span>{origin}</span>
            </h2>
        </CardItSelf>
    );
}
