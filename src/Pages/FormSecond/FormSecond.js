import React from 'react';
import "./FormSecond.css";
import react, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import JoditEditor from "jodit-react";
import { jsPDF } from "jspdf";

// Default export is a4 paper, portrait, using millimeters for units



import secondForms from "../../images/DrawKit-daily-life-vector-illustration-01 1.png"
const FormSecond = ({ formData, setFormData }) => {
    const doc = new jsPDF();
    const editor = useRef(null)

    // const [content, setContent] = useState('')
    const { register, handleSubmit, reset } = useForm();
    const [title, SetTitle] = useState("");
    const [body, SetBody] = useState("");
    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }


    const onSubmit = data => {
        if (data) {
            alert("added")
            reset();
        }
    }
    return (
        <div>
            <div className='container my-5'>
                <div className='row d-flex justify-content-center align-items-center '>
                    <div className='col-md-8'>

                        <form onSubmit={handleSubmit(onSubmit)} className="">

                            <h2 className='text-white mb-3 client-name'>Client Name:</h2>
                            <h2 className='meeting-text'>Meeting Participants:</h2>
                            <textarea placeholder='Meeting Participant' {...register("meetingParticipants", { maxLength: 20 })} className='w-100 text-area mb-4  p-2' name="" id="" cols="20" rows="5"
                                value={formData.meetingParticipants}
                                onChange={(e) => {
                                    setFormData({ ...formData, meetingParticipants: e.target.value })
                                }}


                            ></textarea>



                            <br />

                            <h2 className='meeting-text'>Discussion:</h2>
                            <textarea placeholder='Meeting Discussion' {...register("meetingDiscussion", { maxLength: 20 })} className='w-100   p-2 text-area' name="" id="" cols="20" rows="5"
                                value={formData.meetingDiscussion}
                                onChange={(e) => {
                                    setFormData({ ...formData, meetingDiscussion: e.target.value })
                                }}




                            ></textarea>


                            <br />
                            <br />
                            <h2 className='meeting-text'>Meeting Outcomes:</h2>
                            <JoditEditor

                                {...register("meetingOutComes")}
                                className="text-white"
                                ref={editor}
                                // value={formData.meetingOutComes}
                                config={config}
                                tabIndex={1} // tabIndex of textarea
                                // onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                onBlur={(e) => {

                                    // setFormData({ ...formData, richText: e.target.value })
                                    console.log(e.value)

                                }}
                            />

                            <br />
                            {/* <input id="next" type="Submit" placeholder='' /> */}

                        </form>
                    </div>
                    <div className='col-md-4'>
                        <img className='img-fluid' src={secondForms} alt="" />


                    </div>

                </div>

            </div>
        </div>
    );
};

export default FormSecond;