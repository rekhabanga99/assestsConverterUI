
import Child from './Iconselector'

import { Paper } from '@material-ui/core';
import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Eth from '../img/eth.png'
import DropDown from '../img/1.png'





const data = [

    { id:1,title: 'Logan', year: 2017,img: '1.jpg' },
    { id:2,title: 'Full ', year: 1987 ,img:'2.jpg'},
    { id:3,title: 'Dangal', year: 2016 ,img:'5.jpg'},
    { id:4,title: 'The ', year: 1973,img:'6.jpg' },
    {id:5, title: 'Iooo ', year: 1968,img:'7.jpg' },
  
  ];


const useStyles = makeStyles((theme) => ({
    img:{
        padding:'26% 15% 13% 26%' },
    root: {
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent:'center',
        // direction:'row',
        // marginTop:'10%',
        // width:'75%',
        '& > *': {
            margin: theme.spacing(1),
            justifyContent: 'center',


            //   width: theme.spacing(20),
            //   height: theme.spacing(16),


        },
        
    },
    gridX1:{
        marginTop:'5%',
        '& .MuiInput-underline:before':{
            borderBottom:'none'
        }
    },
    // label2:{
    //     marginLeft:'46px',
    //    marginBottom:'-14px',
    //    color:'#0b008099'
    // },
    gridX2:{
        
        '& .MuiFormControl-root': {
            maxHeight:150,
            // minHeight:150
        },
        '& .MuiCard-root':{
            maxHeight:192,
            minHeight:192,
            maxWidth:186
        },
        '& .MuiAutocomplete-inputRoot[class*="MuiInput-root"] .MuiAutocomplete-input:first-child':{
            marginBottom:'-45px',
            color:'#9e7cbf',
            fontWeight:700
        },
        '& .MuiAutocomplete-popupIndicator':{
         margin:'22px 9px'
        },
        '& .MuiCardContent-root':{
        padding:0,
        },
        '& .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]':{
        //  minHeight:150
        },

        marginBottom:'10px',
        '& .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon .MuiAutocomplete-inputRoot':{
            padding:'50px 20px',
            // minHeight:150
        }
    },
    gridX3:{
        marginLeft:'43px',
        '& .MuiInput-underline:before':{
            borderBottom:'none',
        
        },'& .MuiInput-underline:after':{
            borderBottom:'none',
        },
        '& .MuiInputLabel-formControl':{
            transform: 'translate(0, 19px) scale(1)',
            paddingLeft:15
        },
        
        marginTop:'5%',
        '& .MuiFormControl-root':{
        width:'95%'
        },
        
        '& .MuiOutlinedInput-input': {
            height:8
        },

    },
    paper:{
        padding:'5%',
        minWidth:550,
        boxShadow:'0 26px 75px rgb(0 0 0 / 4%), 0 -1px 12px rgb(0 0 0 / 12%)',
    },
    btn1:{
        '& .MuiButton-containedPrimary':{
         backgroundColor:'#9e7cbf'
        },
         marginLeft:25,
        textTransform:'none',
        height:46
       
    },
    btn2:{
        '& .MuiButton-containedPrimary':{
            backgroundColor:'#9e7cbf'
           },
        marginRight:10,
        width:'83%',
       textTransform:'none',
       height:46
      
   },
    child:{
       boxShadow:'0 26px 75px rgb(0 0 0 / 4%), 0 -1px 12px rgb(0 0 0 / 12%)',
       // boxShadow:  '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        minHeight:50,
        marginBottom:10,
        '& .MuiAutocomplete-inputRoot[class*="MuiInput-root"] .MuiAutocomplete-input:first-child':{
         padding:'18px 16px',
         color:'#9e7cbf',
        fontWeight:700
        }
    },
 
    label:{
        fontSize:14,
        fontWeight:700,
        marginBottom:'5px',
        color:'#0b008099'
     }
}));



const Home = (props) => {
    
    const [fromImg,setFromImage]=useState('')
    const [fromName,setFromName]=useState({})
    const [obj,setSelectedObj]=useState({id:1,title: 'Logan', year: 2017,img: '1.jpg'})
    const [toObj,setSelectedTo]=useState( { id:2,title: 'Full ', year: 1987 ,img:'2.jpg'})
    const classes = useStyles();
   

    const getOptionSelected= (option,newValue)=>{
           if(newValue){
            setSelectedObj(newValue)
            // setFromName(newValue.title)
            console.log('----------',newValue)
           }else{
            setSelectedObj({})  
           }
            
            
            // setFromImage(newValue.img)
    }

    const setToObj= (option,newValue)=>{
        if(newValue){
            setSelectedTo(newValue)
         console.log('----------',newValue)
        }else{
            setSelectedTo({})  
        }
         
         
         // setFromImage(newValue.img)
 }



    return (


        <Paper className={classes.paper} >
             
            <Grid container justify="center" >
        
            <Grid item xs={10}>
            <div className={classes.label}>Assests</div>
            <Paper className={classes.child} >  
             <Child 
             obj={obj}
             getOptionSelected={getOptionSelected}
             setFromImage={setFromImage}
             setFromName={setFromName}
            data={data}
            src={DropDown} /></Paper>
         
            </Grid>
            </Grid>
           
            <Grid container justify="center" className={classes.gridX2}>

                <Grid item xs={4}>
                <div className={classes.label}>From</div>
                    <Paper elevation={1} >
                        <Card>
                            <CardContent>
                            <img  alt=""  className={classes.img} 
                              src={`${window.location.origin}/img/${obj.img}`}
                              />
                                <Child  
                                obj={obj}
                                   setFromImage={setFromImage}
                                   fromName={fromName}
                                   getOptionSelected={getOptionSelected}
                                   setFromName={setFromName}
                                  data={data}
                                 src={DropDown}/>
                            </CardContent>
                         
                        </Card>
                    </Paper>


                </Grid>


                <Grid item xs={2} >
                <img style={{marginTop:80}} className={classes.img}  alt=""  src={Eth} />
               
                </Grid>


                <Grid item xs={4}>
                <div className={classes.label}>To</div>
                    <Paper elevation={1} >
                        <Card>

                            <CardContent>
                            <img className={classes.img}  
                            alt="" 
                            src={`${window.location.origin}/img/${toObj.img}`}/>
                                <Child
                                   toObj={toObj}
                                   setToObj={setToObj}
                                   src={DropDown}
                                 data={data}
                                 />

                            </CardContent>
                          
                        </Card>
                    </Paper>
                </Grid>
            </Grid>



            <Grid container justify="center" className={classes.gridX3}>

                <Grid xs={8}>
                <div className={classes.label}>Amount</div>
                    <Paper className={classes.child}>
                    <TextField id="outlined-basic" label="" />
                    </Paper>
                </Grid>

                <Grid xs={4} style={{marginTop:22}}>
                
                    <Button variant="contained" color="primary" className={classes.btn1} >
                        Max
                    </Button>
                </Grid>


            </Grid>


           
            <Grid container  justify="center" className={classes.gridX1}>
            
      
            <Button className={classes.btn2} variant="contained" color="primary"  style={{textTransform:'none'}}>
                        Connect wallet
                    </Button>
            </Grid>
                   
                
            





        </Paper>

    );
}

export default Home;




