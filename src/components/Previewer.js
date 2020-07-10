
import React, { useEffect } from 'react'

export default function Previewer(props) {
    
    var marked = require('marked');
    marked.setOptions(
        {
          
            breaks: true
        }
    );
    useEffect(() => {
        document.getElementById('preview').innerHTML = marked(props.text);
      })
    return (
        <div id='previewer'>
            <h3 className='title'>previewer</h3>
           <p id='preview'></p>
        </div>
    )
}


