import { useContext, useState } from "react";
import "./write_post.css";
import axios from "axios";
import { Context } from "../../context/Context";
import { Link, useNavigate } from "react-router-dom";

export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const [data, setData] = useState({
        requiedTime: 0,
        numberOfPortions: 0,
        difficulty: "",
        ingredients: "",
        title: "",
        description: "",
        photo: "",
        categories: "",

    });
    const { user } = useContext(Context);
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            requiedTime,
            numberOfPortions,
            difficulty,
            ingredients,
            title,
            description,
            categories,
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
            <form className="writeForm" >
                <div className="top">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
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
                        name="title"
                        value={title}
                        className="writeInput writeTitle"
                        autoFocus={true}
                        //onChange={e => setTitle(e.target.value)}
                        onChange={handleChange}
                    />
                </div>
                <div className="writeFormGroup">
                    <form className="form_container" onSubmit={handleSubmit}>
                        <input
                            placeholder="Time to make it: (mins)"
                            type="text"
                            className="writeInput"
                            //onChange={e => setDesc(e.target.value)}
                            onChange={handleChange}
                        />
                        <input
                            placeholder="Number of portions: "
                            type="text"
                            className="writeInput"
                            //onChange={e => setDesc(e.target.value)}
                            onChange={handleChange}
                        />
                        <input
                            placeholder="Difficulty: "
                            type="text"
                            className="writeInput"
                            //onChange={e => setDesc(e.target.value)}
                            onChange={handleChange}
                        />
                        <input
                            placeholder="Ingredients: "
                            type="text"
                            className="writeInput"
                            //onChange={e => setDesc(e.target.value)}
                            onChange={handleChange}
                        />
                        <input
                            placeholder="Description: "
                            type="text"
                            className="writeInput"
                            //onChange={e => setDesc(e.target.value)}
                            onChange={handleChange}
                        />
                    </form>
                </div>
                <button className="writeSubmit" onClick={handleSubmit}>
                    Publish
                </button>
                <button className="writeSubmit" onClick={handleLogout}>
                    Logout
                </button>
            </form>
        </div>
    );
}