import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import { MDBBadge, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

const ProPert = ({ proPert, setUpdateData, deletePropert }) => {
  return(
    <>
      {proPert && proPert
      .sort((a, b) => a.id > b.id ? 1 : -1)
      .map( (propert, index) => {
        return(
          <React.Fragment key={propert.id} >
          <div className="taskBg text-white mb-5">
            <div className={ propert.status ? 'done' : '' }>
                 <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
                <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                  <div className='ms-2 me-auto'>
                    <div className=''>
                      <span className="taskText fw-bold">Yorumun: {propert.title}</span>
                   </div>
                  </div>
                    {propert.status ? null : (
                       <MDBBadge pill >
                <span title="Edit"
                  onClick={ () => setUpdateData({ 
                    id: propert.id, 
                    title: propert.title, 
                    status: propert.status ? true : false
                  }) }
                >
                  <FontAwesomeIcon icon={faPen} />
                  
                </span>
                </MDBBadge>
              )}
                  <MDBBadge pill >
                  <span title="Delete"
                onClick={() => deletePropert(propert.id)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
                  </MDBBadge>
                </MDBListGroupItem>
               </MDBListGroup>    
            </div>
          </div>
           <hr /> 
        </React.Fragment>
        )
      })
      }  
    </>
  )
}

export default ProPert;