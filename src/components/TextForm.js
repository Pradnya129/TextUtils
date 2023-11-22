import React ,{useState} from 'react'


export default function TextForm(props) {
function toUpperCase(){
  if(text !=="" && text !== 0 ){
  setTextvalue(text.toUpperCase());  
 
  props.showAlert("Converted to Uppercase","success");
  }

}
function toLowerCase(){
  if(text !=="" && text.length !==0 ){
  setTextvalue(text.toLowerCase());  

  props.showAlert("Converted to Lowercase","success");
  }
}
function toRemoveExtraSpaces(){
  if(text !=="" && text !==" " ){
  let newText=text.split(/[ ]+/);
  setTextvalue(newText.join(" "));
  props.showAlert("Removed Extra Spaces","success")
  }
}
function toCopyText(){
  if(text !=="" && countText !== 0 ){
  let text=document.getElementById('myBox');
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied to Clipboard","success")
  
  }
}
function toclearText(){
  if(text !=="" && text.length !==0 ){
  setTextvalue("");
  props.showAlert("Cleared text","success")
  }
}
let number;
 function countText(){
//  return( text.split("").filter((element)=>{ return element !== 0 }).length);
 number = text.split("").filter((element)=>{ return element !== 0 }).length;
 return (number.length);
}
const[num,setNum]=useState(0)
 


function onchange(e){
    setTextvalue(e.target.value);  
    setNum(text.split(/\s+/).filter((element)=>{ return element.length !==0 }).length)
  }

const[text,setTextvalue]=useState("")



    
return (<>
            
                <div className='container textarea' style={{color : props.mode === 'dark' ? 'white':'black' }}>
                    <h2>{props.heading}</h2>
                <div className="mb-3  text-center " >

                <textarea className="form-control  border-black mt-3"  style={{  backgroundColor: props.mode === 'dark'? '#435d84':'white' , color : props.mode === 'dark' ? 'white':'black'} } onChange={onchange} placeholder="Enter text here "value={text} id="myBox" rows="8"> </textarea>
                <button  disabled = {num===0} className="btn btn-primary rounded m-3  " onClick= {toUpperCase}>Convert to Uppercase</button>
                <button className="btn btn-primary rounded m-3  " disabled = {num===0} onClick= {toLowerCase}>Convert to LowerCase</button>
                <button className="btn btn-primary rounded m-3  "  disabled = {num===0}  onClick= {toCopyText}> Copy Text</button>
                <button className="btn btn-primary rounded m-3  " disabled ={num===0}  onClick= {toRemoveExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary rounded m-3  "  disabled ={num===0}  onClick= {toclearText}>Clear Text</button>


                </div>
                
               
               
                <div className=" my-3 ">
                    <h1>Your text summary</h1>
                    <p>{   text.split(/\s+/).filter((element)=>{ return element.length !==0 }).length} words and   {text.split("").filter((element)=>{ return element !==" " }).length} characters </p>
                    {console.log(text)}
                    <h2>Preview</h2>
                 <p>{text.length > 0 ?text:"Enter something to preview here" }</p>
                </div>
               
                </div>
                </>
               
  )
}
