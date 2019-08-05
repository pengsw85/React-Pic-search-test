import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async term => {
        // async await, assign async on method that will require data loading
        // we assign await in front of a data loading call, and assign it to a variable
        // the variable will store the response of the data loading call
        const response = await unsplash.get("/search/photos", {
            params: { query: term }
        });
        this.setState({ images: response.data.results });
        console.log(response.data.results);
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "20px" }}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;

// this is old way to do things
/* axios
            .get("https://api.unsplash.com/search/photos", {
                params: { query: term },
                headers: {
                    Authorization:
                        "Client-ID c63615ffab8a4b0a1333fd2af57db065e23b6a3f0819f05aff0d344ff04609fb"
                }
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(e) {
                console.log(e);
            }); */
