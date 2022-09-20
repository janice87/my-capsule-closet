import ItemList from "./ItemList";

const ItemContainer = ({items, updateItemObj}) => {
    
    return (
        
        <div style={{display: 'inline-flex', flexWrap: 'wrap', margin: ".5%"}}>   
            My Closet
            <ItemList items={items} updateItemObj={updateItemObj} />        
      </div>
    );
  }
  
  export default ItemContainer;