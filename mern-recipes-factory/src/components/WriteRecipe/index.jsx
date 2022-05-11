import { useContext, useState } from "react";
import "./writeRecipe.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
    const [title, setTitle] = useState("");
    const [requiredTime, setRequiredTime] = useState("");
    const [numberOfPortions, setNumberOfPortions] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [ingredients, setIngredients] = useState(""); 
    const [file, setFile] = useState(null);

    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            requiredTime,
            numberOfPortions,
            difficulty,
            ingredients,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) { }
        }
        try {
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id);
        } catch (err) { }
    };
    return (
        <div className="write">
            {file && (
                <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
            )}
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                        <i class="material-icons">&#xe439;</i>
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        className="writeInput"
                        autoFocus={true}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder="Required time (minutes): "
                        type="text"
                        className="writeInput writeText"
                        onChange={e => setRequiredTime(e.target.value)}
                    ></textarea>
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder="Number of portions: "
                        type="text"
                        className="writeInput writeText"
                        onChange={e => setNumberOfPortions(e.target.value)}
                    ></textarea>
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder="Level of difficulty: (easy / medium / difficult):"
                        type="text"
                        className="writeInput writeText"
                        onChange={e => setDifficulty(e.target.value)}
                    ></textarea>
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder="List of ingredients: "
                        type="text"
                        className="writeInput writeText"
                        onChange={e => setIngredients(e.target.value)}
                    ></textarea>
                </div>
                <button className="writeSubmit" type="submit">
                    Publish
                </button>
            </form>
        </div>
    );
}