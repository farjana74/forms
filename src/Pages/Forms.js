import React, { useState } from 'react';
import "./Form.css";
import FormOne from './FormOne/FormOne';
import FormSecond from './FormSecond/FormSecond';
import FormThird from './FormThird/FormThird';
import Swal from 'sweetalert2'

const Forms = () => {
    const [page, setPage] = useState(0);
    const FormTitles = ["formOne", "formTwo", "formThree"];
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        companyName: "",
        meetingParticipants: "",
        meetingDescription: "",

        // profile: "",
        meetingOutComes: ""

    });

    console.log(formData);

    const PageDisplay = () => {
        if (page === 0) {
            return <FormOne formData={formData} setFormData={setFormData}></FormOne>
        } else if (page === 1) {
            return <FormSecond formData={formData} setFormData={setFormData}></FormSecond>
        }
        else if (page === 2) {
            return <FormThird formData={formData} setFormData={setFormData}></FormThird>
        }
    };
    return (
        <>

            <div className='container-fluid py-3'>

                <div className="form container mx-auto">
                    <div className="progressbar mx-auto">
                        <div
                            style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}
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
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Forms;
