import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    }
}));

let mainButtons = [
    {
        path: "/admin",
        name: "Dashboard",
        icon: <DashboardIcon />
    },
    {
        path: "/admin/estate-board",
        name: "Proprietati",
        icon: <DashboardIcon />
    },
    {
        path: "/admin/add-estate",
        name: "Adauga Proprietate",
        icon: <DashboardIcon />
    }
];

export interface sideDrawerProps {
    open: boolean;
    handleDrawerToggle(): void;
}

export const SideDrawer = (props: sideDrawerProps) => {
    // TODO add icons from material-ui to buttons
    const classes = useStyles();
    const history = useHistory();
    const browserLocation = useLocation();

    const handleNavigation = (path: string) => {
        history.push(path);
    };

    const renderSideButtons = () => {
        return mainButtons.map((item, index) => {
            return (
                <ListItem
                    button
                    key={index}
                    onClick={() => { handleNavigation(item.path) }}
                    disabled={browserLocation.pathname == item.path}
                >
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                </ListItem>)
        })
    };

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !props.open && classes.drawerPaperClose),
            }}
            open={props.open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={() => { props.handleDrawerToggle() }}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>{renderSideButtons()}</List>
            <Divider />
            <List>/other items/</List>
        </Drawer>
    )
}