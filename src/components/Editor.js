
import React, { useState } from 'react'
import Previewer from './Previewer';

export default function Editor() {
    
    const [text , setText] = useState('');
    const handleChange = (e) => {
        setText(text + e.target.value) 
    };
    return (
        <div  className='window'>
         <div id='editor'>
             <h3 className='title'>editor</h3>
          
            <textarea onChange={handleChange} name='markdown-text' type='textarea'>
                
            </textarea>
         </div>

           <Previewer text={text}/> 
        </div>
        
    )
}


