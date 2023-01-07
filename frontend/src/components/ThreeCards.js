import React from "react";

const ThreeCards = ({ zodiacName }) => {
  return(
    <>
<div class="card-group mt-5 mb-5">
  <div class="card border-primary">
    <div class="card-body">
      <h5 class="card-title ">{zodiacName.title} Tarzı</h5>
      <p class="card-text text-justify" >{zodiacName.tarz}
      </p>
    </div>
    <div class="card-footer bg-primary text-white ">
      <small ></small>
    </div>
  </div>
  <div class="card border-success">
    <div class="card-body">
      <h5 class="card-title">{zodiacName.title} Olumlu Yönleri</h5>
      <p class="card-text text-justify">{zodiacName.pozitif}</p>
    </div>
    <div class="card-footer bg-success text-white">
      <small></small>
    </div>
  </div>
  <div class="card border-danger">
    <div class="card-body">
      <h5 class="card-title">{zodiacName.title} Olumsuz Yönleri</h5>
      <p class="card-text text-justify">
         {zodiacName.negatif}
      </p>
    </div>
    <div class="card-footer bg-danger text-white">
      <small></small>
    </div>
  </div>
</div>
    </>
  )
}

export default ThreeCards;