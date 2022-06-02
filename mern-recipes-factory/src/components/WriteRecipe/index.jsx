import { useContext, useState } from "react";
import "./writeRecipe.css";
import axios from "axios";
import { Context } from "../../context/Context";
import Dropdown from "../Main/Dropdown";
import styles from "../Main/styles.module.css";
import Dropdown1 from "./Dropdown1";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Write = () => {
    const [title, setTitle] = useState("");
    const [requiredTime, setRequiredTime] = useState("");
    const [numberOfPortions, setNumberOfPortions] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [file, setFile] = useState(null);

    const { user } = useContext(Context);
    const handleSubmit = () => {
        window.location = "/";
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location = '/';
    };
    const handleMyPage = () => {
        window.location = "/mypage";
    };
    const handleSavedOnes = () => {
        window.location = "/savedones";
    };
    const handleMicDejun = () => {
        window.location = "/micdejun";
    };
    const handleFelPrincipal = () => {
        window.location = "/felprincipal";
    };
    const handleSupa = () => {
        window.location = "/supa";
    };
    const handleDesert = () => {
        window.location = "/desert";
    };

    const [selected, setSelected] = useState("Categorii");
    const [selected1, setSelected1] = useState("Contul meu");
    const [selected2, setSelected2] = useState("Level of difficulty:");
    const options = ["Mic Dejun", "Fel Principal", "Supă", "Desert"];
    const options1 = ["Salvate", "Profilul meu"];
    const options2 = ["", "  Easy", " Medium", "  Hard"];

    useEffect = () => {
        if (selected1 === "Profilul meu")
            handleMyPage();
        else if (selected1 === "Salvate")
            handleSavedOnes();
        else if (selected === "Mic Dejun")
            handleMicDejun();
        else if (selected === "Desert")
            handleDesert();
        else if (selected === "Fel Principal")
            handleFelPrincipal();
        else if (selected === "Supa")
            handleSupa();

    }

    /*const handleSubmit = async (e) => {
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
    };*/
  
    return (

        <body>
            <nav className={styles.navbar}>
                <h1>The Recipes Factory</h1>
                <div className={styles.allign2}>
                    <Dropdown selected={selected} setSelected={setSelected} options={options} />
                </div>

                <div className={styles.allign1}>
                    <Dropdown selected={selected1} setSelected={setSelected1} options={options1} />
                </div>

                <button className={styles.white_btn} onClick={handleLogout}>
                    Log out
                </button>

            </nav>
            <div className="write">
                {file && (
                    <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
                )}
                {!file && (
                    <div className="writeFormGroup">
                        <textarea
                            placeholder="Required time (minutes): "
                            type="text"
                            className="writeInput writeText"
                            onChange={e => setRequiredTime(e.target.value)}
                        ></textarea>
                    </div>
                )}
                <form className="writeForm" onSubmit={handleSubmit}>
                    <div className="writeFormGroup">
                       
                    </div>
                    <div className="writeFormGroup">
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
                            placeholder="List of ingredients: "
                            type="text"
                            className="writeInput writeText"
                            onChange={e => setIngredients(e.target.value)}
                        ></textarea>
                    </div>
                    {!file && (
                        <div className="writeFormGroup writeText writeInput">
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
                        </div>
                    )}
                    <div className="writeFormGroup writeInput writeText">
                        <Dropdown1 selected={selected2} setSelected={setSelected2} options={options2}
                            onChange={e => setDifficulty(e.target.value)}
                        />
                    </div>
                </form>
            </div>
            <button className="writeSubmit" type="submit" onClick={handleSubmit}>
                Publish
            </button>
        </body>
    );
};
export default Write;