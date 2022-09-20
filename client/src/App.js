import {useState, useEffect} from 'react'
import { Switch, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import ItemContainer from './components/ItemContainer';
import ItemDetail from './components/ItemDetail';


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
  // const [capsules, setCapsules] = useState([])
  // const [capsuleObj, setCapsuleObj] = useState({})
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetch('/items')
    .then(res => {
      if(res.ok) {
        res.json().then(data => {
            // console.log(data)
            setItems(data)
        })
      } else {
        res.json().then(data => {
          // console.log(data)
          setErrors(data.error)
        })
      }
    })

    // fetch('/capsules')
    // .then(res => {
    //   if(res.ok) {
    //     res.json().then(data => {
    //       //console.log(data)
    //       setCapsules(data)
    //     })
    //   } else {
    //     res.json().then(data => {
    //       // console.log(data)
    //       setErrors(data.error)
    //     })
    //   }
    // })

  },[])

  const updateItemObj = (itemObject) => {
    setItemObj(itemObject)
  }


  return (
    <div>
      <ThemeProvider theme={theme}>   
      <Navbar />
      {errors ? <li key={errors}>Error: {errors}</li> : null}  
      <Switch>
            <Route exact path="/items"><ItemContainer items={items} updateItemObj={updateItemObj} /></Route>
            <Route exact path="/items/:id"><ItemDetail itemObj={itemObj}/></Route>
         
          
      </Switch>
      </ThemeProvider>    
   
         
      
    </div>
  );
}

export default App;


