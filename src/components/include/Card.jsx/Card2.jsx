import React from 'react'
import '../../css/card2.css'


function Card2({heading, desc}) {
  return (
    <div class="card2">
      <div class="textBox2">
        <div class="textContent2">
          <p class="h12">{heading}</p>
        </div>
        <p class="p2">
         {desc}
        </p>
        <div></div>
      </div>
    </div>
  );
}

export default Card2