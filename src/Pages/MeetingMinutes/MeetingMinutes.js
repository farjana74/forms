import React from 'react';
import logo from "../../images/techsist logo 1.png";
import "./MeetingMinutes.css";
import { useState } from 'react';
import { MdOutlineCall } from 'react-icons/md';
import { FaLocationArrow } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import jsPDF from "jspdf";
import parse from 'html-react-parser';

import { collectionActions, cloudCodeActions, documentActions } from 'react-parse';


const MeetingMinutes = ({ formData, setFormData, content, setContent, contents, setContents, contentDiscussion, setContentDiscussion, contentParticipant, setContentParticipant }) => {






    const pdfGenerate = () => {

        var doc = new jsPDF('p', 'pt', 'a4');
        doc.html(document.getElementById("content"), {
            callback: function (doc) {
                // doc.setFont("Poppins");
                // doc.setFontType("normal")
                // var pageCount = doc.internal.getNumber0fPages();
                // pdf.deletePage(pageCount);
                doc.save("mypdf.pdf");

            }
        });
        // doc.addPage()
        // doc.save('meeting.pdf')
        // window.print()
        // window.download();


    }

    // const pdfGenerate = () => {

    //     var doc = new jsPDF('landscape', 'pt', 'a');
    //     doc.html(document.querySelector("#content"), {
    //         callback: function (pdf) {
    //             var pageCount = doc.internal.getNumberOfPages();
    //             pdf.deletePage(pageCount);
    //             pdf.save("mypdf.pdf")
    //         }

    //     })


    // }
    const parse = require('html-react-parser');

    console.log(content)

    // let d = new Date().toLocaleDateString();
    const event = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const d = (event.toLocaleDateString(undefined, options))

    // let date = d.getDate();
    // console.log(event.toLocaleDateString(undefined, options))
    return (
        <>
            <div id="content" className='container-fluid  full-page'>
                <div className='form-border ps-2  pb-2'>
                    <div className='container  pt-5'>
                        <div className='d-flex align-items-center justify-content-between m-o'>
                            <div>
                                <img className='' src={logo} alt="" />
                            </div>
                            <div>
                                <p className='information'>Location: <span className=' location-text'>{formData.location}</span></p>
                                <p className='information'> Date: <span className='location-text'>{d}</span></p>

                                <p className='information'>Time: <span className='location-text'>{formData.location}</span></p>

                            </div>
                        </div>
                        <div className='my-5'>  <h3 className='meeting-header text-center'>MEETING </h3>
                        </div>

                        <div className=''>
                            <h3 className='meeting-information py-2'>Project: <span className='project-text'>{parse(content)}</span> </h3>
                            <h3 className='meeting-information'>Client: <span className='project-text'>{formData.name}</span></h3>
                            <h3 className='meeting-information py-2'>Meeting Participants : <span className='project-text'> {parse(contents)}</span></h3>

                            <h3 className='meeting-information  pb-5'>Discussion:<span className='project-text'>{parse(contentDiscussion)}</span></h3>


                        </div>
                        <h3 className='meeting-information'>Meeting Outcomes : </h3>

                        <div id="table-headers" className=' pb-5 table-design  text-center'>

                            {
                                parse(contentParticipant)


                            }



                        </div>

                    </div>


                    {/* footer form start------------------------ */}

                    <div className=' footer-minutes pt-5 '>

                        <div className='row pt-5 text-muted'>
                            <div className='col-md-3 col-lg-3 col-sm-3'>
                                <div className=' d-flex justify-content-center align-items-center'>
                                    <div>
                                        <MdOutlineCall className='call-logo' />
                                    </div>
                                    <div className=' ps-2 '>
                                        <h3 className=' text-black mobile-text text-muted'>  Mobile: +8801678494</h3>
                                        <h4 className=' text-black mobile-text text-muted'>+8801344777</h4>
                                    </div>

                                </div>

                            </div>
                            <div className='col-md-5 col-lg-5 col-sm-5'>
                                <div className=' d-flex justify-content-center align-items-center'>
                                    <div>
                                        <FaLocationArrow className='call-logo' />
                                    </div>
                                    <div className=' ps-2 '>
                                        <h3 className=' text-black mobile-text text-muted'>Corporate office: Lavel 4, House-546/2, Lane-13,Baridhara DOHS,Dhaka-1206</h3>

                                    </div>

                                </div>
                            </div>
                            <div className='col-md-3 col-lg-3 col-sm-3'>
                                <div className=' d-flex justify-content-center align-items-center'>
                                    <div>
                                        <MdOutlineEmail className='call-logo' />
                                    </div>
                                    <div className=' ps-2 '>
                                        <h3 className=' text-black mobile-text text-muted'>Email: infotechsistltd.com</h3>
                                        <h4 className=' text-black mobile-text text-muted'>Website:WWW.techsistltd.com</h4>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>


            </div>
            <button className='buttons-pdf p-2 ' onClick={pdfGenerate}>Download Pdf</button>
        </>



    );
};

export default MeetingMinutes;