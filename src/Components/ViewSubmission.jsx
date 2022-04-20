import {useEffect, useState} from 'react'
import "./ViewSubmission.css"

function ViewSubmission() {

  const[firstFullName,setFirstFullName]=useState("")
  const[secondFullName,setSecondFullName]=useState([])

  const name1 = [
    { fullName: "Johnn Doe" }]

  const name2 = [
      { fullName: "Steven Tmith" }]




  useEffect(()=>{
    name1.filter((res) => {
      const data = res.fullName.split(" ")[0].split("")[0]
      const data1 = res.fullName.split(" ")[1].split("")[0]
      setFirstFullName(`${data} ${data1}`)
      // console.log(setFirstFullName)
     
      })
    name2.filter((res)=>{
      const data = res.fullName.split(" ")[0].split("")[0]
      const data1 = res.fullName.split(" ")[1].split("")[0]
      setSecondFullName(`${data} ${data1}`)
    })


  },[]) 

  
  

  return (
    <div> 
      <div><div className="row justify-content-center">
        <div className="col-md-6 col-8 d-flex mt-5 ">

          <div className="col-md-3 col-4 mt-5">
          <h1 className='icon'>{firstFullName}</h1>
          <div className="col-md-2 ">John Due</div>
          </div>

          <div className="col-md-10 col-8 d-flex p-3" style={{ border: "2px solid black", borderRadius: "2rem", boxShadow: "0px 5px" }}>
            <div className="col-md-6 col-8 m-md-3">
              <div className="col-md-6 col-8"><h3>City One</h3></div>
              <div className="col-md-6 col-8 mt-md-3">Clear Skies</div>
            </div>

            <div className="col-md-6 col-8 m-md-3">
              <div className="col-md-6 col-8"><h1>24</h1></div>
              <div className="col-md-6 col-8">H 27/ L 21</div>
            </div>

          </div>
        </div>
      </div></div>
      <div><div className="row justify-content-center">
        <div className="col-md-6 col-8 d-flex mt-2 ">
          <div className=" col-md-3 col-4">   </div>

          <div className="col-md-10 col-8 d-flex p-3" style={{ border: "2px solid black", borderRadius: "2rem", boxShadow: "0px 5px" }}>
            <div className="col-md-6 col-8 m-md-3">
              <div className="col-md-6 col-8"><h3>City Two</h3></div>
              <div className="col-md-6 col-8 mt-md-3">Clear Skies</div>
            </div>

            <div className="col-md-6 col-8 m-md-3">
              <div className="col-md-6 col-8"><h1>48</h1></div>
              <div className="col-md-6 col-8">H 48/ L 21</div>
            </div>

          </div>
        </div>
      </div></div>


      <div><div className="row justify-content-center mt-3">
        <div className="col-md-6 col-8 d-flex mt-10 ">
        <div className="col-md-3 col-4 mt-5">
          <h1 className='icon'>{secondFullName}</h1>
          <div className="col-md-2 " >Steven Tmith</div>
          </div>

          <div className="col-md-10 col-8 d-flex p-3" style={{ border: "2px solid black", borderRadius: "2rem", boxShadow: "0px 5px" }}>
            <div className="col-md-6 col-8 m-md-3">
              <div className="col-md-6 col-8"><h3>City One</h3></div>
              <div className="col-md-6 col-8 mt-md-3">Clear Skies</div>
            </div>

            <div className="col-md-6 col-8 m-md-3">
              <div className="col-md-6 col-8"><h1>18</h1></div>
              <div className="col-md-6 col-8">H 27/ L 21</div>
            </div>

          </div>
        </div>
      </div></div>
      <div><div className="row justify-content-center">
        <div className="col-md-6 col-8 d-flex mt-2 ">
          <div className="col-md-3 col-4"></div>

          <div className="col-md-10 col-8 d-flex p-3" style={{ border: "2px solid black", borderRadius: "2rem", boxShadow: "0px 5px" }}>
            <div className="col-md-6 col-8 m-md-3">
              <div className="col-md-6 col-8"><h3>City Two</h3></div>
              <div className="col-md-6 col-8 mt-md-3">Very Cold</div>
            </div>

            <div className="col-md-6 col-8 m-md-3 " id='last'>
              <div className="col-md-6 col-8"><h1>32</h1></div>
              <div className="col-md-6 col-8">H 31/ L 21</div>
            </div>

          </div>
        </div>
      </div></div>

      
    </div>
      






  )
}

export default ViewSubmission