import React from 'react';
import "./FormSecond.css";
import react, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import JoditEditor from "jodit-react";


// Default export is a4 paper, portrait, using millimeters for units



import secondForms from "../../images/DrawKit-daily-life-vector-illustration-01 1.png"
const FormSecond = ({ formData, setFormData, content, setContent, contents, setContents, contentDiscussion, setContentDiscussion, contentParticipant, setContentParticipant }) => {






    const editor = useRef(null)

    // const [content, setContent] = useState('')
    console.log(content)
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
            <div className='container mt-5 bg-color'>
                <div className='row d-flex justify-content-center align-items-center '>
                    <div className='col-md-8 '>

                        <form onSubmit={handleSubmit(onSubmit)} className="">

                            <h2 className='text-white mb-3 client-name'>Client Name :  {formData.name}</h2>
                            <br />
                            <h2 className='text-white mb-3 client-name'> Meeting Location</h2>
                            <input className='mb-4 ps-2 editors-background'   {...register("location", { required: true, maxLength: 20 })} placeholder="Location"
                                value={formData.location}
                                onChange={(e) => {
                                    setFormData({ ...formData, location: e.target.value })
                                }} />
                            <h2 className='text-white mb-3 client-name'>Meeting Time</h2>
                            <input className='mb-4 ps-2 editors-background' {...register("meetingTime", { required: true, maxLength: 20 })} placeholder="Meeting Time"
                                value={formData.meetingTime}
                                onChange={(e) => {
                                    setFormData({ ...formData, meetingTime: e.target.value })
                                }} />

                            <h2 className='meeting-text'>Project Name:</h2>
                            <div className='editor-background'>
                                <JoditEditor

                                    ref={editor}
                                    value={formData.project_name}


                                    config={config}
                                    tabIndex={1} // tabIndex of textarea
                                    onBlur={newContent => {
                                        setContent(newContent);
                                        setFormData({ ...formData, project_name: newContent });

                                    }}
                                />
                            </div>

                            <br />


                            <h2 className='meeting-text'>Meeting Partcipants:</h2>
                            <div className='editor-background'>
                                <JoditEditor
                                    ref={editor}
                                    value={contents}
                                    config={config}
                                    tabIndex={1} // tabIndex of textarea
                                    onBlur={newContentt => {
                                        setContents(newContentt);

                                        setFormData({ ...formData, meeting_participate: newContentt });



                                    }}
                                />
                            </div>




                            <br />

                            <h2 className='meeting-text'>Meeting Discussion:</h2>
                            <div className='editor-background'>
                                <JoditEditor
                                    ref={editor}
                                    value={contentDiscussion}
                                    config={config}
                                    tabIndex={1} // tabIndex of textarea
                                    onBlur={newContentss => {
                                        setContentDiscussion(newContentss);

                                        setFormData({ ...formData, meeting_discussion: newContentss });

                                    }}

                                />
                            </div>


                            <br />
                            <br />
                            <h2 className='meeting-text'>Meeting Outcomes:</h2>
                            <div className='editor-background'>
                                <JoditEditor
                                    ref={editor}
                                    value={contentParticipant}
                                    config={config}
                                    tabIndex={1} // tabIndex of textarea
                                    onBlur={newContents => {

                                        setFormData({ ...formData, meeting_outcomes: newContents });
                                        setContentParticipant(newContents);

                                    }}
                                />
                            </div>
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