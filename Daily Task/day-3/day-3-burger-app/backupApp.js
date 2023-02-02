/**Library */
import { useState } from "react";
/**Components */

/**Asset */
import './App.css';
import Navbar from "./components/navbar";
import ModulTitle from "./components/modul_title";

export default function App() {
	//state
	// const [brandName,brandNameSet] = useState('brand_logo');
	const [namaModul,namaModulSet] = useState('Modul');
	
	//function
	const modulChanger = (val)=>{
		namaModulSet = 'pindah_modul';
	}


	return (
    <div className="App">
		{/* yang dipanggin namenya bukan brandName aka propertiesnya */}
		<Navbar>
		</Navbar>
		<ModulTitle 
			modulChange={modulChanger}
			name = {namaModul}
			// onClickHandler = {(val)=>(
			// 	namaModulSet(val)
			// )}
		/>
		<button>
			Ubah
		</button>
    </div>
	);
}

// export default App; 

