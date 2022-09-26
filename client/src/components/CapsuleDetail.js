import {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import { Box, Container, Typography, Button } from '@mui/material';
import OutfitCard from './OutfitCard';

const CapsuleDetail = ({capsule}) => {
  const [outfits, setOutfits] = useState([])
  const [errors, setErrors] = useState(false)
  const {capsule_name, id} = capsule
  const history = useHistory()

  useEffect(() => {
    fetch('/outfits')
    .then(res => {
      if(res.ok) {
        res.json().then(outfits => {
          console.log(outfits, "useeffect outfits CAPSULE DETAIL")
          setOutfits(outfits)
        })        
      } else {
        res.json().then(data => {
          //console.log(data.error, "outfits cap detail error")
          setErrors(data.error)
        })
      }
    })
  },[])

const outfitsFiltered = outfits.filter(outfit => outfit.capsule_id === id)  

const outfitArray = outfitsFiltered.map(outfit => 
  <OutfitCard outfit={outfit} key={outfit.id} />
)

const handleBack = () => {
  history.push('/capsules')
}   

    return (
      <div>       
      <Container maxWidth="lg">
        <Box
        m={1}        
        justifyContent="center"
        alignItems="center"
        >       
        <Typography variant="h4" align="center" style={{ marginBottom: "1em", marginTop: "1em" }}>{capsule_name}
        <span><Button size="small" variant="outlined" onClick={handleBack} color="secondary" style={{ marginRight: "1em", marginLeft: "1em" }}>BACK</Button> 
        </span> 
        </Typography>       
         {outfitArray}
           </Box>
        </Container> 
        {errors ? <h2>{setErrors}</h2> : null} 
      </div>
    );
  }
  
  export default CapsuleDetail;