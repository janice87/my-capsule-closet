import React, { useState} from "react"; 
import {useParams, useHistory} from 'react-router-dom'
import { Box, Container, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

const OutfitEditForm = ({outfitItems, updateOutfitObj, outfitObj, onDeleteOutfitItem}) => {

//const OutfitEditForm = ({updateOutfitObj, outfitObj, onDeleteOutfitItem, setOutfitItems}) => {
    const {id} = useParams()
    //console.log(id, "params id")
    const {outfit_name, capsule_id} = outfitObj

    const [errors, setErrors] = useState([])
    const history = useHistory()
   
    
  //console.log(outfitObj, "outfit obj outfit edit form")
  //console.log(outfitItems, "outfit itemss edit form ")

//   const currentOutfitItem = outfitItems.map(({id}) => id)
//   console.log(currentOutfitItem)

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

    // using outfitItems passed in from App
    const outfitItemsFiltered = outfitItems.filter(outfitItem => outfitItem.outfit_id === outfitObj.id)
    
     console.log(outfitItemsFiltered, "filtered")
     console.log(id, "filtered id")
    
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






//   // import React, { useContext, useState, useEffect } from "react"; 
// import React, { useState } from "react"; 
// //import {UserContext} from '../context/user' 
// // import {useHistory, useParams} from 'react-router-dom'
// import {useParams} from 'react-router-dom'
// import { Box, Container, Typography} from '@mui/material';
// import IconButton from '@mui/material/IconButton'
// import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

// // not displaying on front end bc need to pass in updated outfitItems??
// // const OutfitEditForm = ({outfitItems, onUpdateOutfitName, updateOutfitObj, outfitObj, onDeleteOutfitItem}) => {

// const OutfitEditForm = ({ onUpdateOutfitName, updateOutfitObj, outfitObj, onDeleteOutfitItem}) => {
//  //  const {currentUser} = useContext(UserContext);
//     const {id} = useParams()
//     //console.log(id, "params id")

//     // const [updatedOutfitName, setUpdatedOutfitName] = useState({
//     //     outfit_name: outfitObj.outfit_name,
//     //     user_id: currentUser.id,
//     //     capsule_id: outfitObj.capsule_id
//     // })

//     // const [updatedOutfitName, setUpdatedOutfitName] = useState({
//     //     outfit_name: "",
//     //     user_id: currentUser.id,
//     //     capsule_id: outfitObj.capsule_id
//     // })
//       const [errors, setErrors] = useState([])
//       const {outfit_items} = outfitObj
    

//   console.log(outfitObj, "outfit obj from outfit edit form")
//    // console.log(updatedOutfitName, "selected outfit obj")

//     // useEffect(() => {
//     //     fetch(`/outfits/${id}`)
//     //     .then(res => {
//     //         if(res.ok) {
//     //             res.json().then(outfitObject => {
//     //                 //console.log(outfitObject, "useeffect outfit obj")
//     //                 //updateOutfitObj(outfitObject)
//     //                 setUpdatedOutfitName(outfitObject)
//     //             }
//     //                 )
//     //         } else {
//     //             res.json().then(data => setErrors(data.errors))
//     //         }
//     //     })
//     // }, [id])

//     // const handleSubmit = (e) => {
//     //     e.preventDefault()
//     //     fetch(`/outfits/${id}`, {
//     //         method: 'PATCH',
//     //         headers: {
//     //             'Content-Type': 'application/json',
//     //             Accept: 'application/json'
//     //         },
//     //         body: JSON.stringify(updatedOutfitName)
//     //     })
//     //     .then(res => {
//     //         if(res.ok) {
//     //             res.json().then(data => {
//     //                 onUpdateOutfitName(data)                    
//     //             })
//     //         } else {
//     //             res.json().then(data => setErrors(data.errors))
//     //         }
//     //     })
//     // }

//     const handleDeleteOutfitItem = (id, outfitObj) => {
//         fetch(`/outfit_items/${id}`, {
//             method: 'DELETE',
//             headers: {
//               'Content-Type': 'application/json'
//             }
//           })
//           .then(res => {
//             if(res.ok) {
//                 console.log(id, "outfititem ID")
//                 onDeleteOutfitItem(id)  
//                 updateOutfitObj(outfitObj)    
//             } else {
//               res.json().then(data => setErrors(data.errors))
//             }
//           })
//     }

//     // using outfitItems passed in from App
//     // const outfitItemsFiltered = outfitItems.filter(outfitItem => outfitItem.outfit_id === id)
    
//     // // console.log(outfitItems, "outfit items array edit form")
//     //  console.log(outfitItemsFiltered, "filtered")
    
//     // const outfitList = outfitItemsFiltered.map((outfitItem) => (
//     //     <div key={outfitItem.id} style={{display: 'inline-flex', flexWrap: 'wrap', margin: "5px"}}>
//     //       <img src={outfitItem.image} key={outfitItem.id} alt="items" style={{height: "35vh"}} /><span>
//     //         {/* <p>{outfitItem.outfit_id}</p> */}
//     //       <IconButton aria-label="delete" size="small" onClick={() => handleDeleteOutfitItem(outfitItem.id)} color="secondary" style={{ marginLeft: ".05em" }}>
//     //           <BackspaceOutlinedIcon fontSize="small" />
//     //         </IconButton>   
//     //         </span>
//     //     </div> 
//     //     ))
  
//     // const outfitsFiltered = outfitItems.filter(outfitItem => outfitItem.outfit_id === id)  
//     // console.log(outfitsFiltered, "filtered outfit items")
    
//     //   const outfitList = outfitsFiltered.map(item => (
//     //     <div key={item.id} style={{display: 'inline-flex', flexWrap: 'wrap', margin: "5px"}}>
//     //       <img src={item.item.image} key={item.item.id} alt="items" style={{height: "35vh"}} />
//     //     </div> 
//     //     ))

//     // const outfitsFiltered = outfitItems.filter(outfitItem => outfitItem.outfit_id === id)  
//     // console.log(outfitsFiltered, "filtered outfit items")
    
   
 


//       const outfitList = outfit_items.map(outfitItem => (
//         <div key={outfitItem.id} style={{display: 'inline-flex', flexWrap: 'wrap', margin: "5px"}}>
//           <img src={outfitItem.image} key={outfitItem.id} alt="items" style={{height: "35vh"}} /><span>
//           <IconButton aria-label="delete" size="small" onClick={() => handleDeleteOutfitItem(outfitItem.id)} color="secondary" style={{ marginLeft: ".05em" }}>
//               <BackspaceOutlinedIcon fontSize="small" />
//             </IconButton>   
//             </span>
//         </div> 
//         ))

   
       
  
//     // const handleOnchange = (e) => {       
//     //     setUpdatedOutfitName({
//     //         ...updatedOutfitName,
//     //         [e.target.name]: e.target.value
//     //     })
//     // }

   

//     return (
//         <div>              
//        <Container maxWidth="lg">
//         <Box
//         m={1}        
//         justifyContent="center"
//         alignItems="center"
//         display="flex"
//         > 
//             {/* <form onSubmit={handleSubmit}> */}
//                 <Typography>{outfitObj.outfit_name}</Typography>
//             {/* <TextField                   
//                   id="outlined-size-small"
//                   name="outfit_name" 
//                   onChange={handleOnchange} 
//                   value={updatedOutfitName.outfit_name}             
//                   style={{ marginBottom: "15px", width: "300px" }}  
//                   variant="outlined"
//                   label="Outfit Name"
//                   InputLabelProps={{
//                     shrink: true,
//                   }}       
//                  /> 
//                   <Button type="submit" variant="contained" color="primary" style={{ marginBottom: "15px", marginTop: "20px", marginRight: "10px", marginLeft: "1px", width: "30px", height: 30 }} >Submit</Button> */}
//                  {outfitList}
//                  {/* {outfitItemsFiltered} */}

//             {/* </form> */}
//             </Box>
//             </Container>

//             {errors ? errors.map(error => <li key={error}>{error}</li>) : null }  
//     </div>
//     );
//   }
  
//   export default OutfitEditForm;