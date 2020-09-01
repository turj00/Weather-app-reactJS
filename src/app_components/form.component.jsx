import React from 'react';
import "./form.style.css";


const Form = props => {

    return(

        
        <div className="container">

    

            <form onSubmit={props.loadweather}>
                <div className="row" >

                    <div className="col-md-3 offset-md-4" >

                        <input type="text" className="form-control" name ="city" placeholder="Enter a city name"   ></input>

                        

                    </div>

                   

                    <div className="col-md-3 mt-md-0 text-md-left">

                        <button className="btn btn-warning"> <b>Get Weather </b></button>

                    </div>

                


                </div>
            </form>


        </div>



    )




}



export default Form;