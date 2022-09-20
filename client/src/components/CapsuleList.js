import CapsuleCard from './CapsuleCard';

const CapsuleList = ({capsules, updateCapsuleObj}) => {
  
  const capsuleList = capsules.map(capsule =>
    <CapsuleCard key={capsule.id} capsule={capsule} updateCapsuleObj={updateCapsuleObj}/>
     )

          
    return (
      <div>        
      {capsuleList}    
      </div>
    );
  }
  
  export default CapsuleList;