import { Typography } from '@material-ui/core';
import {Grid,GridList,GridListTile,Divider, Card,Box,Button,makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Hidden } from '@material-ui/core';
import { Collections } from '@material-ui/icons';

const useStyles=makeStyles((theme)=>({ 
     root: {
    maxWidth: 350,
    maxHeight:500,
    backgroundColor:'white',
    marginLeft:'30px',
    marginTop:'20px',
  }, media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
     button:{
         backgroundColor:'3f51b5',
         marginRight:'0px',
         marginLeft:'30px',
         marginTop:'120px',
         
     },
     typography:{
         marginLeft:'30px',
         marginTop:'30px',
     }
}));

const CardDetails=[
  {
    'name':'Card1',
    'content':'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,  you like.',
    'profileval':'hii'
},

{
  'name':'Card2',
  'content':'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,  you like.',
  'profileval':'hii'
},
{
  'name':'Card3',
  'content':'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,  you like.',
  'profileval':'hii'
},
{
  'name':'Card4',
  'content':'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,  you like.',
  'profileval':'hii'
},
{
  'name':'Card5',
  'content':'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,  you like.',
  'profileval':'hii'
},
{
  'name':'Card6',
  'content':'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,  you like.',
  'profileval':'hii'
},

{
'name':'Card7',
'content':'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,  you like.',
'profileval':'hii'
},
{
'name':'Card8',
'content':'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,  you like.',
'profileval':'hii'
},
]
const GetCard=(start,visible)=>{
    const classes=useStyles();
    return(
        CardDetails.slice(start,visible).map(({name,content,profileval,index})=>{
          return(
            <div key={index}>
    <Card className={classes.root}>

    <CardMedia
        className={classes.media}
        image="download.jpg"
        title="Paella dish"
      />
      <CardContent>
      <Typography variant='h6' align='left'>
      {name}
      </Typography>
        <Typography style={{ }} variant="body2" color="textSecondary" component="p">
         {content} 
          </Typography>
      </CardContent>
      <Divider style={{height:'1.5px',width:'95%',marginLeft:'0px 10px',}}/>
      <CardActions disableSpacing style={{}}>
      <AccountCircleIcon style={{marginLeft:'10px',marginTop:'0px'}}/>
    <Typography style={{marginLeft:'10px',marginTop:'0px'}}>
     {profileval}
    </Typography>
    <Button variant='contained' className={classes.button} style={{backgroundColor:'#3f51b5',color:'white',margin:'0px',marginLeft:'90px'}}>
      Buy Now
    </Button>
      </CardActions>
    </Card>
</div>


          );
        })
    );
}

const Landingafter=()=>{
    const classes=useStyles();
  const [visible,setVisible]=useState(3);   
  const [start,setStart]=useState(0)
   const More=()=>{
    setVisible((prevalue)=>{
      
      setStart((startval)=>{
        console.log(CardDetails.length);
        if(CardDetails.length>prevalue)
        return(startval=prevalue)});

 if(CardDetails.length>prevalue)
   { if( CardDetails.length % 3==1 && prevalue+1==CardDetails.length ){
return (prevalue+1)
   }
    else if( CardDetails.length % 3==2&&prevalue+2==CardDetails.length)
   {
    return (prevalue+2)
  }else{
    return (prevalue+3);
    
  }
  }
})
    }
    // const Back=()=>{
    //   setVisible((prevalue)=>{
    //     setStart((startval)=>{
    //                           if(startval==0)
    //                       return (startval=0);
    //                       else
    //                          return(startval-3)
    //                     });
    //        if(prevalue==3) 
    //       return(prevalue=3)
    //     else if(prevalue+1==CardDetails.length)
    //   return (prevalue-1)
    //   else if(prevalue+2==CardDetails.length)
    //   return (prevalue-2)
    //   else
    //   return(prevalue-3)
    // })
   
    // }
        return(
        <div>
             <Box style={{backgroundColor:'grey',color:'black',height:'200px',width:'100%',marginTop:"112px"}}>
           <Grid container direction='row'>
           <Button className={classes.button} size="small" variant='contained' >Browse</Button>
       
  <Button className={classes.button} size='small' variant='contained' >
      create
  </Button>
           </Grid>
            </Box>
           <Grid container direction='row' style={{backgroundColor:'rgb(241, 240, 240)'}}>
           <Grid item container direction='column'>
           <Grid item container sm={12} style={{marginBottom:'20px'}} direction='row'>
 <Grid item sm={6}  >
 <Typography align ='left' variant='h5' className={classes.typography}>
        Featured
    </Typography> 
 </Grid>
    <Grid item container sm={6}  justify='flex-end'>
    <Button
        variant="text"
        size='small'
        style={{backgroundColor:'white',marginTop:'25px',marginRight:'20px',height:'40px',display:'flex',alignContent:'flex-end'}}
        className={classes.button}
       startIcon={<ArrowBackIosIcon/>}
    onClick={()=>{}}
      >
        Back
      </Button>
    <Button
        variant="text"
        size='small'
        style={{backgroundColor:'white',marginTop:'25px',marginRight:'20px',height:'40px',display:'flex',alignContent:'flex-end'}}
        className={classes.button}
      endIcon={<ArrowForwardIosIcon/>}
    onClick={()=>{More()}}
      >
   More
      </Button></Grid>
     
        <Grid item container direction='row' justify='space-evenly'>
          
  {GetCard(start,visible)}
        </Grid>
    </Grid>
           <Divider/>
           <Grid item container direction='row' sm={12} style={{marginBottom:'20px'}}>
           <Grid item sm={6} >
 <Typography align ='left' variant='h5' className={classes.typography}>
  New Collection
    </Typography> 
 </Grid>
    <Grid item container sm={6}  justify='flex-end'>
    <Button
        variant="text"
        size='small'
        style={{backgroundColor:'white',marginTop:'25px',marginRight:'20px',height:'40px',display:'flex',alignContent:'flex-end'}}
        className={classes.button}
       startIcon={<ArrowBackIosIcon/>}
    onClick={()=>{}}
      >
        Back
      </Button>
    <Button
        variant="text"
        size='small'
        style={{backgroundColor:'white',marginTop:'25px',marginRight:'20px',height:'40px',display:'flex',alignContent:'flex-end'}}
        className={classes.button}
      endIcon={<ArrowForwardIosIcon/>}
    onClick={()=>{More()}}
      >
   More
      </Button></Grid>
                                
                                       
        </Grid>
              
           </Grid>
          <Divider/>
           <Grid item container direction='row' sm={12} style={{marginBottom:'20px'}}>
           <Grid item sm={6} >
 <Typography align ='left' variant='h5' className={classes.typography}>
   Closing Auction
    </Typography> 
 </Grid>
    <Grid item container sm={6}  justify='flex-end'>
    <Button
        variant="text"
        size='small'
        style={{backgroundColor:'white',marginTop:'25px',marginRight:'20px',height:'40px',display:'flex',alignContent:'flex-end'}}
        className={classes.button}
       startIcon={<ArrowBackIosIcon/>}
    onClick={()=>{}}
      >
        Back
      </Button>
    <Button
        variant="text"
        size='small'
        style={{backgroundColor:'white',marginTop:'25px',marginRight:'20px',height:'40px',display:'flex',alignContent:'flex-end'}}
        className={classes.button}
      endIcon={<ArrowForwardIosIcon/>}
    onClick={()=>{More()}}
      >
   More
      </Button></Grid>
      <Grid item container direction='row' justify='space-evenly'>
          
          {GetCard(start,visible)}
                </Grid>
            
           </Grid>
           <Divider/>
           <Grid item container direction='row' sm={12} style={{marginBottom:'20px'}}>
           <Grid item sm={6} >
 <Typography align ='left' variant='h5' className={classes.typography}>
   Most Popular
    </Typography> 
 </Grid>
    <Grid item container sm={6}  justify='flex-end'>
    <Button
        variant="text"
        size='small'
        style={{backgroundColor:'white',marginTop:'25px',marginRight:'20px',height:'40px',display:'flex',alignContent:'flex-end'}}
        className={classes.button}
       startIcon={<ArrowBackIosIcon/>}
    onClick={()=>{}}
      >
        Back
      </Button>
    <Button
        variant="text"
        size='small'
        style={{backgroundColor:'white',marginTop:'25px',marginRight:'20px',height:'40px',display:'flex',alignContent:'flex-end'}}
        className={classes.button}
      endIcon={<ArrowForwardIosIcon/>}
    onClick={()=>{More()}}
      >
   More
      </Button></Grid>
      <Grid item container direction='row' justify='space-evenly'>
          
          {GetCard(start,visible)}
                </Grid>
            
           </Grid>
           <Divider/>
           <Grid item container direction='row' sm={12} style={{marginBottom:'20px'}}>
           <Grid item sm={6} >
 <Typography align ='left' variant='h5' className={classes.typography}>
   Best Seller
    </Typography> 
 </Grid>
    <Grid item container sm={6}  justify='flex-end'>
    <Button
        variant="text"
        size='small'
        style={{backgroundColor:'white',marginTop:'25px',marginRight:'20px',height:'40px',display:'flex',alignContent:'flex-end'}}
        className={classes.button}
       startIcon={<ArrowBackIosIcon/>}
    onClick={()=>{}}
      >
        Back
      </Button>
    <Button
        variant="text"
        size='small'
        style={{backgroundColor:'white',marginTop:'25px',marginRight:'20px',height:'40px',display:'flex',alignContent:'flex-end'}}
        className={classes.button}
      endIcon={<ArrowForwardIosIcon/>}
    onClick={()=>{More()}}
      >
   More
      </Button></Grid>
      <Grid item container direction='row' justify='space-evenly'>
          
          {GetCard(start,visible)}
                </Grid>
            
           </Grid>
          
           
           </Grid>
           
           
       
       
       
        </div>
    );
}

export default Landingafter;