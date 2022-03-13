import React, { useState } from 'react';
import "./Form.css";
import FormOne from './FormOne/FormOne';
import FormSecond from './FormSecond/FormSecond';
import FormThird from './FormThird/FormThird';
import Swal from 'sweetalert2';
import MeetingMinutes, { pdfGenerate } from './MeetingMinutes/MeetingMinutes';

const Forms = () => {
    const [content, setContent] = useState('')
    const [contentDiscussion, setContentDiscussion] = useState('')
    const [contents, setContents] = useState('')
    const [contentParticipant, setContentParticipant] = useState('')
    const [page, setPage] = useState(0);
    const FormTitles = ["formOne", "formTwo", "meetingMinutes", "formThree"];
    const [formData, setFormData] = useState({

        clientName: "",
        companyName: "",
        number: "",
        email: "",
        meetingLocation: "",

        meetingTime: "",
        projectName: "",
        meetingParticipants: "",
        meetingDiscussion: "",

        meetingOutComes: "",
        profile: "",
        initialWorkProposal: "",
        memorandum: "",
        disclosureAgreement: "",
        workOrder: "",
        workQuotation: "",
        paymentDetails: "",




    });

    console.log(formData);
    console.log(content)

    const PageDisplay = () => {
        if (page === 0) {
            return <FormOne formData={formData} setFormData={setFormData} content={content} setContent={setContent}></FormOne>
        } else if (page === 1) {
            return <FormSecond
                formData={formData}
                setFormData={setFormData}
                content={content}
                setContent={setContent}
                contentDiscussion={contentDiscussion}
                setContentDiscussion={setContentDiscussion}
                setContents={setContents}
                contentParticipant={contentParticipant}
                setContentParticipant={setContentParticipant}
                contents={contents}

            ></FormSecond>
        }
        else if (page === 2) {

            return <MeetingMinutes formData={formData}
                setFormData={setFormData}
                content={content}
                setContent={setContent}
                contentDiscussion={contentDiscussion}
                setContentDiscussion={setContentDiscussion}
                setContents={setContents}
                contentParticipant={contentParticipant}
                setContentParticipant={setContentParticipant}
                contents={contents}



            ></MeetingMinutes>
        }
        else if (page === 3) {
            return <FormThird formData={formData}
                setFormData={setFormData}
                content={content}
                setContent={setContent}
                contentDiscussion={contentDiscussion}
                setContentDiscussion={setContentDiscussion}
                setContents={setContents}
                contentParticipant={contentParticipant}
                setContentParticipant={setContentParticipant}
                contents={contents}



            ></FormThird>

        }
    };
    return (


        <div className='container-fluid pt-3 bg-color '>

            <div className="form container mx-auto">
                <div className="progressbar mx-auto">
                    <div
                        style={{ width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%" }}
                        className="d-flex"
                    >
                    </div>
                </div>
                <div className="form-container">
                    <div className="header">
                        {/* <h1>{FormTitles[page]}</h1> */}
                    </div>
                    <div className="body">{PageDisplay()}</div>
                    <div className=" text-end py-3">
                        <button
                            className='control-btn'
                            disabled={page === 0}
                            onClick={() => {
                                setPage((currPage) => currPage - 1);
                            }}
                        >
                            Prev
                        </button>
                        <button
                            className='control-btn'
                            onClick={() => {
                                if (page === FormTitles.length - 1) {
                                    Swal.fire(
                                        'Good job!',
                                        'You clicked the button!',
                                        'success'
                                    ).then(function () {
                                        window.location = "/home";
                                    });



                                } else {
                                    setPage((currPage) => currPage + 1);
                                }
                            }}
                        >
                            {page === FormTitles.length - 1 ? "Submit" : "Next"}
                            {/* {page === FormTitles.length - 1 ? "Submit" :} */}
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Forms;
