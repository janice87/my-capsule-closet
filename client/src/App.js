import React, { useState, useEffect, useContext } from "react"; 
import {UserContext} from './context/user'  
import { Switch, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './components/Home'
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ItemContainer from './components/ItemContainer';
import NewItemForm from './components/NewItemForm';
import ItemDetail from './components/ItemDetail';
import CapsuleContainer from './components/CapsuleContainer';
import CapsuleDetail from './components/CapsuleDetail';
import CapsuleEditForm from "./components/CapsuleEditForm";
import ItemEditForm from "./components/ItemEditForm";
import './App.css';

// const theme = createTheme({
//   palette: {
//     primary: {      
//       main: '#F3E1D9',
//       contrastText: '#fff',
//     },
//     secondary: {     
//       main: '#F3ECE7',     
//       contrastText: '#000',
//     },
//   },  
//   typography: {
//     fontFamily: [
//       'Libre Franklin',
//       'Karla',
//       'Playfair Display',       
//       'Noto Serif HK'
//     ].join(',')
//   }
// });


// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#F3ECE7',
//       contrastText: '#000',
//     },
//     secondary: {
//       main: '#F3E1D9',
//       contrastText: '#000',
//     }  
//   },
//   typography: {
//     fontFamily: [
//       'Libre Franklin',
//       'Karla',
//       'Playfair Display',       
//       'Noto Serif HK'
//     ].join(',')
//   }
// });

const theme = createTheme({
  palette: {
    primary: {
      main: '#F3ECE7',
      dark: '#F3E1D9'
    },
    secondary: {
      main: '#000000'
    }  
  },
  typography: {
    fontFamily: [
      'Libre Franklin',
      'Karla',
      'Playfair Display',       
      'Noto Serif HK'
    ].join(',')
  }
});


function App() {
  const [items, setItems] = useState([])
  const [itemObj, setItemObj] = useState({})
  const [capsules, setCapsules] = useState([])
  const [capsuleObj, setCapsuleObj] = useState({})
  const [outfits, setOutfits] = useState([])
  const [outfitItems, setOutfitItems] = useState([])
  const [errors, setErrors] = useState(false)
  const {setCurrentUser} = useContext(UserContext)
  
  useEffect(() => {
    fetch('/outfits')
    .then(res => {
      if(res.ok) {
        res.json().then(outfits => {
          console.log(outfits, "useeffect load outfits")
          setOutfits(outfits)
        })        
      } else {
        res.json().then(data => {
          //console.log(data.error, "capsules error")
          setErrors(data.error)
        })
      }
    })

    fetch('/items')
    .then(res => {
      if(res.ok) {
        res.json().then(data => {
          console.log(data, "useeffect load items")
          setItems(data)
        })
      } else {
        res.json().then(data => {
          //console.log(data.error, "items")
          setErrors(data.error)
        })
      }
    })

    fetch('/capsules')
    .then(res => {
      if(res.ok) {
        res.json().then(data => {
          console.log(data, "useeffect load capsules")
          setCapsules(data)
        })        
      } else {
        res.json().then(data => {
          //console.log(data.error, "capsules error")
          setErrors(data.error)
        })
      }
    })

    fetch('/outfit_items')
    .then(res => {
      if(res.ok) {
        res.json().then(data => {
          console.log(data, "useeffect load outfit items")
          setOutfitItems(data)
        })
      } else {
        res.json().then(data => setErrors(data.error))
      }
    })  
  },[])
  
    // },[setCurrentUser])
    // console.log(outfits, "outfits from useeffect")

  useEffect(() => {    
    fetch('/me')
    .then(res => {
      if(res.ok) {
        res.json().then(loggedinUser => setCurrentUser(loggedinUser))
      }
    })
  }, [setCurrentUser])

  const onUpdateCurrentUser = (user) => {
    setCurrentUser(user)
  }

  const updateItemObj = (itemObject) => {
    setItemObj(itemObject)
  }

  const updateCapsuleObj = (capsuleObject) => {
    setCapsuleObj(capsuleObject)
  }

  // const onUpdateCapsules = (capsules) => {
  //   setCapsules(capsules)
  // }

  // const onUpdateOutfits = (outfitsArray) => {
  //   console.log(outfitsArray, "outfits from App")
  //   setOutfits(outfitsArray)
  // }

  // Add/Edit/Delete Items
  const handleAddNewItem = (newItem) => {
    const updatedItems = [...items, newItem]  
    setItems(updatedItems)    
  }

  const handleEditItem = (updatedObj) => {
    const updatedItems = items.map(item => 
      item.id === updatedObj.id ? updatedObj : item)
      setItems(updatedItems)   
  }

  const handleOnDeleteItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id)
      setItems(updatedItems)
  } 

  // Add/Edit/Delete Capsules
  const handleAddCapsule = (newCapsule) => {
    const updatedCapsules = [...capsules, newCapsule]
    setCapsules(updatedCapsules)
  }
  
  const handleEditCapsuleName = (updatedCapsule) => {
    const updatedCapsules = capsules.map(capsule => 
      capsule.id === updatedCapsule.id ? updatedCapsule : capsule)
      setCapsules(updatedCapsules)
  }
  const handleDeleteCapsule = (id) => {
    const updatedCapsules = capsules.filter(capsule => capsule.id !== id)
    setCapsules(updatedCapsules)
  }

// Add new outfit
  const handleAddNewOutfit = (newOutfit) => {
    const updatedOutfits = [...outfits, newOutfit]
    setOutfits(updatedOutfits)
  }

// Add new outfit item
  const handleAddOutfitItem = (newOutfitItem) => {
    const updatedOutfitItems = [...outfitItems, newOutfitItem]
    console.log(updatedOutfitItems, "added outfit item")
    setOutfitItems(updatedOutfitItems)
  }


  return (
    <div>
      <ThemeProvider theme={theme}>  
      <Navbar updateCurrentUser={onUpdateCurrentUser} />
      {errors ? <h2>{setErrors}</h2> : null}      
      <Switch>
            <Route exact path="/login"><LoginForm updateCurrentUser={onUpdateCurrentUser} setItems={setItems} setCapsules={setCapsules} setOutfits={setOutfits}/></Route>  
            {/* <Route exact path="/login"><LoginForm updateCurrentUser={onUpdateCurrentUser} /></Route>    */}
            <Route exact path="/signup"><SignupForm updateCurrentUser={onUpdateCurrentUser}/></Route>
           
            <Route exact path="/items/new"><NewItemForm onAddItem={handleAddNewItem} /></Route>
            <Route exact path="/items/:id/edit"><ItemEditForm onEditItem={handleEditItem} /></Route>
            <Route exact path="/items/:id"><ItemDetail itemObj={itemObj} onDeleteItem={handleOnDeleteItem } /></Route>
            <Route exact path="/items"><ItemContainer items={items} outfits={outfits} capsules={capsules} updateItemObj={updateItemObj} onAddOutfitItem={handleAddOutfitItem} onAddNewOutfit={handleAddNewOutfit} /></Route>
            {/* <Route exact path="/items"><ItemContainer items={items} outfits={outfits} capsules={capsules} updateItemObj={updateItemObj} onAddOutfitItem={handleAddOutfitItem} onAddNewOutfit={handleAddNewOutfit} onUpdateOutfits={onUpdateOutfits} /></Route> */}
            {/* <Route exact path="/items"><ItemContainer items={items} outfits={outfits} capsules={capsules} updateItemObj={updateItemObj} updateCapsuleObj={updateCapsuleObj} capsule={capsuleObj} onAddOutfitItem={handleAddOutfitItem} onAddNewOutfit={handleAddNewOutfit} onUpdateCapsules={onUpdateCapsules} /></Route> */}


            <Route exact path="/capsules/:id/edit"><CapsuleEditForm onEditCapsule={handleEditCapsuleName} /></Route> 
            {/* <Route exact path="/capsules/:id"><CapsuleDetail capsule={capsuleObj} outfits={outfits} /></Route>  */}
            <Route exact path="/capsules/:id"><CapsuleDetail capsule={capsuleObj} /></Route> 
            <Route exact path="/capsules"><CapsuleContainer capsules={capsules} updateCapsuleObj={updateCapsuleObj} onAddCapsule={handleAddCapsule} onDeleteCapsule={handleDeleteCapsule} /></Route>                       
            <Route exact path="/"><Home /></Route>      
      </Switch>    
      </ThemeProvider>           
    </div>
  );
}

export default App;


