import React, {useState} from 'react'

function SubmitForm() {
    const [clientName,setClientName]= useState("");
    const [poc,setPoc]= useState("");
    const [pocEmail,setpocEmail]= useState("");
    const [role,setRole]= useState("");
    const [urgency,setUrgency]= useState("");
    const [quantity, setQuantity]= useState("");
    const [skills,setSkills]= useState("");


    return (
        <div className="block p-6 rounded-lg shadow-lg bg-white">
            <form>
                <div className='grid grid-cols-2 gap-4'>
                    <div className="mb-6">
                        <label className="">Client Name</label>
                        <input type="email" className="form-style" 
                            id="client-name"
                            name="client-name"
                            placeholder="Client name"
                            value = {clientName}
                            onChange = {(e)=> {setClientName(e.target.value);}}

                        />
                    </div>
                    <div className="mb-6">
                        <label className="">POC</label>
                        <input type="text" className="form-style" 
                            id="poc-name" 
                            name = "poc-name"
                            placeholder="POC" 
                        />
                    </div>               
                    <div className="mb-6 col-span-2">
                        <label className="">POC Email</label>
                        <input type="email" className="form-style" 
                            id="poc-email" 
                            name ="poc-email"
                            placeholder="Email address" 
                        />
                    </div>
                    <div className="mb-6">
                        <label className="">Role</label>
                        <input type="text" className="form-style" 
                            id="role" 
                            name="role"
                            placeholder="Role" 
                        />
                    </div>

                    <div className="mb-6">
                        <label className="">Urgency</label>
                        <select type="select" className="form-style" id="urgency" name="urgency">
                            <option value="" disabled selected hidden>select level</option>
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
                            oninput="validity.valid||(value='');"
                            placeholder="Quantity" 
                        />
                    </div>

                    <div className="mb-6">
                        <label className="">Skill Needed</label>
                        <input type="email" className="form-style" 
                            id="skill"
                            name='skill'                            
                            placeholder="Skills" 
                        />
                    </div>
                </div>
                <button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Add job</button>
            </form>
        </div>
    )
}

export default SubmitForm