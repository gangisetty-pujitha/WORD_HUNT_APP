import {React} from "react";
import {useEffect,useState} from 'react';
import axios from 'axios';
import Header from "./Header";
import './Dictionary.css';
import languages from "./Language/languages";
import DisplayDef from "./DisplayDef";
import Switch from '@mui/material/Switch';

import { createTheme, ThemeProvider } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';


    
function Dictionary()
{
    const [words,setWords]=useState([]);
    const [lang,setLang]=useState("en");

    const [means,setMeans]=useState([]);
    const [LightTheme, setLightTheme] = useState(false);
    const PinkSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: grey[600],
          '&:hover': {
            backgroundColor: alpha(grey[600], theme.palette.action.hoverOpacity),
          },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: grey[600],
        },
      }));
      
      
    
    const api=async()=>
    {
        try{
       const dictionaryapi= await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${lang}/${words}`);
       
       setMeans(dictionaryapi.data);
       console.log(means);
        }
        catch(error)
        {
            console.log("An error occured",error);
        }
}
useEffect(()=>
{
  api();

},[words,lang])

return(
    
    <div className="dictionary" style={{backgroundColor:LightTheme?"#fff": "#242124",color:LightTheme?"black":"white",transition:"all 0.5s linear"}}>
   
        <div style={{ position: "absolute", top: 0, right: 30, paddingTop: 10 }}>
        <span>{LightTheme ? "Dark" : "Light"} Mode</span>
        <PinkSwitch checked={LightTheme} onChange={()=>setLightTheme(!LightTheme)} defaultChecked />
        </div>
    
       <Header lang={lang} setLang={setLang} words={words} setWords={setWords} LightTheme={LightTheme}/>
       {means&&<DisplayDef words={words} means={means} lang={lang} LightTheme={LightTheme}></DisplayDef>}
    
        
    </div>
)
}
export default Dictionary;