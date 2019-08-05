import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    onFormSubmit = e => {
        // call a function passed by its parent - onSearchSubmit
        e.preventDefault();
        // access parent property with "this.props.property"
        this.props.onSearchSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e =>
                                this.setState({ term: e.target.value })
                            }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

// type of change: onChange, onClick, onSubmit
export default SearchBar;
