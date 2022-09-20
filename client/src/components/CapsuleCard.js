import { useHistory } from 'react-router-dom';
import {Card, CardContent, Typography} from '@mui/material';

const CapsuleCard = ({capsule, updateCapsuleObj}) => {
    const {capsule_name, id} = capsule
    const history = useHistory()

    const handleShowCapsule = () => {
        console.log("show capsule")
        updateCapsuleObj(capsule)
        history.push(`/capsules/${id}`)
    }

    // const handleShowCapsuleList = () => {
    //     history.push(`/capsules`)
    // }

    return (
      <div>     
        <Card sx={{ maxWidth: 500 }} onClick={handleShowCapsule}>     
         <CardContent key={id}>
           <Typography variant="h6">
           {capsule_name}
           </Typography>
           </CardContent>
           {/* <CardActions>      
             <Button size="small" variant="outlined" onClick={handleShowCapsuleList}>BACK</Button>                   
           </CardActions> */}
         
        </Card>    
        {/* {outfitCards} */}
      
              
      </div>
    );
  }
  
  export default CapsuleCard;