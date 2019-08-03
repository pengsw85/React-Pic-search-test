import React from "react";

class SearchBar extends React.Component {
    onInputChange(e) {
        console.log(e.target.value);
        /*
    it is convention to name callback method with,
    on+{name of element assigned}+{event} 
    */
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

// type of change: onChange, onClick, onSubmit
export default SearchBar;
