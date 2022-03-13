import React from 'react';
import "./FormOne.css"
import { useForm } from 'react-hook-form';
import forms from "../../images/DrawKit-daily-life-vector-illustration-01 1.png"
import axios from 'axios';
const FormOne = ({ formData, setFormData, content, setContent, contents, setContents, contentDiscussion, setContentDiscussion, contentParticipant, setContentParticipant }) => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        // post api intrigation---------------
        // axios.post('https://digitalbackend.techsistltd.com/client_information/', data)
        //     .then(res => {
        //         if (res.data) {
        //             alert('added succesfully')
        //             reset();
        //         }
        //     })

        // fetch('https://digitalbackend.techsistltd.com/client_information/', {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json'

        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         if (result) {
        //             alert('added successfully')
        //             reset();
        //         }
        //     })





        console.log(data);
    }




    return (
        <div className='container bg-color mt-5'>
            <div className='row d-flex justify-content-center align-items-center '>
                <div className='col-md-5'>

                    <img className='img-fluid' src={forms} alt="" />
                </div>
                <div className='col-md-5'>

                    <form onSubmit={handleSubmit(onSubmit)} className="">


                        <input className='mb-4 ps-2 meetings-information' type="text"  {...register("name", { required: true, maxLength: 20 })} placeholder="Client Name"
                            value={formData.name}
                            onChange={(e) => {
                                setFormData({ ...formData, name: e.target.value })
                            }} />
                        <br />
                        <input className='mb-4 ps-2 meetings-information' placeholder="Company Name" type="text"  {...register("company_name", { required: true, maxLength: 20 })}

                            value={formData.company_name}
                            onChange={(e) => {
                                setFormData({ ...formData, company_name: e.target.value })
                            }}

                        />
                        <br />
                        <input className='mb-4 ps-2 meetings-information' type="number" {...register("phone", { required: true, maxLength: 20 })} placeholder="Phone Number"
                            value={formData.phone}
                            onChange={(e) => {
                                setFormData({ ...formData, phone: e.target.value })
                            }} />
                        <br />

                        <input className='mb-4 ps-2 meetings-information' placeholder="Email" type="email"  {...register("email", { required: true, maxLength: 20 })}
                            value={formData.email}
                            onChange={(e) => {
                                setFormData({ ...formData, email: e.target.value })
                            }}

                        />



                        <br />




                        <br />
                        {/* <input id="next" type="Submit" placeholder='' /> */}
                    </form>
                </div>

            </div>

        </div>
    );
};

export default FormOne;