import React from 'react';
import {useParams} from 'react-router-dom';
import zodiacs from '../zodiacs.json';
import {useState} from 'react';
import AddPropertForm from '../components/AddPropertForm.jsx';
import UpdateForm from '../components/UpdateForm.jsx';
import ProPert from '../components/ProPert.jsx';
import Comments from '../components/Comments'
import axios from "axios";
import Family from '../components/Family';
import ThreeCards from '../components/ThreeCards';
import Card from 'react-bootstrap/Card';


export default function HorosCopeDetails(props){

   const {zodiacName} = useParams()
  
   const zodiac = zodiacs.find(element => {
    return element.name === zodiacName; 
   });
   var path = require('../images/burclar/'+zodiacName+'.png')
         
   let today = new Date();
   let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();

   // Yorum Listesi 
  const [proPert, setProPert] = useState([]);

  const [newPropert, setNewPropert] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Yorum Ekleme
  ///////////////////////////
  const addPropert = () => {
    if(newPropert) {
      let num = proPert.length + 1; 
      let newEntry = { id: num, title: newPropert, burc: zodiacName, status: false }
      
      axios.post('http://localhost:8000/api/ozellikler/'+zodiacName, {aciklama: newEntry.title , tarih: date } )
        .then(response => console.log(response.data));

      setProPert([...proPert, newEntry])
      setNewPropert(''); 
    }
  }
  

  // Yorum Silme
  ///////////////////////////
  const deletePropert = (id) => {
    let newProperts = proPert.filter( proPert => proPert.id !== id)
    setProPert(newProperts);
  }


  // Güncellemeden Vazgeç
  ///////////////////////////
  const cancelUpdate = () => {
    setUpdateData('');
  }

  // Güncellenen Yorumu Ekle
  ///////////////////////////
  const changePropert = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  // Yorum Güncelle
  ///////////////////////////
  const updatePropert = () => {
    let filterRecords = [...proPert].filter( propert => propert.id !== updateData.id );
    let updatedObject = [...filterRecords, updateData]
    setProPert(updatedObject);
    setUpdateData('');
  }
    return(
        
        <> 
        <div class="container bcontent mt-3" >
        <div class="card" style={{ width: '100%' }}>
        <h4 class="text-center mt-3 ">{zodiac.title} Burcu Genel Özellikleri</h4>
        <hr />
        <div class="row no-gutters">
                <div class="col-sm-5">
                 <img
                  alt=""
                  src={path}
                  height="100%"
                  class="card-img"/>
                </div>
                <div class="col-sm-7">
                    <div class="card-body">
                        <h5 class="card-title"><b>{zodiac.title}</b>  ({zodiac.spacing})</h5>
                        <p class="card-text mt-3"><b>Özellikleri:</b> {zodiac.desc}</p>
                        <p class="card-text"><b>{zodiac.title} erkeği:</b> {zodiac.male}</p>
                        <p class="card-text"><b>{zodiac.title} kadını:</b> {zodiac.women}</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <ThreeCards zodiacName= {zodiac} />
        <Family zodiacName= {zodiac} />
        </div>
        <Card class="commentcard" style={{ width: '100%' }}>
         <Card.Title  style={{ backgroundColor: '#303956' }}><h4 class=" d-inline-block align-top text-center text-white p-2">Ziyaretçilerden {zodiac.title} Yorumları</h4></Card.Title>
        <Comments></Comments>
        </Card>
  


  

    <ProPert
      proPert={proPert}
      setUpdateData={setUpdateData}
      deletePropert={deletePropert}
    />  

{updateData && updateData ? (
      <UpdateForm 
        updateData={updateData}
        changePropert={changePropert}
        updatePropert={updatePropert}
        cancelUpdate={cancelUpdate}
      />
    ) : (
      <AddPropertForm 
      newPropert={newPropert}
      setNewPropert={setNewPropert}
      addPropert={addPropert}
      />
    )}
 
        </div>
         </>
        
    )
    
}