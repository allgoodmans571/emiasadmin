import { Fragment, useState } from "react";


export default function Stages(props) {

    const [actualStage, setActualStage] = useState();
    

    function handleStages() {
        try {
            console.log(document.querySelector('#actStage').value)
        } catch (err) {
            console.error(err);
        }

    }


    return(
        <div>
            <div>
        <div className="input-group mb-3" style={{marginBottom: 0, width: '20%'}}>
            <div className="input-group-prepend" >
            <span className="input-group-text" id="inputGroup-sizing-default">Всего стадий</span>
            </div>

            <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" style={{width: '1rem'}} />
            <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default" >Актальная стадия</span>
            </div>
            <input id='actStage' type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />


            
        </div>
        <button className='btn-success'onClick={handleStages}> Отправить </button>
        </div>







        </div>

    )
    
}