import {Routes,Route} from "react-router-dom";
import Formpage from "./newone";
import MyApp from "./nav";

function NewApp(){
    return(
        <div className="App">
            <Routes>
                <Route path="/"element={<MyApp/>}/>
                <Route path="/form"element={<Formpage/>}/>
            </Routes>
        </div>
    );
}

export default NewApp;