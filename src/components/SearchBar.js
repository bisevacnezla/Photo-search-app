import React, {Component} from 'react'

class SearchBar extends Component{
    state = {term: ''}
    formOnSubmit=(e)=>{
        e.preventDefault()
        this.props.onSubmit(this.state.term)
    }
    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.formOnSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                    <input 
                    type="text" 
                    value={this.state.term} 
                    onChange={(e)=>this.setState({term: e.target.value})} 
                    />
                    </div>
                </form>
            </div>
            )
    }
}

export default SearchBar