import { useState} from 'react'
import { useHistory } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import OutfitCard from './OutfitCard';
import IconButton from '@mui/material/IconButton'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

const CapsuleDetail = ({capsule, outfits, outfitItems, onDeleteOutfit, onUpdateOutfitObj}) => {
  const [errors, setErrors] = useState(false)
  const {capsule_name, id} = capsule  
  const history = useHistory()

  // console.log(capsule, "capsule detail")
  // console.log(outfits, "outfits capsule detail")
  // console.log(outfitItems, "outfit items capsule detail")
  
  const handleBack = () => {
    history.push('/capsules')
  }  

const outfitsFiltered = outfits.filter(outfit => outfit.capsule_id === id)  

const outfitArray = outfitsFiltered.map(outfit => 
  <OutfitCard outfit={outfit} key={outfit.id} outfitItems={outfitItems} onDeleteOutfit={onDeleteOutfit} onUpdateOutfitObj={onUpdateOutfitObj} />
)

    return (
      <div>       
          <Container maxWidth="lg">
          <Box
            m={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            >          
              <IconButton size="small" onClick={handleBack} color="secondary" style={{ marginLeft: ".05em" }}>             
                <KeyboardBackspaceOutlinedIcon fontSize="small" />
                </IconButton> 
                <Typography variant="h4" align="center" style={{ marginBottom: "1em", marginTop: "1em" }}>{capsule_name}</Typography>
                </Box>
            </Container> 
     
          <Container maxWidth="lg">
          <Box
            m={1}        
            justifyContent="center"
            alignItems="center"
            >        
            {outfitsFiltered.length > 0 ? outfitArray : <Typography variant="subtitle1" align="center" style={{ marginBottom: "1em", marginTop: "1em" }}>You have no outfits yet</Typography>}
          </Box>
          </Container> 
          {errors ? <h2>{setErrors}</h2> : null} 
      </div>
    );
  }
                            
  export default CapsuleDetail;
