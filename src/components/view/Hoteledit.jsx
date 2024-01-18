
import React, { useState } from 'react'
//import './student.css'
import axios from 'axios'
import { Button, TextField, Typography } from '@mui/material'
//import Places from './Places'


const Hoteledit = (props) => {
    var [inputs,setInputs]=useState(props.data)
    var[selected,setSelected] = useState();
    var [selectedimage,setSelectedimage] = useState(null);
    var [update,setUpdate] =useState(false)
    //console.log("method:",props.method)
    //const navigate = useNavigate();

    const inputhandler =(e)=> {
        const {name,value}=e.target
        setInputs((inputs)=>({...inputs,[name]:value}))
        console.log(inputs)
    }
   
    const savedata =()=>{
        if(props.method === 'put'){
            console.log("inside put")
            axios.put("http://localhost:4005/hedit/"+inputs._id,inputs)
            .then(response=>{
                console.log("post data"+response.data)
                alert("success")
                window.location.reload(false);

            })
            .catch(err=>console.log(err))
        }
    }

   
  const handleimage =(event)=>{
    const file = event.target.files[0];
    setSelectedimage(file)
    inputs.hotelphoto=file;
}
    
    //update
     const updateValues = (value) =>{
         console.log("updated:",value)
         setSelected(value);
        setUpdate(true);
         }


    return (
        <div className='p'>
        <Typography variant='h5'>Edit 
  Hotel</Typography><br></br>
  <TextField id="outlined-basic" label="Places"
  variant="outlined"
  name="hotelname" value={inputs.hotelname}
  onChange={inputhandler} />
  <br></br>
  <br></br>
  <TextField id="outlined-basic" label="Things to see"
  variant="outlined"
  name="htsee" value={inputs.htsee}
  onChange={inputhandler} />
  <br></br>
  <br></br>
  {/* <TextField id="outlined-basic" label="photos"
  variant="outlined"
  name="photos" value={inputs.photos}
  onChange={inputHandler} /> */}
  <input
              type="file"
              
              onChange={handleimage}
              
            />
  <br></br>
  <br></br>
  <TextField id="outlined-basic" label="Location"
  variant="outlined" name="hlocation" value={inputs.hlocation}
  onChange={inputhandler} />
  <br></br>
  <br></br>
  <Button variant='contained' color='success'
  onClick={savedata} >NEXT</Button>
   </div>
    );
  };

export default Hoteledit