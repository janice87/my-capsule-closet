import {useState} from 'react'
import CapsuleList from './CapsuleList';
import NewCapsuleForm from './NewCapsuleForm';
import { Box, Container, Typography, Button } from '@mui/material';

const CapsuleContainer = ({capsules, updateCapsuleObj, onAddCapsule, onDeleteCapsule}) => {
  const [showForm, setShowForm] = useState(false)

  const handleShowForm = () => {
    setShowForm((showForm) => !showForm)
  }
            
    return (
      <div>        
        <Container maxWidth="xs">
        <Box
        m={1}        
        justifyContent="center"
        alignItems="center"
        >
          <Typography variant="h5" align="center" style={{ marginBottom: ".5em", marginTop: "1em" }}> CAPSULE COLLECTIONS</Typography>

          <Box m={1} display="flex" justifyContent="center" alignItems="center">
            <Button onClick={handleShowForm} size="small" variant="contained" color="primary" style={{ marginRight: ".5em", marginLeft: ".5em" }}>ADD CAPSULE</Button>
          </Box>
            {showForm ? <NewCapsuleForm onAddCapsule={onAddCapsule} /> : null}          
            <CapsuleList capsules={capsules} updateCapsuleObj={updateCapsuleObj} onDeleteCapsule={onDeleteCapsule} />   
        </Box>
        </Container> 
           
      </div>
    );
  }
  
  export default CapsuleContainer;