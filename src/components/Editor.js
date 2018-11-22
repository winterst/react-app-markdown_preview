import React, { Component } from 'react';

class Editors extends Component {
    
    state = {
        input:'',
        content : ''
    }

    handleChange = (e) => {
        
        this.setState({input:e.target.value});
        console.log(this.state.input);
        this.props.changePreview(this.state.input);
    }

    render(){
        return(
            <div className="editeur">
                    <textarea name="editor" id="editor" cols="30" rows="10" onChange={this.handleChange} value={this.state.input} ></textarea>
                
            </div>
        )
    }
}
export default Editors