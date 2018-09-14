import React, {Component} from 'react';

class SearchBar extends Component {
    
    state = {
        searchTerm: ""
    }
    
    render() {
        return (
            <div className="search-bar">
                <input 
                    value={this.state.searchTerm}
                    placeholder="Search..."
                    onChange={event => {this.setState({searchTerm: event.target.value})
                    this.props.search(event.target.value);
                    }}
                />
            </div>
        )
    }
}

export default SearchBar;