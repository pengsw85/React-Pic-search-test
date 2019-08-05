import React from "react";
import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
            "Client-ID c63615ffab8a4b0a1333fd2af57db065e23b6a3f0819f05aff0d344ff04609fb"
    }
});
