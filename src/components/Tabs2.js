import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';


import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography';
import {CustomizedTable, Tables} from "./Tables";
import {Hospital1, MediaCard} from "./Cards";
import {HomePage} from "./Home";
import {Hospital2} from "./Cards2";
import {Doctors_Cards, Hospital3, Hospitals} from "./CarduriMultiple";


function TabContainer(props) {
    return (
        <Typography component="div" style={{padding: 8 * 3}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        //  backgroundColor: theme.palette.background.paper,
    },
});

class ScrollableTabsButtonPrevent extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange} variant="scrollable" scrollButtons="off">
                        <Tab label="Home" icon={<HelpIcon/>}/>
                        <Tab label="Spitale" icon={<FavoriteIcon/>}/>
                        <Tab label="Doctori" icon={<PersonPinIcon/>}/>
                        <Tab label="Contact" icon={<PhoneIcon/>}/>



                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><HomePage/></TabContainer>}
                {value === 1 && <TabContainer>

                    <div className="card_props"></div>
                </TabContainer>}
                {value === 2 && <TabContainer>

                    <div className="cards_grid"><Doctors_Cards/></div>

                </TabContainer>}
                {value === 3 && <TabContainer>
                    <div className="tables_styling"></div>
                </TabContainer>}

            </div>
        );
    }
}

ScrollableTabsButtonPrevent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonPrevent);