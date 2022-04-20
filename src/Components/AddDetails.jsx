import React, { useState } from 'react'

function AddDetails() {
  const [name, setName] = useState("")
  const [ifsc, setIfsc] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      ifsc: ifsc
    }
    console.log(data)
    alert("Submitted")


  }
  return (
    <div className="row justify-content-center" >
      <div className="col-md-8">
        <form onSubmit={submitHandler} >
          <div className="mb-3">
            <b for="exampleInputEmail1" className="form-label">Name</b>
            <input placeholder='Enter Your Name' style={{border:"1px solid black",borderRadius:"0.8rem "}} onChange={(e) => { setName(e.target.value) }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <b for="exampleInputEmail1" className="form-label">IFSC Codes</b>
            <input placeholder='Enter IFSC Code' style={{border:"1px solid black",borderRadius:"0.8rem"}} onChange={(e) => { setIfsc(e.target.value) }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <input type="submit" className="btn btn-dark" />
        </form>

      </div>
    </div>

  )
}

export default AddDetails