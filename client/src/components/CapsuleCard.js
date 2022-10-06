import {useState} from 'react'
import { useHistory } from 'react-router-dom';
import {Box, Container, Typography, Button} from '@mui/material';
import IconButton from '@mui/material/IconButton'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


const CapsuleCard = ({capsule, updateCapsuleObj, onDeleteCapsule}) => {
    const [errors, setErrors] = useState(false)
    const {capsule_name, id} = capsule
    const history = useHistory()

    const handleShowCapsule = () => {       
        updateCapsuleObj(capsule)
        history.push(`/capsules/${id}`)
    }

      const handleDeleteCapsule = () => {
      fetch(`/capsules/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if(res.ok) {
          onDeleteCapsule(id)
          history.push(`/capsules`)
        } else {
          res.json().then(data => setErrors(data.errors))
        }
      })   
    }

    const handleEditCapsule = () => {
      history.push(`/capsules/${id}/edit`)
    }
  
   
    return (
      <div>   
        <Container maxWidth="md">
        <Box     
        justifyContent="center"
        alignItems="center"
        boxShadow={1}       
        sx={{
          width: 350,
          height: 100,
          marginTop: "1em",
          marginBottom: "1em",
          backgroundColor: '#FFF',
          '&:hover': {
            backgroundColor: 'primary.main',
          },
        }}
        >    
        <Typography variant="button" style={{ marginLeft: "1em", marginBottom: "1em", marginTop: "2em" }}>
          {capsule_name}
          </Typography>          
            <IconButton aria-label="delete" size="small" onClick={handleDeleteCapsule} color="secondary" style={{ marginLeft: ".05em" }}>
              <BackspaceOutlinedIcon fontSize="small" />
            </IconButton>      
            <IconButton aria-label="edit" size="small" onClick={handleEditCapsule} color="secondary" style={{ marginLeft: ".05em" }}>
              <EditOutlinedIcon fontSize="small" />
            </IconButton>                             
          <Box m={1} display="flex" justifyContent="center" alignItems="center" style={{ marginTop: ".5em", marginBottom: "1em" }}>
             <Button onClick={handleShowCapsule} color="primary" variant="contained" size="small" style={{ marginRight: ".5em", marginLeft: ".5em", marginTop: ".5em", marginBottom: "1em" }}>OUTFITS</Button>
          </Box>                      
        </Box>
        </Container>  
        
        {errors ? <li key={errors}>{errors}</li>: null}              
      </div>
    );
  }
  
  export default CapsuleCard;