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
          <Typography variant="h5" align="center" style={{ marginBottom: "1em", marginTop: "1em" }}> Capsule Wardrobe Collections</Typography> 
            <Button size="small" variant="outlined" onClick={handleShowForm} color="secondary">ADD CAPSULE</Button>
            {showForm ? <NewCapsuleForm onAddCapsule={onAddCapsule} /> : null}          
            <CapsuleList capsules={capsules} updateCapsuleObj={updateCapsuleObj} onDeleteCapsule={onDeleteCapsule} />   
        </Box>
        </Container> 
           
      </div>
    );
  }
  
  export default CapsuleContainer;