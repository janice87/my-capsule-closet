import CapsuleCard from './CapsuleCard';

const CapsuleList = ({capsules, updateCapsuleObj, onDeleteCapsule}) => {

  const capsuleList = capsules.map(capsule =>
    <CapsuleCard key={capsule.id} capsule={capsule} updateCapsuleObj={updateCapsuleObj} onDeleteCapsule={onDeleteCapsule} />
     )
          
    return (
      <div>        
      {capsuleList}    
      </div>
    );
  }
  
  export default CapsuleList;