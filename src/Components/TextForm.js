import React,{useState} from 'react';


const TextForm = (props) => {

    function handleUpClick(){
        // console.log("handle click up" +text)
          let newText=text.toUpperCase();
          setText(newText);
          
        }

     function handleLoClick(){
        console.log("handle click lower");
        let loText=text.toLowerCase();
        setText(loText);
     }   
        
        
     function handleClear(){
        console.log("clear text area");
        setText("")
     }
        function handleChange(e){
        setText(e.target.value);
        // console.log(e.target.value)
        }

     //remove extra space
      function handleClearSpace(){
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
      }  

const[text,setText]=useState("");


  return (
    <>
     <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
    <div className="mb-3">
    <h3>{props.heading}</h3>
   <textarea className="form-control" value={text} style={{backgroundColor: props.mode==="dark"?"grey":"white", color:  props.mode==="dark"?"white":"black"}}  id="mybox" rows="5" onChange={handleChange} ></textarea>
   </div>
   <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
   <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
   <button className="btn btn-primary mx-3" onClick={handleClear}>Clear</button>
   <button className="btn btn-primary" onClick={handleClearSpace}>Remove extra space</button>
   </div>

   <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
    <h3>Your text summary</h3>
    <p>{text.split(" ").length} words and {text.length} character</p>
    <p>{0.008 * text.split(" ").length}Minutes read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
   </div>

    </>
   
    
  )
}

export default TextForm
