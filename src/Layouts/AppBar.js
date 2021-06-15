import {
    AppBar,
    Toolbar,
    makeStyles,
    Button,
    IconButton,
    fade,
    Drawer,
    Link,
    MenuItem,Box, Container, Grid
  } from "@material-ui/core";
  import MenuIcon from "@material-ui/icons/Menu";
  import React, { useState, useEffect } from "react";
  import { Link as RouterLink, useHistory } from "react-router-dom";
  
  
  const headersData = [
    {
      label: "My Collection",
      href: "my-collection",
    },
    {
      label: "My NFT",
      href: "/my-nft",
    },
    {
      label: "My Auction",
      href: "/my-auction",
    },
    {
      label: "My Redeem",
      href: "/my-redeem",
    },
    {
      label: "My Wallet",
      href: "/my-wallet",
    },
    {
        label: "Review",
        href: "/review",
      },
      {
        label: "My Favourites",
        href: "/my-favourites",
      },
  ];
  
  const useStyles = makeStyles((theme) => ({
    header: {
        marginTop:'65px',
        position: "absolute",
        paddingRight: "59px",
        paddingLeft: "115px",
        height:'50px',
        "@media (max-width: 1280px)": {
            paddingRight: "175px",
            height: "50px",
            paddingTop: "5px",
        },
        "@media (max-width: 900px)": {
            paddingLeft: "55px",
            paddingRight: "0px",
            height: "50px",
            paddingTop: "10px",
        },
    },
  
    marginCon:{
        marginLeft:'0px',
    },
    menuButton: {
      color:'white',
        size: "18px",
        marginRight:'10px',
        fontWeight: 400,
        textTransform: "uppercase",
        letterSpacing: "1px",
        marginTop:'8px',
        "@media (max-width: 900px)": {
          cursor: 'pointer',
          textDecoration:'none',
         display: 'flex',
         justifyContent:'space-around',
            fontSize: "10px",
            fontWeight: "400",
            fontStyle: "normal",
            letterSpacing: "-0.6px",
            lineHeight: "1.75",
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
        position: 'absolute',
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
      scrollmenu:{ 
        overflow: 'auto',
        whiteSspace: 'nowrap'
    }
  }));
  
  export default function Header2(){
      const classes=useStyles();
    const { header, menuMobile, menuButton, toolbar, drawerContainer, drawericon, logoImg, logoDrawer, containerHeight } = useStyles();
    const history = useHistory()
    console.log(history.location)
  
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
        <div style={{display:'flex',flex:'nowrap',width:'100%',flexDirection:'row',justifyContent:'space-around'}}>
          {getMenuButtons()}
        </div>
    
        );
      };
      
     
  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button size="small" variant='text' 
        className={classes.button}
          {...{
            key: label,
            to: href,
            component: RouterLink,
            className: menuButton,
          }}>
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
           
             <div style={{display:'flex' ,  }}>{getMenuButtons()}
             </div>
   
    );
  };
    
  return (   
       
    <div>
      <AppBar  className={header} elevation={0} color='primary'>
     {mobileView ? displayMobile(): displayDesktop()}
    </AppBar>
    </div>

);
    }