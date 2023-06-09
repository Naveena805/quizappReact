import React from 'react'
import SelectField from './SelectField'
import { Button,Box, CircularProgress, Typography } from '@mui/material'
import TextFieldComp from './TextFieldComp';
import useAxios from './useAxios';
import {useNavigate} from 'react-router-dom';

const Settings = () => {
const {response,error,loading}=useAxios({ url:'/api_category.php'})
const navigate = useNavigate();
if(loading){
    return(
        <Box mt={20}>
        <CircularProgress/>

        </Box>
    );
}


if(error){
    return(
        <Typography mt={20} variant='h6' color='red'>
       Something went wrong

        </Typography>
    );
}

const difficultyOptions=[
    {id:'easy',name:'easy'},
    {id:'medium',name:'medium'},
    {id:'hard',name:'hard'},
    
];
const typeOptions=[
    {id:'multiple',name:'Multiple Choices'},
    {id:'boolean',name:'True/False'},
    
    
];


    const handleSubmit=(e)=>{
        e.preventDefault();
    navigate('/questions');
    
    };
  return (
   <form onSubmit={handleSubmit}>
   <SelectField options={response.trivia_categories} label='Category'/>
   <SelectField options={difficultyOptions} label='Difficulty'/>
   <SelectField options={typeOptions} label='Type'/>
   <TextFieldComp/>
   <Box mt={3} width='100%'>
    <Button fullWidth variant='contained' type='submit'>
    Get Started
    </Button>
   </Box>
   </form>
  )
}

export default Settings
