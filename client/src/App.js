import React, { useContext } from "react"; 
import {UserContext} from './context/user'  
import {useState, useEffect} from 'react'
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
//import NewCapsuleForm from "./components/NewCapsuleForm";
import ItemEditForm from "./components/ItemEditForm";

import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F3ECE7'
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
  const [errors, setErrors] = useState(false)
  // const [currentUser, setCurrentUser] = useState(false)
  
  // const {currentUser, setCurrentUser} = useContext(UserContext)
  const {setCurrentUser} = useContext(UserContext)
  
  useEffect(() => {
    fetch('/items')
    .then(res => {
      if(res.ok) {
        res.json().then(data => setItems(data))
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
        res.json().then(data => setCapsules(data))        
      } else {
        res.json().then(data => {
          //console.log(data.error, "capsules error")
          setErrors(data.error)
        })
      }
    })

    fetch('/me')
    .then(res => {
      if(res.ok) {
        res.json().then(loggedinUser => setCurrentUser(loggedinUser))
      }
    })
  },[setCurrentUser])

  const onUpdateCurrentUser = (user) => {
    setCurrentUser(user)
  }

  const updateItemObj = (itemObject) => {
    setItemObj(itemObject)
  }

  const updateCapsuleObj = (capsuleObject) => {
    setCapsuleObj(capsuleObject)
  }

  const handleAddNewItem = (newItem) => {
    const updatedItems = [...items, newItem]  
    setItems(updatedItems)
    console.log(newItem)
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

  const handleAddCapsule = (newCapsule) => {
    const updatedCapsules = [...capsules, newCapsule]
    setCapsules(updatedCapsules)
  }

  const handleDeleteCapsule = (id) => {
    const updatedCapsules = capsules.filter(capsule => capsule.id !== id)
    setCapsules(updatedCapsules)
  }

  return (
    <div>
      <ThemeProvider theme={theme}>  
      <Navbar updateCurrentUser={onUpdateCurrentUser} />

      {errors ? <h2>{setErrors}</h2> : null}

      <Route exact path="/"><Home /></Route>      
      <Switch>
            <Route exact path="/login"><LoginForm updateCurrentUser={onUpdateCurrentUser}/></Route>           
            <Route exact path="/signup"><SignupForm updateCurrentUser={onUpdateCurrentUser}/></Route>
           
            <Route exact path="/items/new"><NewItemForm onAddItem={handleAddNewItem} /></Route>
            <Route exact path="/items/:id/edit"><ItemEditForm onEditItem={handleEditItem} /></Route>
            <Route exact path="/items/:id"><ItemDetail itemObj={itemObj} onDeleteItem={handleOnDeleteItem } /></Route>
            <Route exact path="/items"><ItemContainer items={items} updateItemObj={updateItemObj} /></Route>
            
            {/* <Route exact path="/capsules/new"><NewCapsuleForm onAddCapsule={handleAddCapsule} /></Route> */}
            <Route exact path="/capsules/:id"><CapsuleDetail capsule={capsuleObj} /></Route>
            <Route exact path="/capsules"><CapsuleContainer capsules={capsules} updateCapsuleObj={updateCapsuleObj} onAddCapsule={handleAddCapsule} onDeleteCapsule={handleDeleteCapsule} /></Route>
              
          
      </Switch>    
      </ThemeProvider>           
    </div>
  );
}

export default App;


