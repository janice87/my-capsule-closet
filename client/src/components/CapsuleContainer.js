import CapsuleList from './CapsuleList';

const CapsuleContainer = ({capsules, updateCapsuleObj}) => {
            
    return (
      <div>        
            Capsule Wardrobe Collections    
            <CapsuleList capsules={capsules} updateCapsuleObj={updateCapsuleObj} />     
      </div>
    );
  }
  
  export default CapsuleContainer;