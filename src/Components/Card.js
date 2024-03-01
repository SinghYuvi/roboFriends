import React from "react";
//import { Component } from "react";

    // //Way- 1[Functional] 
    // function Card(props){
    //     return(
    //     <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
    //         <img alt='robots' src={`https://robohash.org/${props.id}?200*200`} />
    //         <div>
    //             <h2>{props.name}</h2>
    //             <p>{props.email}</p>
    //         </div>
    //     </div>
    //     );
    //     }

    // //Way- 2[With Components - Need to import Component for this] 
    // class Card extends Component{
    //     render(props){
    //     return(
    //     <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
    //         <img alt='robots' src={`https://robohash.org/${props.id}?200*200`} />
    //         <div>
    //             <h2>{props.name}</h2>
    //             <p>{props.email}</p>
    //         </div>
    //     </div>
    //     );}
    //     }


    // //Way -3[With Function - Basic ]
    // const Card = (props) => {
    //     return(
    //     <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
    //         <img alt='robots' src={`https://robohash.org/${props.id}?200*200`} />
    //         <div>
    //             <h2>{props.name}</h2>
    //             <p>{props.email}</p>
    //         </div>
    //     </div>
    //     );
    //     } 

    // //Way -4[With Function - Standard]
    // const Card = (props) => {
    //     const {id, name, email} = props;
    //     return(
    //     <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
    //             <img alt='robots' src={`https://robohash.org/${id}?200*200`} />
    //             <div>
    //                 <h2>{name}</h2>
    //                 <p>{email}</p>
    //             </div>
    //     </div>
    //     );
    //     } 

    //Way -5[With Function - Advanced]
        const Card = ({id, name, email}) => {
            return(
                <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                    <img alt='robots' src={`https://robohash.org/${id}?200*200`} />
                    <div>
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>
                </div>
            );
        }

export default Card;