import styles from "./styles.module.css";
import Dropdown from "./Dropdown";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import RecipeCard from "../../Recipe/RecipeCard";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

const Desert = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location='/';
	};
	const handleMyPage = () => {
		window.location = "/mypage";
	};
	const handleSavedOnes= () => {
		window.location = "/savedones";
	};
	const handleMicDejun= () => {
		window.location = "/micdejun";
	};
	const handleFelPrincipal= () => {
		window.location = "/felprincipal";
	};
	const handleSupa= () => {
		window.location = "/supa";
	};
	const handleDesert= () => {
		window.location = "/desert";
	};
	const [selected, setSelected] = useState("Categorii");
	const [selected1, setSelected1] = useState("Contul meu");
	const options = ["Mic Dejun", "Fel Principal", "Supă", "Desert"];
	const options1 = ["Salvate", "Profilul meu"];

	let Recipes_data= [
		{name: "Tort", duration: "4h", difficulty: "Hard", noOfPortions: "20", img: "https://www.cofetariaarmand.ro/foto_big/3306_1.jpg"},
		{name: "Clatite", duration: "20min", difficulty: "Easy", noOfPortions: "15", img: "https://savoriurbane.com/wp-content/uploads/2019/10/Clătite-pufoase-și-fragede-cea-mai-simplă-rețetă-care-nu-dă-greș-savori-urbane.jpg"},
		{name: "Baclava", duration: "2h", difficulty: "Expert mode", noOfPortions: "3", img: "https://jamilacuisine.ro/wp-content/uploads/2018/02/Baclava-turceasca-500x478.jpg"},
		{ name: "Pavlova", duration: "4h", difficulty: "Hard", noOfPortions: "20", img: "https://tastebazaar.ro/wp-content/uploads/2021/01/mini-pavlova-2-680x900.jpg"},
		{ name: "Cheesecake", duration: "50min", difficulty: "Medium", noOfPortions: "20", img: "https://tastebazaar.ro/wp-content/uploads/2021/04/cheesecake-fara-coacere-cu-dulceata-de-fragi-3-680x900.jpg"},
		{ name: "Rulada", duration: "1h", difficulty: "Medium", noOfPortions: "18", img: "https://tastebazaar.ro/wp-content/uploads/2019/11/rulada-de-bezea-8-680x900.jpg"},
	
	]
	useEffect = () => {
		if(selected1 === "Profilul meu")
			handleMyPage()
		else if(selected1 === "Salvate")
			handleSavedOnes()
		else if(selected === "Mic Dejun")
			handleMicDejun()
		else if(selected === "Desert")
			handleDesert()
		else if(selected === "Fel Principal")
			handleFelPrincipal()
		else if(selected === "Supa")
			handleSupa()
		
	}
	return (
		
		<body>
			<nav className={styles.navbar}>
				<h1>The Recipes Factory</h1>
				<div className={styles.allign2}>
				<Dropdown selected={selected} setSelected={setSelected} options={options}/>
				</div>

				<div className={styles.allign1}>
				<Dropdown selected={selected1} setSelected={setSelected1} options={options1}/>
				</div>

				<button className={styles.white_btn} onClick={handleLogout}>
					Log out
				</button>

			</nav>
		<div className={styles.container}>
		<Container>    
			<Grid container >
			
			{Recipes_data.map((element, index) => (
				<Grid item key={index} maxHeight={220} maxWidth={200} margin={11}>
				<RecipeCard {...element} />
				</Grid>
			))}
			</Grid>
		</Container>
		</div>
		
		</body>
	);
};

export default Desert;