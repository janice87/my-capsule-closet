import {useState} from 'react'
//import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom'

import { Typography, Box} from '@mui/material';
import IconButton from '@mui/material/IconButton'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
//import OutfitEditForm from './OutfitEditForm';

//const OutfitCard = ({outfit, onDeleteOutfit}) => {
const OutfitCard = ({outfit, outfitItems, onDeleteOutfit, onUpdateOutfitObj}) => {
   const [errors, setErrors] = useState(false) 
   const {outfit_name, id} = outfit
  //const {outfit_name, id, items} = outfit
  const history = useHistory()
 
   
    const handleDeleteOutfit = () => {
      fetch(`/outfits/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if(res.ok) {
          onDeleteOutfit(id)       
        } else {
          res.json().then(data => setErrors(data))
        }
      })
    }

    const handleEditOutfit = () => {
        history.push(`/outfits/${id}`)
        onUpdateOutfitObj(outfit)
      }
      console.log(outfit, "outfit obj to edit")

    
  // // using outfitItems passed in
  const outfitsFiltered = outfitItems.filter(outfitItem => outfitItem.outfit_id === id)  

    const outfitList = outfitsFiltered.map(item => (
      <div key={item.id} style={{display: 'inline-flex', flexWrap: 'wrap', margin: "5px"}}>
        <img src={item.item.image} key={item.item.id} alt="items" style={{height: "35vh"}} />
      </div> 
      ))
  
           
      return (
        <div>     
           <Box m={1} display="flex" justifyContent="left" alignItems="left" style={{ marginTop: "1em", marginBottom: "1em" }}>
         <Typography variant="button" display="block" gutterBottom>{outfit_name}</Typography>
         <IconButton aria-label="delete" size="small" onClick={handleDeleteOutfit} color="secondary" style={{ marginLeft: ".05em" }}>
              <BackspaceOutlinedIcon fontSize="small" />
            </IconButton> 
            <IconButton aria-label="edit" size="small" onClick={handleEditOutfit} color="secondary" style={{ marginLeft: ".05em" }}>
              <EditOutlinedIcon fontSize="small" />
            </IconButton>             
            </Box>
             {outfitList}
             {errors ? <li key={errors}>{errors}</li>: null} 
        </div>
      );
    }
    
    export default OutfitCard;