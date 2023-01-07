import React from 'react';
const AddPropertForm = ({ newPropert, setNewPropert, addPropert }) => {
  return(
    <>
      {/* Yorum Ekle */}
      <div className="row form-propert">
        <div className="col">
        
          <input 
            value={newPropert}
            onChange={ (e) => setNewPropert(e.target.value)}
            className="comment form-control form-control-lg"
          />
      
        </div>
        <div className="col-auto">
          <button
            onClick={addPropert}
            className="btn btn-lg btn-success"
          >Yorum Ekle</button>
        </div>
      </div>
      <br />
    </>
  )
}

export default AddPropertForm;