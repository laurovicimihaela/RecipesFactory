import styles from "./styles.module.css";
import Dropdown from "./Dropdown";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import RecipeCard from "../../Recipe/RecipeCard";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

const Supa = () => {
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
		{name: "Supa crema", duration: "4h", difficulty: "Hard", noOfPortions: "20", img: "https://savoriurbane.com/wp-content/uploads/2017/08/supa-crema-de-legume-reteta-simpla-savori-urbane.jpg"},
		{name: "Ciorba de fasole", duration: "20min", difficulty: "Easy", noOfPortions: "15", img: "https://jamilacuisine.ro/wp-content/uploads/2021/08/Ciorba-de-fasole.jpg"},
		{name: "Ciorba a la grec", duration: "2h", difficulty: "Expert mode", noOfPortions: "3", img: "https://www.lauralaurentiu.ro/wp-content/uploads/2011/12/ciorbafarf.jpg"},
		{name: "Supa crema", duration: "4h", difficulty: "Hard", noOfPortions: "20", img: "https://savoriurbane.com/wp-content/uploads/2017/08/supa-crema-de-legume-reteta-simpla-savori-urbane.jpg"},
		{name: "Ciorba de fasole", duration: "20min", difficulty: "Easy", noOfPortions: "15", img: "https://jamilacuisine.ro/wp-content/uploads/2021/08/Ciorba-de-fasole.jpg"},
		{name: "Ciorba a la grec", duration: "2h", difficulty: "Expert mode", noOfPortions: "3", img: "https://www.lauralaurentiu.ro/wp-content/uploads/2011/12/ciorbafarf.jpg"},
	
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

export default Supa;