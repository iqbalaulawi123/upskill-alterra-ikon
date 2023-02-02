/**Library */

/**Components */
import Daging from './components/isi-burger/daging.js';
import Selada from './components/isi-burger/selada.js';
import Tomat from './components/isi-burger/tomat.js';

/**Asset */
import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

export default function App() {
	// State  
	const [bahan,bahanSet] = useState([]);
	const [harga, hargaSet] = useState(0);
	
	
	// Func
	const ubahBahan = (bahan,harga)=> {
		bahanSet(prev => {
			let contain = [...prev];
			contain.push({bahan,harga});
			return contain;
		})
		hargaSet(prev => prev + harga)
	
	}
    

    

	return (
    <div className="App">
		<div className='container main-container'>
			<div className='burger container g-2 w-50 px-5'>
				<div className='roti roti-atas'></div>
				<div className='bahan d-grid gap-1'>
					{bahan.map((bahan, i) => (
						<>
							{bahan?.bahan ==='daging' && <Daging key={i} />}
							{bahan?.bahan ==='selada' && <Selada key={i} />}
							{bahan?.bahan ==='tomat' && <Tomat key={i} />}
						</>
					))
					}
				</div>
				<div className='roti'></div>
				
			</div>
			<div className='container mt-5 bg-white rounded shadow p-5 w-50'>
				<div className='row'>
					<h3 className='col-12 mb-3'>Menu</h3>
					<div className='col-6 my-2'>
						Daging	
					</div>
					<div className='col-6 my-2 d-grid'>
						<button className='btn btn-primary' onClick={() => ubahBahan('daging', 5000)}>Tambah</button>
					</div>
					<div className='col-6 my-2'>
						Selada	
					</div>
					<div className='col-6 my-2 d-grid'>
						<button className='btn btn-primary' onClick={() => ubahBahan('selada', 1000)}>Tambah</button>
					</div>
					<div className='col-6 my-2'>
						Tomat	
					</div>
					<div className='col-6 my-2 d-grid'>
						<button className='btn btn-primary' onClick={() => ubahBahan('tomat', 2000)}>Tambah</button>
					</div>
				</div>
			</div>
			<div className='container mt-3 bg-danger text-white rounded shadow p-5 w-50'>
				<h5 className='col-12'>Total Harga</h5>
				<h3>{harga}</h3>
			</div>
		</div>

    </div>
	);
}

// export default App; 
