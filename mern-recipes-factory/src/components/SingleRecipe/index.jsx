//single recipe index
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singleRecipe.css";
import Dropdown from "../Main/Dropdown";
import styles from "../Main/styles.module.css";

export default function ShowRecipe() {

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };
    const [selected, setSelected] = useState("Categorii");
    const [selected1, setSelected1] = useState("Contul meu");
    const options = ["Mic Dejun", "Fel Principal", "Supă", "Desert"];
    const options1 = ["Salvate", "Profilul meu"];

    return (
        <body>
            <nav className={styles.navbar}>
                <h1>The Recipes Factory</h1>
                <div className={styles.allign2}>
                    <Dropdown selected={selected} setSelected={setSelected} options={options} />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>

                <div className={styles.allign1}>
                    <Dropdown selected={selected1} setSelected={setSelected1} options={options1} />
                    <br />
                    <br />
                </div>

                <button className={styles.white_btn} onClick={handleLogout}>
                    Log out
                </button>

            </nav>

            <div className="recipe">
                <div className="recipe_space1">
                    <div className="recipe_spaceTop">
                        <h6> Timp de preparare: 45 min &nbsp;&nbsp;&nbsp;2 portii&nbsp;&nbsp;&nbsp;Medium</h6>
                    </div>
                    <div className="recipe_space2">
                        <div className="recipe_spaceLeft">
                            <br></br>
                            <br></br>
                            <p><h1> Oua Benedict</h1></p>
                            <div className="photo" >
                            
                        
                                <div className="recipe_spaceMiddle">
                                    <h4>Ingrediente:</h4>
                                    <p>4 oua</p>
                                    <p>2 briose englezesti (sau 2 chifle moi)</p>
                                    <p>8 felii de bacon fin feliat</p>
                                    <p>cateva fire de ceapa ciorii (sau ceapa verde) fin tocate pt. presarat</p>
                                    <p>1 pahar de 150 ml. cu otet</p>
                                    <div className="recipe_spaceRight">
                                        <p>1 lingura rasa de sare</p>
                                        <p> sos olandez:</p>
                                        <p>2 galbenusuri</p>
                                        <p>2-3 linguri de zeama de lamaie (sau cat va place, eu am pus zeama de la 1/2 de lamaie)</p>
                                        <p>    1 praf de sare</p>
                                        <p>   125 de grame de unt topit</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="recipe_spaceBottom">
                            <h4>Mod de preparare:</h4>
                            <p>Pe fiecare briosa prajita se aseaza felii de bacon prajit, dupa ce s-a uns cu 1 lingurita de sos (sau cu unt, dar mie mi s-a parut ca e destul unt in reteta asta).</p>
                            <p>Deasupra de bacon se aseaza  cu grija cate 1 ou fiert.</p>
                            <p>Se acopera sandvisurile astfel asamblate cu sos olandez din belsug si se presara cu ceapa ciorii (eu am avut doar ceapa verde) fin tocata.</p>
                            <p>Se servesc imediat, cate doua la o portie si pentru cele 5-6 minute cat dureaza ca sa imbuci cu mare pofta minunatia, chiar ca te simti un lord!</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}