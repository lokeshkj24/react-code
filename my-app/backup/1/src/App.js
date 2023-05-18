// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import About from './components/About';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import Alert from './components/Alert';

function App() {
	const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
    const [alert, setAlert] = useState(null);
    const [themeColor, setThemeColor] = useState('white');

 
    const changeThemeColor = (event) =>{
        

        let onChangeColor = event.target.value;
        
        let darkBgcolor = '#fff';
        let lightBgcolor = '#fff';

        if(onChangeColor === 'lightgray'){
            darkBgcolor = '#bbb4b4d6';
            lightBgcolor = '#e5e1e1d6';
        }else if(onChangeColor === 'darkgray'){
            darkBgcolor = '#767373';
            lightBgcolor = '#c3bfbf';
        }else if(onChangeColor === 'green'){
            darkBgcolor = '#324a32';
            lightBgcolor = '#99ad99';
        }else if(onChangeColor === 'blue'){
            darkBgcolor = '#363b4e';
            lightBgcolor = '#8e95b1';
        }else if(onChangeColor === 'red'){
            darkBgcolor = '#582f2f';
            lightBgcolor = '#c78080';
        }else if(onChangeColor === 'orange'){
            darkBgcolor = '#896c38';
            lightBgcolor = '#ddc599';
        }else if(onChangeColor === 'white'){
            darkBgcolor = '#fff';
            lightBgcolor = '#fff';
        }

        setThemeColor({
            darkBgcolor:darkBgcolor,
            lightBgcolor:lightBgcolor
        });

        if(onChangeColor === 'white'){
            setMode('light');
            document.getElementById('flexSwitchCheckDefault').checked= false;
        }
    }

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

    const toggleMode = () =>{
        if(mode === 'dark'){
            setMode('light');
            //document.body.style.backgroundColor = 'white';
            //document.body.style.color = 'black';
            showAlerts("Light Mode has been enabled!", 'success');
        }else{
            setMode('dark');
            //document.body.style.backgroundColor = '#363b4e';
            //document.body.style.color = 'white';
            showAlerts("Dark Mode has been enabled!", 'success');
        }
    }


  return (
    <div className='container-fluid main_container' style={{backgroundColor: mode==='light'?'white':themeColor.darkBgcolor, color: mode==='light'?'black':'white'}}>
        <Navbar themeColor={themeColor} changeThemeColor={changeThemeColor} appTitle="Hcl React" aboutText="About Us" homeText="Home" searchText="Search" mode={mode} toggleMode={toggleMode}/>
		<Alert alert={alert}/>
        <div className='container my-3'>
          <TextForm themeColor={themeColor} showAlerts={showAlerts} heading="Enter The Text To Analyze Below" mode={mode} toggleMode={toggleMode} />
		    </div>
		<hr /> 
        <div className='container my-3'>
			 <About /> 
		</div>
            
      
    </div>
  );
}

export default App;
