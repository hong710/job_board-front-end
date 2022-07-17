import {useFormik} from "formik";
import { useState } from "react";
import * as Yup from "yup";
function SubmitForm() {

    const [status, setStatus] = useState()
    const [data, setData] = useState("")
    const formik =useFormik({
        initialValues:{client:"",poc:"",poc_email:"",role:"",urgency:"",quantity:"",skills:""},
        validationSchema: Yup.object({
            client:Yup.string().required("Client name is required."),
            poc: Yup.string().required("Poc name is required."),
            poc_email: Yup.string().email("Invalid email.").required("Poc email is required."),
            role: Yup.string().required("Role is required."),
            urgency: Yup.string().required("urgency is required."),
            quantity: Yup.number().required("Quantity is required.").positive("number has to greater than zero."),
            skills: Yup.string().required("Skills is required.")        
        }), 

        onSubmit:(values)=>{
            fetch(process.env.REACT_APP_BACKEND_SERVER,{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
            .then((res)=> {
                setStatus(res.status)
                return res.json()
            })
            .then((data)=>setData(data))
            formik.resetForm();
            }
        });    

    return (        
        <div className="block p-6 rounded-lg shadow-lg bg-white">
            {status===201? 
            <h2 className="bg-teal-200 p-3 text-center rounded-xl">
                {data.role} role was successfully created"
            </h2> 
            :null
            }
            <form onSubmit={formik.handleSubmit}>
                <div className='grid grid-cols-2 gap-4'>
                    <div className="mb-6 col-span-2 sm:col-span-1">
                        <label className="">Client Name</label>
                        <input type="text" className="form-style" 
                            id="client"
                            name="client"
                            placeholder="Client name"
                            onChange = {formik.handleChange}
                            onBlur = {formik.handleBlur}
                            value = {formik.values.client}
                        />
                        {
                        formik.touched.client &&formik.errors.client?
                            <p className="text-rose-600 text-sm" >{formik.errors.client}</p>:
                            null 
                        }
                    </div>
                    <div className="mb-6 col-span-2 sm:col-span-1">
                        <label className="">POC</label>
                        <input type="text" className="form-style" 
                            id="poc" 
                            name = "poc"
                            placeholder="POC" 
                            value = {formik.values.poc}
                            onChange = {formik.handleChange}
                            onBlur = {formik.handleBlur}
                        />
                        {
                        formik.touched.poc &&formik.errors.poc?
                            <p className="text-rose-600 text-sm" >{formik.errors.poc}</p>:
                            null 
                        }
                    </div>               
                    <div className="mb-6 col-span-2">
                        <label className="">POC Email</label>
                        <input type="email" className="form-style" 
                            id="pocEmail" 
                            name ="poc_email"
                            placeholder="Email address" 
                            value = {formik.values.poc_email}
                            onChange = {formik.handleChange}
                            onBlur = {formik.handleBlur}
                        />
                        {
                        formik.touched.poc_email &&formik.errors.poc_email?
                            <p className="text-rose-600 text-sm" >{formik.errors.poc_email}</p>:
                            null 
                        }
                    </div>
                    <div className="mb-6 col-span-2 sm:col-span-1">
                        <label className="">Role</label>
                        <input type="text" className="form-style" 
                            id="role" 
                            name="role"
                            placeholder="Role" 
                            value = {formik.values.role}
                            onChange = {formik.handleChange}
                            onBlur = {formik.handleBlur}
                        />
                        {
                        formik.touched.role &&formik.errors.role?
                            <p className="text-rose-600 text-sm" >{formik.errors.role}</p>:
                            null 
                        }
                    </div>

                    <div className="mb-6 col-span-2 sm:col-span-1">
                        <label className="">Urgency</label>
                        <select type="select" 
                            className="form-style" 
                            id="urgency" 
                            name="urgency"
                            value={formik.values.urgency}
                            onChange={formik.handleChange}
                            onBlur = {formik.handleBlur}
                        >
                            <option value="" disabled hidden>Select level</option>
                            <option value="low">Low</option>
                            <option value="mid" >Medium</option>
                            <option value="high" >High</option>
                        </select>
                        {
                        formik.touched.urgency &&formik.errors.urgency?
                            <p className="text-rose-600 text-sm" >{formik.errors.urgency}</p>:
                            null 
                        }
                    </div>
                
                    <div className="mb-6 col-span-2 sm:col-span-1">
                        <label className="">Quantity</label>
                        <input type="number" className="form-style" 
                            id="quantity"
                            name='quantity' 
                            min="0"
                            placeholder="Quantity" 
                            value = {formik.values.quantity}
                            onChange = {formik.handleChange}
                            onBlur = {formik.handleBlur}
                        />
                        {
                        formik.touched.quantity &&formik.errors.quantity?
                            <p className="text-rose-600 text-sm" >{formik.errors.quantity}</p>:
                            null 
                        }
                    </div>

                    <div className="mb-6 col-span-2 sm:col-span-1">
                        <label className="">Skill Needed
                            <span className='text-sm text-gray-600'> (use comma to separate each skill)</span>
                        </label>
                        <input type="text" className="form-style" 
                            id="skills"
                            name='skills'                            
                            placeholder="Skills" 
                            value = {formik.values.skills}
                            onChange = {formik.handleChange}
                            onBlur = {formik.handleBlur}
                        />
                        {
                        formik.touched.skills &&formik.errors.skills?
                            <p className="text-rose-600 text-sm" >{formik.errors.skills}</p>:
                            null 
                        }
                    </div>
                </div>
                <button type="submit" className="submit-btn">Add job</button>
            </form>
         
        </div>
    )
}

export default SubmitForm