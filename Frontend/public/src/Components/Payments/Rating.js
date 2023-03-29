import React from 'react'
import './Rating.css'
import {useNavigate,Link} from 'react-router-dom'
const rating = () => {
  return (
    <div > 
    <div  class="rating_body" >
        <div >  
            <h3 style={{marginLeft: `250px`, marginRight: `80px`}}> Rate farmer on how satisfied you were!</h3>
        <div class="rating">
        <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label>
        <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label>
        <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label>
        <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label>
        <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label>
        </div>
        </div>
        <div class="p-t-30" style = {{marginLeft: `450px` , width: `50%`, paddingBottom: `20px`}}>
        <Link to="/returnItem"  type="button" class="btn btn-success">Submit  </Link> 
            
        </div>
    </div>
    </div>
  )
}

export default rating