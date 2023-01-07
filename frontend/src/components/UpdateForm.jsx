import React from 'react';
const UpdateForm = ({ updateData, changePropert, updatePropert, cancelUpdate }) => {
  return(
    <>
      {/* Yorum Güncelle */}
      <div className="row">
        <div className="col">
          <input 
            value={ updateData && updateData.title }
            onChange={ (e) => changePropert(e)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button
            onClick={updatePropert}
            className="btn btn-lg btn-success mr-20"
          >Güncelle</button>
          <button
            onClick={cancelUpdate}
            className="btn btn-lg btn-warning"
          >Vazgeç</button>
        </div>
      </div>
      <br />  
    </>
  )
}

export default UpdateForm;