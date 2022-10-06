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
import OutfitEditForm from "./components/OutfitEditForm";
import BuildOutfitsPage from "./components/BuildOutfitsPage";
import './App.css';

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
      'Karla',       
      'Noto Serif HK',
      'Playfair Display',
      'Libre Franklin'
    ].join(',')
  }
});

function App() {
  const [items, setItems] = useState([])
  const [itemObj, setItemObj] = useState({})
  const [capsules, setCapsules] = useState([])
  const [capsuleObj, setCapsuleObj] = useState({})
  const [outfits, setOutfits] = useState([])
  const [outfitObj, setOutfitObj] = useState({})
  const [outfitItems, setOutfitItems] = useState([])
  const [errors, setErrors] = useState(false)
  const {setCurrentUser} = useContext(UserContext)

const fetchData = () => {
  fetch('/outfits')
  .then(res => {
    if(res.ok) {
      res.json().then(outfits => {
        //console.log(outfits, "useeffect load outfits")
        setOutfits(outfits)
      })        
    } else {
      res.json().then(data => {
        //console.log(data.error, "outfits error")
        setErrors(data.error)
      })
    }
  })

  fetch('/items')
  .then(res => {
    if(res.ok) {
      res.json().then(data => {
        //console.log(data, "useeffect load items")
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
        //console.log(data, "useeffect load capsules")
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
        //console.log(data, "useeffect load outfit items")
        setOutfitItems(data)
      })
    } else {
      res.json().then(data => setErrors(data.error))
    }
  }) 
}

  useEffect(() => {   
    fetchData()
  },[])

  useEffect(() => {
    fetch('/me')
    .then(res => {
      if(res.ok) {
        res.json().then(loggedinUser => {
          //console.log(loggedinUser, "use effect /me")
          setCurrentUser(loggedinUser)
        })
      }
    })
  },[setCurrentUser])
 
  const onUpdateFetchData = () => {
    fetchData ()
  }
  
   const onUpdateCurrentUser = (user) => {
    setCurrentUser(user)
  }

  const updateItemObj = (itemObject) => {
    setItemObj(itemObject)
  }

  const updateCapsuleObj = (capsuleObject) => {    
    setCapsuleObj(capsuleObject)
  }

  const updateOutfitObj = (outfitObject) => { 
    setOutfitObj(outfitObject)
  }

  // ITEMS 
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
      onUpdateFetchData()
  } 

  // CAPSULES
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
    onUpdateFetchData()
  }

// OUTFIT
  const handleAddNewOutfit = (newOutfit) => {
    const updatedOutfits = [...outfits, newOutfit]
    setOutfits(updatedOutfits)
  }

  const handleDeleteOutfit = (id) => {
    const updatedOutfits = outfits.filter(outfit => outfit.id !== id)
    setOutfits(updatedOutfits)
  }

// OUTFIT ITEM
  const handleAddOutfitItem = (newOutfitItem) => {
    const updatedOutfitItems = [...outfitItems, newOutfitItem]   
    setOutfitItems(updatedOutfitItems)
  }

  const handleDeleteOutfitItem = (id) => {
    const updatedOutfitItems = outfitItems.filter(outfitItem => outfitItem.id !== id)
    setOutfitItems(updatedOutfitItems)
  }


  return (
    <div>
      <ThemeProvider theme={theme}>  
      <Navbar updateCurrentUser={onUpdateCurrentUser} />
      {errors ? <h2>{setErrors}</h2> : null}      
          <Switch>  
            <Route exact path="/login"><LoginForm onUpdateFetchData={onUpdateFetchData} updateCurrentUser={onUpdateCurrentUser} /></Route>  
            <Route exact path="/signup"><SignupForm onUpdateFetchData={onUpdateFetchData} updateCurrentUser={onUpdateCurrentUser} /></Route>
                  
            <Route exact path="/items/new"><NewItemForm onAddItem={handleAddNewItem} /></Route>
            <Route exact path="/items/:id/edit"><ItemEditForm onEditItem={handleEditItem} /></Route>
            <Route exact path="/items/:id"><ItemDetail itemObj={itemObj} onDeleteItem={handleOnDeleteItem} /></Route>          
            <Route exact path="/items"><ItemContainer items={items} updateItemObj={updateItemObj} /></Route>

            <Route exact path="/capsules/:id/edit"><CapsuleEditForm onEditCapsule={handleEditCapsuleName} /></Route> 
            <Route exact path="/capsules/:id"><CapsuleDetail capsule={capsuleObj} outfits={outfits} outfitItems={outfitItems} onDeleteOutfit={handleDeleteOutfit} onUpdateOutfitObj={updateOutfitObj} /></Route> 
            <Route exact path="/capsules"><CapsuleContainer capsules={capsules} updateCapsuleObj={updateCapsuleObj} onAddCapsule={handleAddCapsule} onDeleteCapsule={handleDeleteCapsule} /></Route>                       
            
            <Route exact path="/outfits/new"><BuildOutfitsPage items={items} outfits={outfits} capsules={capsules} onAddOutfitItem={handleAddOutfitItem} onAddNewOutfit={handleAddNewOutfit} /></Route>  
            <Route exact path="/outfits/:id"><OutfitEditForm outfitItems={outfitItems} outfitObj={outfitObj} updateOutfitObj={updateOutfitObj} onDeleteOutfitItem={handleDeleteOutfitItem} setOutfitItems={setOutfitItems} /></Route> 
            <Route exact path="/"><Home /></Route>      
          </Switch>    
      </ThemeProvider>           
    </div>
  );
}

export default App;


    