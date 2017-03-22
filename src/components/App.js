import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { Grid } from "react-flexbox-grid";
import CreateContact from "../containers/CreateContact";
import VisibleContactList from "../containers/VisibleContactList";
import Notify from "../containers/Notify";

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Contactinator" showMenuIconButton={false} />
                    <Grid>
                        <VisibleContactList />

                    </Grid>
                    <CreateContact />
                    <Notify />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
