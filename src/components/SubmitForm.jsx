import React, {useState} from 'react'
import {useFormik} from "formik";

function SubmitForm() {
    const formik =useFormik({
        initialValues:{client:"",poc:"",poc_email:"",role:"",urgency:"",quantity:"",skills:""},
        onSubmit:(values)=>{
            fetch('http://45.33.17.193:8000/jobs',{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
            .then((r)=>r.json())
            .then((newData)=>console.log(newData))
        }
    });    

    return (        
        <div className="block p-6 rounded-lg shadow-lg bg-white">
            <form onSubmit={formik.handleSubmit}>
                <div className='grid grid-cols-2 gap-4'>
                    <div className="mb-6">
                        <label className="">Client Name</label>
                        <input type="text" className="form-style" 
                            id="client"
                            name="client"
                            placeholder="Client name"
                            onChange = {formik.handleChange}
                            value = {formik.values.client}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="">POC</label>
                        <input type="text" className="form-style" 
                            id="poc" 
                            name = "poc"
                            placeholder="POC" 
                            value = {formik.values.poc}
                            onChange = {formik.handleChange}
                        />
                    </div>               
                    <div className="mb-6 col-span-2">
                        <label className="">POC Email</label>
                        <input type="email" className="form-style" 
                            id="pocEmail" 
                            name ="poc_email"
                            placeholder="Email address" 
                            value = {formik.values.poc_email}
                            onChange = {formik.handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="">Role</label>
                        <input type="text" className="form-style" 
                            id="role" 
                            name="role"
                            placeholder="Role" 
                            value = {formik.values.role}
                            onChange = {formik.handleChange}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="">Urgency</label>
                        <select type="select" 
                            className="form-style" 
                            id="urgency" 
                            name="urgency"
                            value={formik.values.urgency}
                            onChange={formik.handleChange}
                        >
                            <option value="" disabled hidden>Select level</option>
                            <option value="low">Low</option>
                            <option value="mid" >Medium</option>
                            <option value="high" >High</option>
                        </select>
                    </div>
                
                    <div className="mb-6">
                        <label className="">Quantity</label>
                        <input type="number" className="form-style" 
                            id="quantity"
                            name='quantity' 
                            min="0"
                            placeholder="Quantity" 
                            value = {formik.values.quantity}
                            onChange = {formik.handleChange}

                        />
                    </div>

                    <div className="mb-6">
                        <label className="">Skill Needed</label>
                        <input type="text" className="form-style" 
                            id="skills"
                            name='skills'                            
                            placeholder="Skills" 
                            value = {formik.values.skills}
                            onChange = {formik.handleChange}

                        />
                    </div>
                </div>
                <button type="submit" className="submit-btn">Add job</button>
            </form>
         
        </div>
    )
}

export default SubmitForm