import {useState} from 'react'
import { useHistory } from 'react-router-dom';
import {Card, CardContent, Typography, CardActions, Button} from '@mui/material';
import IconButton from '@mui/material/IconButton'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

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
   
    return (
      <div>     
        <Card sx={{ maxWidth: 450 }} style={{ marginBottom: "1em", marginTop: "1em" }}>     
         <CardContent key={id}>

           <Typography variant="h6">
           {capsule_name}
           <CardActions> 
            <Button onClick={handleShowCapsule} color="secondary" size="small" variant="outlined">OUTFITS</Button>
           <span>
           <IconButton aria-label="delete" size="small" onClick={handleDeleteCapsule} color="secondary" style={{ marginRight: "1em", marginLeft: "1em" }}>
            <BackspaceOutlinedIcon fontSize="small" />
          </IconButton> 
          </span>
          </CardActions>
           </Typography>        
          
           </CardContent>      
        </Card>
        {errors ? <li key={errors}>{errors}</li>: null}              
      </div>
    );
  }
  
  export default CapsuleCard;