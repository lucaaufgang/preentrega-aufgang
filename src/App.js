import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from ".//components/NavBar/NavBar";
import ItemListConteiner from './components/itemListContainer/itemListContainer';
import itemDetailContainer from './components/itemDetailContainer/itemDetailContainer'

function App(){
    return(
        <div className="apps">
            <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<itemlistcontainer />}/>
                <Route path='/category/:categoryId' element={<itemlistcontainer />}/>
                <Route path='/item/:itemId' element={<itemDetailcontainer />}/>
                <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );

}


export default App;