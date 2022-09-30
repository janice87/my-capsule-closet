import React, { useState} from "react"; 
// import {useParams, useHistory} from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Box, Container, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

const OutfitEditForm = ({outfitItems, updateOutfitObj, outfitObj, onDeleteOutfitItem}) => {
    // const {id} = useParams()
    //console.log(id, "params id")
    const {outfit_name, capsule_id} = outfitObj

    const [errors, setErrors] = useState([])
    const history = useHistory()

  //   const itemsArray = items.map(itemObj => itemObj)

    
  //  const {outfits, outfit_items} = itemObj
  //   console.log(outfits, "outfits destru")
  //   console.log(outfit_items, "outfits destru")
//const itemsFiltered = items.outfit_items.map(outfitItem => outfitItem.outfit_id === 36 )
//console.log(itemsFiltered)

//  const outfitList = outfitItemsFiltered.map((outfitItem) => (
  //      <div key={outfitItem.id} style={{display: 'inline-flex', flexWrap: 'wrap', margin: "5px"}}>
  //        <img src={outfitItem.image} key={outfitItem.id} alt="items" style={{height: "35vh"}} /><span>          
  //        <IconButton aria-label="delete" size="small" onClick={() => handleDeleteOutfitItem(outfitItem.id)} color="secondary" style={{ marginLeft: ".05em" }}>
  //            <BackspaceOutlinedIcon fontSize="small" />
  //          </IconButton>   
  //          </span>
  //      </div> 
  //      )) 

    
  //console.log(outfitObj, "outfit obj outfit edit form")
  //console.log(outfitItems, "outfit itemss edit form ")

    const handleDeleteOutfitItem = (outfitItemId) => {
        fetch(`/outfit_items/${outfitItemId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => {
            if(res.ok) {
                console.log(outfitItemId, "outfititem ID")
                onDeleteOutfitItem(outfitItemId)  
                updateOutfitObj(outfitObj)
            } else {
              res.json().then(data => setErrors(data.errors))
            }
          })
    }

  const outfitItemsFiltered = outfitItems.filter(outfitItem => outfitItem.outfit_id === outfitObj.id)
    
    //  console.log(outfitItemsFiltered, "filtered")
      //console.log(id, "filtered id")
    
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



