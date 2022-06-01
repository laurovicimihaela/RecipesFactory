import styles from "./styles.module.css";
import Dropdown from "./Dropdown";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import RecipeCard from "../Recipe/RecipeCard";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

const SavedOnes = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
	const handleMyPage = () => {
		window.location = "/mypage";
	}
	const handleSavedOnes= () => {
		window.location = "/savedones";
	}
	const [selected, setSelected] = useState("Categorii");
	const [selected1, setSelected1] = useState("Contul meu");
	const options = ["Mic Dejun", "Fel Principal", "Supă", "Desert"];
	const options1 = ["Salvate", "Profilul meu"];

	let Recipes_data= [
		{name: "Sarmale", duration: "4h", difficulty: "Hard", noOfPortions: "20", img: "https://adygio.com/wp-content/uploads/2020/06/Sarmale-cu-ton-sau-orice-peste-sarmale-Balamuc-cu-varza-murata-500x500.jpg"},
		{name: "Clatite", duration: "20min", difficulty: "Easy", noOfPortions: "15", img: "https://savoriurbane.com/wp-content/uploads/2019/10/Clătite-pufoase-și-fragede-cea-mai-simplă-rețetă-care-nu-dă-greș-savori-urbane.jpg"},
		{name: "Coaste", duration: "2h", difficulty: "Expert mode", noOfPortions: "3", img: "https://www.unileverfoodsolutions.ro/dam/global-ufs/mcos/see/romania/calcmenu/recipes/RO-recipes/red-meats-&-red-meat-dishes/coaste-vitel-cu-sos-barbeque-si-legume-cu-ghimbir/main-header.jpg"},
		{name: "Sarmale", duration: "4h", difficulty: "Hard", noOfPortions: "20", img: "https://adygio.com/wp-content/uploads/2020/06/Sarmale-cu-ton-sau-orice-peste-sarmale-Balamuc-cu-varza-murata-500x500.jpg"},
		{name: "Clatite", duration: "20min", difficulty: "Easy", noOfPortions: "15", img: "https://savoriurbane.com/wp-content/uploads/2019/10/Clătite-pufoase-și-fragede-cea-mai-simplă-rețetă-care-nu-dă-greș-savori-urbane.jpg"},
		{name: "Coaste", duration: "2h", difficulty: "Expert mode", noOfPortions: "3", img: "https://www.unileverfoodsolutions.ro/dam/global-ufs/mcos/see/romania/calcmenu/recipes/RO-recipes/red-meats-&-red-meat-dishes/coaste-vitel-cu-sos-barbeque-si-legume-cu-ghimbir/main-header.jpg"},
		
	]
	useEffect = () => {
		if(selected1 === "Profilul meu")
			handleMyPage()
		else if(selected1 === "Salvate")
			handleSavedOnes()
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
				<Grid item key={index} maxHeight={200} maxWidth={200} margin={10}>
				<RecipeCard {...element} />
				</Grid>
			))}
			</Grid>
		</Container>
		</div>
		
		</body>
	);
};

export default SavedOnes;