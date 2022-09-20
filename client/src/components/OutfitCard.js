
const OutfitCard = ({outfit}) => {
    const {outfit_name, items} = outfit
  
   const outfitList = items.map(item => (
    <div key={item.id} style={{display: 'inline-flex', flexWrap: 'wrap', margin: ".5%"}}>
      <img src={item.image} key={item.id} alt="closet item" style={{height: "35vh"}} />
    </div>
   ))
      
      return (
        <div>      
          
          <p>{outfit_name}</p>
             {outfitList}
        </div>
      );
    }
    
    export default OutfitCard;