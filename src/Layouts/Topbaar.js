import {
    AppBar,
    Toolbar,
    makeStyles,
    fade,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem, Box, Container, Typography, Grid
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState, useEffect } from "react";
import { Link as RouterLink, Router, useHistory } from "react-router-dom";
import Logo from "../component/Logo";

const headersData = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Support",
        href: "/support",
    },
    {
        label: "Create",
        href: "/create",
    },
    {
        label: "Profile",
        href: "/profile",
    }
];

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor:'white',
        position: "absolute",
        paddingRight: "59px",
        paddingLeft: "115px",
        "@media (max-width: 1280px)": {
            paddingLeft: "75px",
            paddingRight: "0px",
            paddingTop: "5px",
        },
        "@media (max-width: 900px)": {
          
            marginLeft:'50px',
            paddingLeft: "55px",
            paddingRight: "0px",
            height: "70px",
            paddingTop: "5px",
        },
    },
    marginCon:{
        marginLeft:'0px',
    },

    menuButton: {
        size: "18px",
        marginLeft: "38px",
        color: "black",
        fontWeight: 400,
        textTransform: "uppercase",
        letterSpacing: "1px",
        "@media (max-width: 900px)": {
            fontSize: "16px",
            fontWeight: "400",
            fontStyle: "normal",
            letterSpacing: "-0.6px",
            lineHeight: "1.75",
        },
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        "@media (max-width: 900px)": {
            paddingLeft: "75px",
            paddingRight: "20px",
            height: "100%",
        },
    },
    maindrawer: {
        height: "100%",
        background: "#0c0731",
        width: "260px",
    },
    logoDrawer: {
        paddingLeft: "10px",
        width: "60px",
        marginBottom: "30px",
    },
    drawerContainer: {
        padding: "20px 0px ",
        height: "100%",
        background: "black",
        width: "260px",
    },
 icon:{
   position:'relative',
 
    },
    drawericon: {
        color: "black",
        position: 'right',
        right: "2px",
        top:'0px',
        fontSize: "25px",
    },
    logoImg: {
        width: "60px",
    },
    menuMobile: {
        fontSize: "16px",
        fontWeight: "400",
        fontStyle: "normal",
        letterSpacing: "-0.6px",
        lineHeight: "1.75",
        color: "#fff",
        borderBottom: "1px solid #3e3e3e",
        padding: "16px",
    },
    paper1: {
        background: 'black',
        color: 'white',
    },
    containerHeight: {
        height: "100%",
        width:'100%'

    },
    menuicon:{
      padding:'200px',
    }, 
    search: {
        position: 'relative',
        border:'2px black solid ',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: '300px',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:'black'
      },

      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
       
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
}));


export default function Header() {
  const classes=useStyles();
  const history= useHistory()
    const { header, menuMobile, menuButton, toolbar, drawerContainer, drawericon, logoImg, logoDrawer, containerHeight,marginCon } = useStyles();
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });
    const { mobileView, drawerOpen } = state;
  
    useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 900
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
    
        setResponsiveness();
    
        window.addEventListener("resize", () => setResponsiveness());
      }, []);
    const displayDesktop = () => {
        return (
          <Toolbar className={toolbar}>
           {femmecubatorLogo}
           
          <Grid container item  direction='row' justify='flex-end' style={{paddingLeft:'0px'}}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
         {getMenuButtons()}
   
       </Grid>
           
          </Toolbar>
        );
      };  const femmecubatorLogo = (
        <Box>
          <Logo  className={logoImg}/>
        </Box>
       
      );
     
        
    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Button 
              {...{
                key: label,
                color: "inherit",
                className: menuButton,
              }}
            >
              {label}
            </Button>
          );
        });
      };


      
  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <Drawer 
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
            
          }}
        >
           <div className={drawerContainer}>
          
          <img className={logoDrawer} src="images/logo.png" alt=""  />
         
            {getDrawerChoices()}</div>
        </Drawer>

         <div>
        {femmecubatorLogo}
        </div>
         <Grid container justify='flex-end' direction='row'>
         <IconButton
        className={drawericon}
          {...{
            edge: "end",
            color: "black",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon className={drawericon} color='black' width="60px" height="60px" />
        </IconButton>
         </Grid>
      </Toolbar>
    );
  };
  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem className={menuMobile}>{label}</MenuItem>
        </Link>
      );
    });
  };

    return (
        <AppBar className={header}>
             <Container maxWidth='false' className={containerHeight}>
            {mobileView ? displayMobile() :displayDesktop() }
         </Container>
        </AppBar>

    );
}