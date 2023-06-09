import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Box, Container, Typography} from '@mui/material';
import Settings from './Settings.js';
import FinalScreen from './FinalScreen';
import Questions from './Questions.js';
const Main = () => {
  return (
    <div>
    <Router>
      <Container maxWidth='sm'>
        <Box textAlign='center' mt={5}>
          <Typography variant='h2' fontWeight='bold'>Quiz App</Typography>
          <Routes>
            <Route path='/' element={<Settings />} />
            <Route path='/questions' element={<Questions />} />
            <Route path='/score' element={<FinalScreen />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  </div>
  )
}

export default Main
