import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singleRecipe.css";

export default function SingleRecipe() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [recipe, setRecipe] = useState({});
    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getRecipe = async () => {
            const res = await axios.get("/posts/" + path);
            setRecipe(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getRecipe();
    }, [path]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${recipe._id}`, {
                data: { username: user.username },
            });
            window.location.replace("/");
        } catch (err) { }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${recipe._id}`, {
                username: user.username,
                title,
                desc,
            });
            setUpdateMode(false)
        } catch (err) { }
    };

    return (
        <div className="singleRecipe">
            <div className="singleRecipeWrapper">
                {recipe.photo && (
                    <img src={PF + recipe.photo} alt="" className="singleRecipeImg" />
                )}
                {updateMode ? (
                    <input
                        type="text"
                        value={title}
                        className="singleRecipeTitleInput"
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                    />
                ) : (
                    <h1 className="singleRecipeTitle">
                        {title}
                        {Recipe.username === user?.username && (
                            <div className="singleRecipeEdit">
                                <i
                                    className="singleRecipeIcon far fa-edit"
                                    onClick={() => setUpdateMode(true)}
                                ></i>
                                <i
                                    className="singleRecipeIcon far fa-trash-alt"
                                    onClick={handleDelete}
                                ></i>
                            </div>
                        )}
                    </h1>
                )}
                <div className="singleRecipeInfo">
                    <span className="singleRecipeAuthor">
                        Author:
                        <Link to={`/?user=${recipe.username}`} className="link">
                            <b> {recipe.username}</b>
                        </Link>
                    </span>
                    <span className="singleRecipeDate">
                        {new Date(recipe.createdAt).toDateString()}
                    </span>
                </div>
                {updateMode ? (
                    <textarea
                        className="singleRecipeDescInput"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                ) : (
                        <p className="singleRecipeDesc">{desc}</p>
                )}
                {updateMode && (
                    <button className="singleRecipeButton" onClick={handleUpdate}>
                        Update
                    </button>
                )}
            </div>
        </div>
    );
}