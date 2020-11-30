import { Fragment } from "react";


export default function Stages(props) {
    return(
        <div className='input-group'>

        <div>
        <div class="input-group-prepend">
    <span class="input-group-text">Актуальная стадия</span>
  </div>
  <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
        <div>
        <div class="input-group-prepend">
    <span class="input-group-text">Всего стадий</span>
  </div>
  <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>

        
        </div>
    )
    
}