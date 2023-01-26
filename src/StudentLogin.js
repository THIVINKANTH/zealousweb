import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { create } from './StudentDetails'

export let Register=()=>
{
    const[process,setProcess]=useState({
        "stuName":"",
        "stuContact":0,
        "stuEmail":"",
        "stuCourse":""
    })
    const track=(data)=>
    {
        const{name,value}=data.target
        setProcess(
            (old)=>
            {
                return{
                    ...old,
                    [name]:value
                }
            }
        )
    }
    const register=()=>
    {
        alert('Welcome to Zealous Academy'+JSON.stringify(process))
        create(process);
    }
    const reset=()=>
    {
        
        alert('Rejected...!')
    }
    return(
        <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-0 col-sm-12 shadow-lg p-3">
                    <h4 className="text-center mt-5 mb-5">Student Register From</h4>
                    <div className="row justify-content-center">
                        <div className="row">
                            <div className="col">
                                <label className="from-label">StudentName</label>
                                <input type="text"
                                name="stuName"
                                onChange={track}
                                value={process.stuName}
                                className="from-control" />
                            </div>
                            <div className="col">
                                <label className="from-label">MobileNumber</label>
                                <input type="tel"
                                name="stuContact"
                                onChange={track}
                                value={process.stuContact}
                                className="from-control" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="from-label">Email</label>
                        <input type="email"
                        name="stuEmail"
                        onChange={track}
                        value={process.stuEmail}
                        className="from-control" />
                    </div>
                    <div className="mt-3">
                        <label className="from-label">select your Course</label>
                        <select className="from-control" name="stuCourse" onChange={track} value={process.stuCourse}>
                            <option selected hidden>select your programming Language</option>
                            <option>Core Java</option>
                            <option>Java Full Stack</option>
                            <option>Python</option>
                            <option>Python Full Stack</option>
                            <option>Web Development</option>
                        </select>
                    </div>
                    <div className="row justify-content-around mt-4">
                        <button className="btn btn-outline-success col-3 ms-3" onClick={register}>Register</button>
                        <button className="btn btn-outline-danger col-3 me-3" onClick={reset} type="reset" value="Reset">Reset</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}