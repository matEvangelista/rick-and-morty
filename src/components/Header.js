import { useEffect, useState } from "react";
import { HeaderStyled } from "../styles";

export default function Header({ onQuery }) {
    const [gender, setGender] = useState("everything");
    const [status, setStatus] = useState("everything");
    const [text, setText] = useState("");

    useEffect(() => {
        onQuery({ gender, status, text });
    }, [gender, status, text]);

    return (
        <HeaderStyled>
            <div className="options-container">
                <div className="options">
                    <input
                        type="text"
                        placeholder="Type the name of a character..."
                        onChange={(event) => {
                            setText(event.target.value);
                        }}
                    ></input>
                </div>
                <div className="options">
                    <label htmlFor="gender">Gender:</label>
                    <select
                        name="gender"
                        id="gender"
                        onChange={(event) => {
                            setGender(event.target.value);
                        }}
                    >
                        <option value="everything">Everything</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Unknown">Unknown</option>
                        <option value="Genderless">Genderless</option>
                    </select>
                </div>
                <div className="options">
                    <label htmlFor="status">Status:</label>
                    <select
                        name="status"
                        id="status"
                        onChange={(event) => {
                            setStatus(event.target.value);
                        }}
                    >
                        <option value="everything">Everything</option>
                        <option value="Dead">Dead</option>
                        <option value="Alive">Alive</option>
                        <option value="Unknown">Unknown</option>
                    </select>
                </div>
            </div>
        </HeaderStyled>
    );
}
