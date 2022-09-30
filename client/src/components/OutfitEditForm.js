import React, { useState} from "react"; 
import { useHistory } from 'react-router-dom'
import { Box, Container, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

const OutfitEditForm = ({outfitItems, updateOutfitObj, outfitObj, onDeleteOutfitItem}) => {
    const {outfit_name, capsule_id} = outfitObj
    const [errors, setErrors] = useState([])
    const history = useHistory()
     
  //console.log(outfitObj, "outfit obj edit form")
  //console.log(outfitItems, "outfit items edit form")

    const handleDeleteOutfitItem = (outfitItemId) => {
        fetch(`/outfit_items/${outfitItemId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => {
            if(res.ok) {          
                onDeleteOutfitItem(outfitItemId)  
                updateOutfitObj(outfitObj)
            } else {
              res.json().then(data => setErrors(data.errors))
            }
          })
    }

  const outfitItemsFiltered = outfitItems.filter(outfitItem => outfitItem.outfit_id === outfitObj.id)
  
  // console.log(outfitItemsFiltered, "filtered")
       
    const outfitList = outfitItemsFiltered.map((outfitItem) => (
        <div key={outfitItem.id} style={{display: 'inline-flex', flexWrap: 'wrap', margin: "5px"}}>
          <img src={outfitItem.image} key={outfitItem.id} alt="items" style={{height: "35vh"}} /><span>          
          <IconButton aria-label="delete" size="small" onClick={() => handleDeleteOutfitItem(outfitItem.id)} color="secondary" style={{ marginLeft: ".05em" }}>
              <BackspaceOutlinedIcon fontSize="small" />
            </IconButton>   
            </span>
        </div> 
        )) 
  
    const handleBack = () => {
          history.push(`/capsules/${capsule_id}`)
        }
          
    return (
        <div>              
            <Container maxWidth="lg">
                <Box
                m={1}        
                justifyContent="left"
                alignItems="left"
                display="flex"
                style={{ marginTop: "1em", marginBottom: "1em" }}
                >     
              <IconButton size="small" onClick={handleBack} color="secondary" style={{ marginRight: ".05em" }}>             
                <KeyboardBackspaceOutlinedIcon fontSize="small" />
              </IconButton>      
                <Typography variant="button" display="block">{outfit_name}</Typography> 
                </Box>
            </Container>         
        
          <Container maxWidth="lg">
          <Box
            m={1}        
            justifyContent="center"
            alignItems="center"
            >            
                 {outfitList}                        
            </Box>
            </Container>
            {errors ? errors.map(error => <li key={error}>{error}</li>) : null }  
    </div>
    );
  }
  
  export default OutfitEditForm;



