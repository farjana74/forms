import React from 'react';
import "./FormThird.css";
import { useForm } from 'react-hook-form';
import third from "../../images/DrawKit-daily-life-vector-illustration-01 1.png"


const FormThird = ({ formData, setFormData }) => {
    const { register, handleSubmit, reset } = useForm();
    return (
        <div className='container my-5'>

            <div className='row d-flex justify-content-center align-items-center '>
                <div className='col-md-7'>
                    <img className='img-fluid' src={third} alt="" />

                </div>
                <div className='col-md-5 third-form'>
                    <div className='form-group'>
                        <label className='button-design-five p-3 w-75'>Techsist Digital Profile
                            <input type="file"  {...register("profile", { required: true, maxLength: 20 })} className='ps-5 form-control' placeholder="Client Name"
                                value={formData.profile}
                                onChange={(e) => {
                                    setFormData({ ...formData, name: e.target.value })
                                }}


                            />
                        </label>
                    </div>
                    <br />
                    <div className='form-group'>
                        <label className='button-design-five p-3 w-75'>Initial Work Proposal


                            <input type="file" className='ps-5 form-control' placeholder="Client Name" />
                        </label>
                    </div>
                    <br />

                    <div className='form-group'>
                        <label className='button-design-five p-3 w-75'>Memorandum of Understanding (MOU)
                            <input type="file" className='ps-5 form-control' placeholder="Client Name" />
                        </label>
                    </div>
                    <br />

                    <div className='form-group'>
                        <label className='button-design-five p-3 w-75'>Non-Disclosure Agreement (NDA)

                            <input type="file" className='ps-5 form-control' placeholder="Client Name" />
                        </label>
                    </div>
                    <br />

                    <div className='form-group'>
                        <label className='button-design-five p-3 w-75'>Work Order

                            <input type="file" className='ps-5 form-control' placeholder="Client Name" />
                        </label>
                    </div>
                    <br />

                    <div className='form-group'>
                        <label className='button-design-five p-3 w-75'>Work Quotation

                            <input type="file" className='ps-5 form-control' placeholder="Client Name" />
                        </label>
                    </div>


                    <br />










                    <div className='form-group'>
                        <label className='button-design-five p-3 w-75'>Payment Details
                            <input type="file" className='ps-5 form-control' placeholder="Client Name" />
                        </label>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default FormThird;