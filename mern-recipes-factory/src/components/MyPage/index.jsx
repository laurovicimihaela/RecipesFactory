import styles from "./styles.module.css";
import Dropdown from "./Dropdown";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";

const MyPage = () => {
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
	const handleWriteRecipe = () => {
		window.location = "/writeRecipe";
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
            <div className={styles.carousel} margin="auto">
        <Card sx={{ maxWidth: 1000, maxHeight: 700, minHeight: 500, border: 1, borderColor: "white", margin: "auto", marginTop:"200px"}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="450"
          image="https://cdn.newsapi.com.au/image/v1/2d1864c1cb076fe6e9432e6933acb068"
        />
        <CardContent>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography gutterBottom variant="h5">
               
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Typography variant="subtitle1" color="text.primary">
                Nume:
              </Typography>
              <Typography variant="subtitle1" color="text.primary">
                Veronica Micle
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Typography variant="subtitle1" color="text.primary">
                Email: 
              </Typography>
              <Typography variant="subtitle1" color="text.primary">
              vero@mail.com
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        
      </Card>
        </div>
			</div>
			<button className="writeSubmit" onClick={handleWriteRecipe}>
				Write a recipe
			</button>
		</body>
	);
};


export default MyPage;