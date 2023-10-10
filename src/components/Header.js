//import { TextField, ThemeProvider ,MenuItem,InputLabel} from '@mui/material';
//import {createTheme} from '@mui/material/styles';
import './Header.css';
import languages from './Language/languages';
function  Header({lang,setLang,words,setWords,LightTheme})
{
   /* const darkTheme=createTheme({
        palette:{
            primary:{
                main:'#fff',

            },
            type:"dark",
        },
    });
    const labelStyle={
        color:"white"
    }
    
  const menuItemStyle = {
    color: 'black', // Set the text color to white
  };*/
  const handleChange=(language)=>{
    setLang(language);
    setWords("");
  

  }

    return(
        <div className="header-section">
            <span className="title" style={{color:LightTheme?"#3b5360":"white"}}>WORD HUNT</span>
            <div className="inp">
                <div className="text-field">
            <input
          type="text"
          className="input-text"
          //value={words}
          style={{color:LightTheme?"black":"white"}}
          onChange={(e)=>setWords(e.target.value)}
        />
        
        <span className="search" style={{color:LightTheme?"#3b5360":"white",fontWeight:LightTheme?"bold":"normal"}} >Search a Word</span>
        
        <i style={{background:LightTheme?"black":"white"}}></i>
        </div>
        <div className="selectItem">
          
        <select className="select-style" style={{backgroundColor:LightTheme?"#3b5360":"#353935",border:LightTheme?"2px solid #3b5360":"2px solid white",color:LightTheme?"white":"white"}} value={lang} onChange={(e)=>handleChange(e.target.value)} >
           {
            languages.map((p)=>
            
                <option key={p.label} value={p.label}>{p.value}</option>
            )
           }
        </select>
        </div>
            </div>
        </div>
    )

}
export default Header;