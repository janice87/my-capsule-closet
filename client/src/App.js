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
          console.log(data.error)
          setErrors(data.error)
        })
      }
    })

    fetch('/capsules')
    .then(res => {
      if(res.ok) {
        res.json().then(data => {
          console.log(data)
          setCapsules(data)
        })
      } else {
        res.json().then(data => {
          console.log(data)
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

  const onUpdateCurrentUser = (user) => {
    setCurrentUser(user)
  }

  return (
    <div>
      <ThemeProvider theme={theme}>  
      <Navbar updateCurrentUser={onUpdateCurrentUser} />
      <Route exact path="/"><Home /></Route>    
        {errors ? <li key={errors}>Error: {errors}</li> : null}  
      <Switch>
            <Route exact path="/login"><LoginForm updateCurrentUser={onUpdateCurrentUser}/></Route>           
            <Route exact path="/signup"><SignupForm updateCurrentUser={onUpdateCurrentUser}/></Route>
            <Route exact path="/items"><ItemContainer items={items} updateItemObj={updateItemObj} /></Route>
            <Route exact path="/items/new"><NewItemForm onAddItem={handleAddNewItem} /></Route>
            <Route exact path="/items/:id"><ItemDetail itemObj={itemObj}/></Route>
            <Route exact path="/capsules"><CapsuleContainer capsules={capsules} updateCapsuleObj={updateCapsuleObj} /></Route>
            <Route exact path="/capsules/:id"><CapsuleDetail capsule={capsuleObj} /></Route>
              
          
      </Switch>
    
      </ThemeProvider>    
   
         
      
    </div>
  );
}

export default App;


