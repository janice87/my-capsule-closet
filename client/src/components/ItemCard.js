import { useHistory } from 'react-router-dom';
// import { Box, Card, CardMedia} from '@mui/material';

const ItemCard = ({item, updateItemObj}) => {
    const {image, id} = item
    const history = useHistory()

    const handleShowCard = () => {
        updateItemObj(item)
        history.push(`/items/${id}`)
    }

    return (   
      <div style={{display: 'inline-flex', flexWrap: 'wrap', margin: ".15%"}}>
      <img src={image} key={item.id} alt="closet item" style={{height: "40vh"}} onClick={handleShowCard} />
      </div>    
    );
  }
  
  export default ItemCard;

 //<Box     
      //       justifyContent="center"
      //       alignItems="center"           
      //       style={{ marginBottom: "2em", marginTop: "2em" }}
      //     >              
      //       <Card sx={{ maxWidth: 200 }} style={{ marginBottom: "2em", marginTop: "2em"}}>
      //       <CardMedia
      //           component="img"
      //           height="200"
      //           image={image}
      //           alt="id"
      //           onClick={handleShowCard}
      //       />
      //       </Card>  
      // </Box>             *
      // </div>

       // <div style={{flexDirection: "row", display: "flex"}}>