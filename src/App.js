import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from ".//components/NavBar/NavBar";
import ItemListConteiner from './components/itemListContainer/itemListContainer';
import itemDetailContainer from './components/itemDetailContainer/itemDetailContainer'

function App(){
    return(
        <div className="apps">
            <BrowserRouter>
            <CartProvider>
            <NavBar />
            <Routes>
                <Route path='/' element={<itemlistcontainer />}/>
                <Route path='/category/:categoryId' element={<itemlistcontainer />}/>
                <Route path='/item/:itemId' element={<itemDetailcontainer />}/>
                <Route path='/cart' element={<cart />} />
                <Route path='/checkout' element={<checkout />} />
                <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
            </CartProvider>
            </BrowserRouter>
        </div>
    );

}


export default App;