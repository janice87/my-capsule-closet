import React, { useContext, useState, useEffect } from "react"; 
import {UserContext} from '../context/user' 
// import {useHistory, useParams} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {TextField, Box, Button, Container} from '@mui/material';
import IconButton from '@mui/material/IconButton'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

// need updateoutfitobj or outfit obj??? 
// how to get the capsule id??? 
// filtered items are empty
// edit outfit name not working, check params in controller?
const OutfitEditForm = ({outfitItems, onUpdateOutfitName, updateOutfitObj, outfitObj}) => {
   const {currentUser} = useContext(UserContext);
    const {id} = useParams()
    console.log(id, "params id")

    const [updatedOutfitName, setUpdatedOutfitName] = useState({
        outfit_name: outfitObj.outfit_name,
        user_id: currentUser.id,
        capsule_id: outfitObj.capsule_id
    })
     const [errors, setErrors] = useState([])
     const {items} = outfitObj
     //const history = useHistory()

  
   console.log(outfitObj, "outfit obj from outfit edit form")
   // console.log(updatedOutfitName, "selected outfit obj")

    useEffect(() => {
        fetch(`/outfits/${id}`)
        .then(res => {
            if(res.ok) {
                res.json().then(outfitObject => {
                    //console.log(outfitObject, "useeffect outfit obj")
                    //updateOutfitObj(outfitObject)
                    setUpdatedOutfitName(outfitObject)
                }
                    )
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
    }, [id])

    // const outfitsFiltered = outfitItems.filter(outfitItem => outfitItem.outfit_id === id)  
    // console.log(outfitsFiltered, "filtered outfit items")
    
    //   const outfitList = outfitsFiltered.map(item => (
    //     <div key={item.id} style={{display: 'inline-flex', flexWrap: 'wrap', margin: "5px"}}>
    //       <img src={item.item.image} key={item.item.id} alt="items" style={{height: "35vh"}} />
    //     </div> 
    //     ))

    // const outfitsFiltered = outfitItems.filter(outfitItem => outfitItem.outfit_id === id)  
    // console.log(outfitsFiltered, "filtered outfit items")
    
    //delte to outfit item
    const handleDeleteOutfitItem = () => {
        // fetch('/outfit_items/${id}')
        console.log("im deleted")
    }


      const outfitList = items.map(item => (
        <div key={item.id} style={{display: 'inline-flex', flexWrap: 'wrap', margin: "5px"}}>
          <img src={item.image} key={item.id} alt="items" style={{height: "35vh"}} /><span>
          <IconButton aria-label="delete" size="small" onClick={handleDeleteOutfitItem} color="secondary" style={{ marginLeft: ".05em" }}>
              <BackspaceOutlinedIcon fontSize="small" />
            </IconButton>   
            </span>
        </div> 
        ))

       
  
    const handleOnchange = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        setUpdatedOutfitName({
            ...updatedOutfitName,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/outfits/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(updatedOutfitName)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(data => {
                    onUpdateOutfitName(data)                    
                })
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
    }

    return (
        <div> 
             
             <Container maxWidth="lg">
        <Box
        m={1}        
        justifyContent="center"
        alignItems="center"
        display="flex"
        > 
            <form onSubmit={handleSubmit}>
            <TextField                   
                  id="outlined-size-small"
                  name="outfit_name" 
                  onChange={handleOnchange} 
                  value={updatedOutfitName.outfit_name}             
                  style={{ marginBottom: "15px", width: "300px" }}  
                  variant="outlined"
                  label="Outfit Name"
                  InputLabelProps={{
                    shrink: true,
                  }}       
                 /> 
                  <Button type="submit" variant="contained" color="primary" style={{ marginBottom: "15px", marginTop: "20px", marginRight: "10px", marginLeft: "1px", width: "30px", height: 30 }} >Submit</Button>
                 {outfitList}

            </form>
            </Box>
            </Container>

            {errors ? errors.map(error => <li key={error}>{error}</li>) : null }  
    </div>
    );
  }
  
  export default OutfitEditForm;