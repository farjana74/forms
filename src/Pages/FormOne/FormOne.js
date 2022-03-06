import React from 'react';
import "./FormOne.css"
import { useForm } from 'react-hook-form';
import forms from "../../images/DrawKit-daily-life-vector-illustration-01 1.png"
const FormOne = ({ formData, setFormData }) => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        if (data) {
            alert("added")
            reset();
        }
        console.log(data);
    }
    return (
        <div className='container my-5'>
            <div className='row d-flex justify-content-center align-items-center '>
                <div className='col-md-5'>

                    <img className='img-fluid' src={forms} alt="" />
                </div>
                <div className='col-md-5'>

                    <form onSubmit={handleSubmit(onSubmit)} className="">


                        <input className='mb-4 ps-2' {...register("name", { required: true, maxLength: 20 })} placeholder="Client Name"
                            value={formData.name}
                            onChange={(e) => {
                                setFormData({ ...formData, name: e.target.value })
                            }} />
                        <br />
                        <input className='mb-4 ps-2' placeholder="Company Name" {...register("companyName", { required: true, maxLength: 20 })}

                            value={formData.companyName}
                            onChange={(e) => {
                                setFormData({ ...formData, companyName: e.target.value })
                            }}

                        />
                        <br />
                        <input className='mb-4 ps-2' type="number" {...register("number", { required: true, maxLength: 20 })} placeholder="Phone Number"
                            value={formData.number}
                            onChange={(e) => {
                                setFormData({ ...formData, number: e.target.value })
                            }} />
                        <br />

                        <input className='mb-4 ps-2' placeholder="Email" {...register("email", { required: true, maxLength: 20 })}
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