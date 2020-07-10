
import React, { useState } from 'react'
import Previewer from './Previewer';


export default function Editor() {
    const defaultText = `# Header 
## Sub header
[Link to FCC](https://www.freecodecamp.org/learn)
\`\`\`
/*a code block:*/
.thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
\`\`\`
Inline code: \`<span></span>\`
- Item 1
- Item 2

> An unexamined life is not worth living.
Socrates

**And finally, an image:**![freeCodeCamp Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSo6Gx6OrpizPFH8zCfDAZi810TPoNq4nbkyvnGSfr4L-SS4mmV&usqp=CAU)
`;
    const [text , setText] = useState(defaultText);
    const handleChange = (e) => {
        setText(e.target.value) 
    };
    return (
        <div  className='window'>
         <div id='editor-widnow'>
             <h3 className='title'>editor</h3>
          
            <textarea  onChange={handleChange} name='markdown-text' type='textarea' id='editor'>
            {defaultText}
            </textarea>
         </div>

           <Previewer text={text}/> 
        </div>
        
    )
}


