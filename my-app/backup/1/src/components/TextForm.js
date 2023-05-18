import React, {useState} from 'react'

export default function TextForm(props) {
    
    // Declare a new state variable, which we'll call "count"
    const [text, setText] = useState('');
    //text = "New Text"; // Wrong way to change the state
    // setText("New Text2"); // Correct way to change the state

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        //setText("You have clicked on handleUpclicked!");
        setText(newText);
        props.showAlerts('Converted to Upper Case!', 'success');
    }

    const handleLowClick = () => {
        let newText2 = text.toLowerCase();
        //setText("You have clicked on handleLowClicked!");
        setText(newText2);
        props.showAlerts('Converted to Lower Case!', 'success');
    }

    const handleFirstCharUppClick = () => {
        let words = "";
        let splitText = text.split(" ");
        for (let index = 0; index < splitText.length; index++) {
            const element = splitText[index];
            let word = element.charAt(0).toUpperCase()+ element.substr(1).toLowerCase();
            words = words + " "+word;
        }
        setText(words);
        props.showAlerts('Converted First latter capital of every word in string!', 'success');
    }

    const handleOnChage = (event) => {
        setText(event.target.value); // Without this you can not change manually textbox value
    }

    const handleClearTextClick = () =>{
        setText("");
        props.showAlerts('All text cleared cuccessfully!', 'success');
    }
    
    let minuts = 0;
    let countWord = 0;
    if(text.length > 0){
        countWord =  text.split(" ").length;
    }
    
    if(countWord > 0){
        minuts = 0.008 * countWord;
    }

    const handleCopyTextClick = () =>{
        let textArea = document.getElementById("exampleFormControlTextarea1");
        textArea.select();
        // Only this line is able to copy code.
        navigator.clipboard.writeText(text);
        props.showAlerts('Text copied from clipboard!', 'success');
    }

    const handleExtraSpaceClick = ()=>{
        let newTextE = text.split(/[ ]+/);
        setText(newTextE.join(" "));
        props.showAlerts('Extra space removed from string successfully!', 'success');
    }


  return (
    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor :props.mode==='dark'? props.themeColor.lightBgcolor:'white', color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChage} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To Upper Case</button>
            <button className="btn btn-primary ms-1" onClick={handleLowClick}>Convert To Lower Case</button>
            <button className="btn btn-primary ms-1" onClick={handleFirstCharUppClick}>Convert First Latter Capital Of Words</button>
            <button className="btn btn-primary ms-1" onClick={handleClearTextClick}>Clear Text</button>
            <button className="btn btn-primary ms-1" onClick={handleCopyTextClick}>Copy To Clipboard</button>
            <button className="btn btn-primary ms-1" onClick={handleExtraSpaceClick}>Remove Extra Space</button>
        </div>
        <div className="coantainer my-4">
            <h1>Your Text Summery Here:-</h1>
           {/*  <p>{text.split(" ").length} Words and {text.length} Characters</p> */}
            <p>{countWord} Words and {text.length} Characters</p>
            <p>{minuts} Minuts Read</p>
            <h2 className="my-2">Preview :-</h2>
            <p>{(text.length > 0)?text:'Please Enter Some text to preview...'}</p>
            
        </div>
    </>
  )
}
