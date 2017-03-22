import React from "react";
import CircularProgress from "material-ui/CircularProgress";

const Loading = () => (
    <CircularProgress
        style={{
            margin: "10px auto",
            display: "block"
        }}
        size={80}
        thickness={5}
    />
);

export default Loading;
