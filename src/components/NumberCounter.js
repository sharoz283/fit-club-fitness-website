import { useEffect, useRef, useState } from "react"
import React from 'react'

export default function NumberCounter({expertCoaches , joinedMembers , fitnessPrograme}) {
 const [expert , setExpert]=useState();
 const [members , setMembers]=useState();
 const [fitness , setFitness]=useState();
 const ref= useRef(0);
 const [value, setValue] = useState();

// const counter =()=>
// {
//     for(let i=0; i<=value; i++){
//         setTimeout(()=>{
//             setValue(i);
//         }, 2000)
        
//     }
// }
// useEffect(()=>
// {
//     counter();
// } , [value ])
 const updateExpertCoaches = ()=>
 {
     if (expertCoaches!==" ")
     {
        let accumalator= expertCoaches/200;
        if (ref.current < expertCoaches)
        {
            let result= Math.ceil(ref.current + accumalator)
            if (result > expertCoaches)
            {
                setExpert(expertCoaches)
            }
            setExpert(result)
            ref.current=result;
            // setTimeout (updateExpertCoaches , 50)
     }
    }
    if (joinedMembers!==" ")
    {
       let accumalator= joinedMembers/200;
       if (ref.current < joinedMembers)
       {
           let result= Math.ceil(ref.current + accumalator)
           if (result > joinedMembers)
           {
            setMembers(joinedMembers)
           }
           setMembers(result)
           ref.current=result;
        //    setTimeout (updateExpertCoaches , 50)
    }
   }
   if (fitnessPrograme!==" ")
   {
      let accumalator= fitnessPrograme/200;
      if (ref.current < fitnessPrograme)
      {
          let result= Math.ceil(ref.current + accumalator)
          if (result > fitnessPrograme)
          {
            setFitness(fitnessPrograme)
          }
          setFitness(result)
          ref.current=result;
        //   setTimeout (updateExpertCoaches , 50)
   }
  }
  setTimeout (updateExpertCoaches , 50)
 }

useEffect(()=>
{
    updateExpertCoaches();
} , [expertCoaches, joinedMembers, fitnessPrograme ])

// useEffect(()=>
// {
//     updateMemberJoined();
// }, [joinedMembers])
// useEffect(()=>
// {
//     updateFitnessPrograme();
// }, [fitnessPrograme])
//     $(document).ready(function() {

//         $('.counter').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 4000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// }); 
 
// });
  return (
    <div>
      <section className="wow fadeIn animated number-counter" style={{visibility: 'visible', animationName: 'fadeIn'}}>
            <div className="container">
                <div className="row number-counter-row">
                    <div className="col-md-3 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated" data-wow-duration="300ms" style={{visibility: 'visible', animationDuration: '300ms' , animationNname: 'fadeInUp'}}>
                        <span className="timer counter alt-font appear" data-to="980" data-speed="7000">{expert}</span>
                        <p className="counter-title">EXPERT COACHES</p>
                    </div>
                    <div className="col-md-3 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated" data-wow-duration="300ms" style={{visibility: 'visible', animationDuration: '300ms' , animationNname: 'fadeInUp'}}>
                        <span className="timer counter alt-font appear" data-to="980" data-speed="7000">{members}</span>
                        <p className="counter-title">members joined</p>
                    </div>
                    <div className="col-md-3 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated" data-wow-duration="300ms" style={{visibility: 'visible', animationDuration: '300ms' , animationNname: 'fadeInUp'}}>
                        <span className="timer counter alt-font appear" data-to="980" data-speed="7000"> {fitness}</span>
                        <p className="counter-title">fitness programmes</p>
                    </div>
                   
                </div>
            </div>
        </section>

    </div>
  )
}
