// import Box from './components/Card';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';



function App() { 
  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type )=>{
   setAlert({
    msg:message,
    type:type
   })

  setTimeout(()=>{
    setAlert(null);
  },3000)
  }

 
  function togglemode(){
    // document.body.classList.remove('bg-'+cls);
    // document.body.classList.add('bg-'+cls);
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#0a244a';
      // document.body.style.color='white';
      showAlert("This is darkmode alert","success");
      
    }else{
      setMode('light');
      document.body.style.backgroundColor="white";
     
      showAlert("This is lightmode alert","success");
    
      
    }
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-dark');
  }

  const palleteColor=()=>{
    console.log("hello");
removeBodyClasses();
setMode(
'dark'
)
  }
  



  return (
    <>
    <Navbar title="TextUtils" about="About" enableDarkmode={togglemode}  mode={mode} pallete={palleteColor}/>

    <Alert alert={alert}/>
    <div className="container ">
    <TextForm  showAlert={showAlert} mode={mode} heading="Try TextUtils - Word counter,Character counter,Remove extra spaces"/>







    </div>
    
   


</>
  );
    }

export default App;
