import styles from "./styles.module.css";
import Dropdown from "./Dropdown";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselContainer from "./CarouselContainer";
import { useEffect } from "react";

const Main = () => {
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
				<CarouselContainer/>
		</div>
		
		</body>
	);
};

export default Main;