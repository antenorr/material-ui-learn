import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const NavBar = (props) => {
  
    return (
        <div>
            < AppBar position="static" color="secondary">
                <ToolBar >
                    <Typography variant="title" color="inherit" >
                        React & Material UI sample
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default NavBar;
