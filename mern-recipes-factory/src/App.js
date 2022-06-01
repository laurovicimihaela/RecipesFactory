import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import WriteRecipe from "./components/WriteRecipe";
import SingleRecipe from "./components/SingleRecipe";
import MyPage from "./components/MyPage";
import SavedOnes from "./components/SavedOnes";
import Desert from "./components/Category/Desert";
import MicDejun from "./components/Category/MicDejun";
import FelPrincipal from "./components/Category/FelPrincipal";
import Supa from "./components/Category/Supa";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main/>} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/mypage" exact element={<MyPage />} />
			<Route path="/savedones" exact element={<SavedOnes />} />
			<Route path="/micdejun" exact element={<MicDejun />} />
			<Route path="/felprincipal" exact element={<FelPrincipal />} />
			<Route path="/supa" exact element={<Supa />} />
			<Route path="/desert" exact element={<Desert />} />
			<Route path="/writerecipe" exact element={<WriteRecipe />} />
			<Route path="/" element={<Navigate replace to="/login" />} />

		</Routes>
	);
}

export default App;