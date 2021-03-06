import React from 'react';
import "./FormThird.css";
import { useForm } from 'react-hook-form';
import third from "../../images/DrawKit-daily-life-vector-illustration-01 1.png"


const FormThird = ({ formData, setFormData, content, setContent, contents, setContents, contentDiscussion, setContentDiscussion, contentParticipant, setContentParticipant }) => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (e) => {
        console.log(e.target.files[0])

        // const formData = new FormData();
        // formData.append("picture", data.picture[0])

        // if (data) {
        //     alert("added")
        //     reset();
        // }

    }

    return (
        <div className='container my-5 bg-color'>

            <div className='row d-flex justify-content-center align-items-center '>
                <div className='col-md-7'>
                    <img className='img-fluid' src={third} alt="" />

                </div>
                <div className='col-md-5 third-form'>


                    <div className='form-group'>
                        <label className='button-design-five p-3 w-75'>Techsist Digital Profile
                            <input type="file" name="upload" className='ps-5 form-control'





                                {...register("digital_profile")}
                                // value={formData.profile}
                                onChange={(e) => {
                                    setFormData({ ...formData, digital_profile: e.target.files[0] })
                                }}
                            // value={formData.profile}
                            // onChange={(e) => {
                            //     setFormData({ ...formData, profile: e.target.files })
                            //     // console.log(e.target.files)
                            // }}


                            />



                        </label>
                    </div>
                    <br />
                    <div className='form-group'>
                        <label className='button-design-five p-3 w-75'>Initial Work Proposal


                            <input type="file" className='ps-5 form-control'
                                {...register("initial_work_proposal")}
                                // value={formData.profile}
                                onChange={(e) => {
                                    setFormData({ ...formData, initial_work_proposal: e.target.files[0] })
                                }}


                            />
                        </label>
                    </div>
                    <br />

                    <div className='form-group'>
                        <label className='button-design-five p-3 w-75'>Memorandum of Understanding (MOU)
                            <input type="file" className='ps-5 form-control'

                                {...register("memorandum_of_understanding")}
                                // value={formData.profile}
                                onChange={(e) => {
                                    setFormData({ ...formData, memorandum_of_understanding: e.target.files[0] })
                                }}


                            />
                        </label>
                    </div>
                    <br />

                    <div className='form-group'>
                        <label className='button-design-five p-3 w-75'>Non-Disclosure Agreement (NDA)

                            <input type="file" className='ps-5 form-control'
                                {...register("non_disclosure_agreement")}
                                // value={formData.profile}
                                onChange={(e) => {
                                    setFormData({ ...formData, non_disclosure_agreement: e.target.files[0] })
                                }}


                            />
                        </label>
                    </div>
                    <br />

                    <div className='form-group'>
                        <label className='button-design-five p-3 w-75'>Work Order

                            <input type="file" className='ps-5 form-control'
                                {...register("work_order")}
                                // value={formData.profile}
                                onChange={(e) => {
                                    setFormData({ ...formData, work_order: e.target.files[0] })
                                }}


                            />
                        </label>
                    </div>
                    <br />

                    <div className='form-group'>
                        <label className='button-design-five p-3 w-75'>Work Quotation

                            <input type="file" className='ps-5 form-control'

                                {...register("work_quotation")}
                                // value={formData.profile}
                                onChange={(e) => {
                                    setFormData({ ...formData, work_quotation: e.target.files[0] })
                                }}

                            />
                        </label>
                    </div>


                    <br />










                    <div className='form-group'>
                        <label className='button-design-five p-3 w-75'>Payment Details
                            <input type="file" className='ps-5 form-control'


                                {...register("payment_detail")}
                                // value={formData.profile}
                                onChange={(e) => {
                                    setFormData({ ...formData, payment_detail: e.target.files[0] })
                                }}
                            />
                        </label>
                    </div>
                    {/* <input id="next" type="Submit" placeholder='' /> */}

                    {/* <button>submit</button> */}


                </div>

            </div>

        </div>
    );
};

export default FormThird;