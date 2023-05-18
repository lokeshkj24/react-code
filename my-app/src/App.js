// import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import About from './components/About';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Home from './components/Home';


function App() {
	const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
    const [alert, setAlert] = useState(null);
    const [themeColor, setThemeColor] = useState({
                                    darkBgcolor : '#fff',
                                    lightBgcolor : '#fff',
                                    textColor: 'black',
                                    borderColor: 'lightgray'
                                });

    /**
     *@ Set colors for themes to be applied 
     * */
    const setThemeColors = (clrs)=>{
        let darkBgcolor = '#fff';
        let lightBgcolor = '#fff';
        let textColor   = '#fff';
        let borderColor = '#fff';

        if(clrs === 'lightgray'){
            darkBgcolor = '#bbb4b4d6';
            lightBgcolor = '#e5e1e1d6';
        }else if(clrs === 'darkgray'){
            darkBgcolor = '#767373';
            lightBgcolor = '#c3bfbf';
        }else if(clrs === 'green'){
            darkBgcolor = '#324a32';
            lightBgcolor = '#99ad99';
        }else if(clrs === 'blue'){
            darkBgcolor = '#363b4e';
            lightBgcolor = '#8e95b1';
        }else if(clrs === 'red'){
            darkBgcolor = '#582f2f';
            lightBgcolor = '#c78080';
        }else if(clrs === 'orange'){
            darkBgcolor = '#896c38';
            lightBgcolor = '#ddc599';
        }else if(clrs === 'white'){
            darkBgcolor = '#fff';
            textColor = 'black';
            borderColor = 'gray';
        }

        return {
            darkBgcolor:darkBgcolor,
            lightBgcolor:lightBgcolor,
            textColor: textColor,
            borderColor: borderColor
        }
    }

    /**
     * @ Manage Theme Background color and text color for
     */
    const changeThemeColor = (event) =>{
        let onChangeColor  = 'white';

        if(typeof event == 'object'){
            onChangeColor  = event.target.value;
        }else{
            onChangeColor = event;
        }
        setThemeColor(setThemeColors(onChangeColor));
    
        if(onChangeColor === 'white'){
            setMode('light');
            document.getElementById('flexSwitchCheckDefault').checked= false;
        }
    }
    
    /**
     * Set Application Alerts/Messages
     */
    const showAlerts = (message, type) =>{
        setAlert({
            msg: message,
            type: type
        });

        /**
         * @ Remove message auto after 2 Sec
         *  */
        setTimeout(()=>{
            setAlert(null);
        }, 2000);
    }

    /**
     * Set Theme Dark/Light mode on click/switch
     */
    const toggleMode = () =>{
        if(mode === 'dark'){
            setMode('light');
            console.log("-----------a---------------");
            //document.body.style.backgroundColor = 'white';
            //document.body.style.color = 'black';
            document.getElementById('themeModeChage').value = "white";
            setThemeColor({
                darkBgcolor : '#fff',
                lightBgcolor : '#fff',
                textColor: 'black',
                borderColor: 'lightgray'
            });
            showAlerts("Light Mode has been enabled!", 'success');

        }else{
            console.log("-----------b---------------");
            setMode('dark');            
            //document.body.style.backgroundColor = '#363b4e';
            //document.body.style.color = 'white';
            var selectedValue = document.getElementById("themeModeChage").value;
            if(selectedValue !== 'white'){
                changeThemeColor(selectedValue);
            }
            showAlerts("Dark Mode has been enabled!", 'success');
        }
    }

  return (
    <Router>
        <div className='container-fluid main_container' style={{backgroundColor: mode==='light'?'white':themeColor.darkBgcolor, color: mode==='light'?'black':themeColor.textColor}}>
            <Navbar themeColor={themeColor} changeThemeColor={changeThemeColor} appTitle="Hcl React" homePage="Home" aboutText="About Us" textForm="Text Form" searchText="Search" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert} />
            <div className='container my-3'>
                <Routes>
                    {/* exact - attribute- Match exact path of route
                        /users ---> component 1
                        /users/home ---> component 2
                    
                    */}
                    <Route exact path="/textform" element={<TextForm themeColor={themeColor} showAlerts={showAlerts} heading="Enter The Text To Analyze Below" mode={mode} toggleMode={toggleMode} />} />
                    <Route exact path="/about" element={<About themeColor={themeColor} mode={mode} /> }/>
                    <Route exact path="/" element={<Home homeText="Saumy Home" />} />
                 
                </Routes>
            </div>
        </div>
    </Router>
  );
}

export default App;
