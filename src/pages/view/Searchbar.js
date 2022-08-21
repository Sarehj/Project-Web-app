import React from 'react';
import '../../App.css'


class Searchbar extends React.Component {
   
   
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="video-search"></label>
                        <div className='search'>
                        <input onChange={this.handleChange} type="text" placeholder="Search..."/>
                        </div>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default Searchbar;