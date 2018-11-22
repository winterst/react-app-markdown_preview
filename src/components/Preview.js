import React from 'react'
import marked from 'marked';

const Preview = ({content}) => {
    marked.setOptions({
        sanitize: true });
    
    return(
        <div className="preview" >
            
        <div className="pull-right" id="preview" dangerouslySetInnerHTML={{__html: marked(content)}}></div>
        </div>
    )
}

export default Preview