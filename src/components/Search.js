import React, {Component} from 'react';
import "../../src/css/style.css"


class Search extends Component {
    render() {
        return (
            <div className="search-bar">
               <i className="search-icon fa fa-search"/>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Hotel search"
                    onChange={this.props.onSearch}
              
                />
            </div>
        )
    }
}
;

export default Search;