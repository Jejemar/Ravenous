import './SearchBar.css';

import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: '',
            location:'',
            sortBy:'best_match'
        }

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }
        
        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    getSortByClass(sortByOption) {
        if(this.state.sortBy === sortByOption){
            return 'active'
        } else {
            return ''
        }
    }

    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption
        });
    }


    handleTermChange(e) {
        this.setState({
            term: e.target.value
        })
    }
    


    handleLocationChange(e){
        this.setState({
            location: e.target.value
        })
    }

    handleSearch(e) {
        const {term, location, sortBy} = this.state
        this.props.searchYelp(term, location, sortBy)
        e.preventDefault()

    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key={sortByOptionValue} 
            className={this.getSortByClass(sortByOptionValue)}
            onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
            >
                {sortByOption}
                
            </li>
        });
    }
    
    render () {
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                    <input onChange={this.handleLocationChange} placeholder="Where?" />
                </div>
                <div className="SearchBar-submit" onClick={this.handleSearch}>
                    <a>Let's Go</a>
                </div>
            </div>

        );
        
    }
}

export default SearchBar;