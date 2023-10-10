import './DisplayDef.css';
function DisplayDef({words,means,lang,LightTheme})
{
    return(
       <div className="meanings">
        {
          means[0]&&words&&lang==='en'&&(
            <audio src={means[0].phonetics[0]&&means[0].phonetics[0].audio} style={{backgroundColor:'#fff',borderRadius:10}} controls>
              You Browser doesnot support audio
            </audio>
          )

        }
     {
        words==""?(<span className="sub-title" style={{color:LightTheme?"#3b5360":"white"}}><center>Enter a word to search....</center></span>):
        (
means.map((mean)=>mean.meanings.map((item)=>(item.definitions.map((def)=>(<div className="singleMean" style={{backgroundColor:LightTheme?"#3b5360":"white",color:LightTheme?"white":"black"}}>

<b>{def.definition}</b>
<hr style={{backgroundColor:"black",width:"100%"}} />
{
  def.example&&(
    <span><b>Example:</b>{def.example}</span>
  )
}

{
  def.synonyms&&<span><b>Synonyms:</b>{def.synonyms.map((s)=>`${s}, `)}</span>
}

</div>))))
        ))
     }
       </div>
    )
}
export default DisplayDef;