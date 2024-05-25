import React, { useContext } from 'react';
import { Context } from '../App';
import PersonalInfoDisplay from './MainSections/PersonalInfoDisplay';
import EducationDisplay from './MainSections/EducationDisplay';
import ExperienceDisplay from './MainSections/ExperienceDisplay';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';


function StyleOne(){

    const pdfRef = useRef();

    const {personalInfo} = useContext(Context);
    const {education} = useContext(Context);
    const {experience} = useContext(Context);
    const {download, setDownload} = useContext(Context);

    if(download){
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('resume.pdf');
        });
        setDownload(false);
    }

    return (
        <div className='bg-white w-[65rem] pb-4 grid-container grid-rows-5 rounded-lg shadow-2xl text-white h-[87rem]' ref={pdfRef}>
            <PersonalInfoDisplay personalInfo={personalInfo}/>
            <EducationDisplay education={education}/>
            <ExperienceDisplay experience={experience} />
        </div>
    )
}

function StyleTwo(){
    return (
        <div>
            jhh
        </div>
    )
}

export function Styles() {

    const {styles, setStyles} = useContext(Context);

    const handleStyleClick = (infoValue) => {
        setStyles({ ...styles, ...infoValue });
    };

    return (
        <div>
            <div className="w-full cursor-pointer py-4 text-center border border-black rounded-lg mt-8 hover:bg-black hover:text-white transition-all" onClick={() => handleStyleClick({ styleOne: true, styleTwo: false })}>Style One</div>
            <div className="w-full cursor-pointer py-4 text-center border border-black rounded-lg mt-8 hover:bg-black hover:text-white transition-all" onClick={() => handleStyleClick({ styleOne: false, styleTwo: true })}>Style Two</div>
        </div>
    );
}


export function CVStyle(){

    const {styles} = useContext(Context);

    return (
            <div>
                {
                    styles.styleOne ? (
                        <StyleOne />
                    ) : (
                        <StyleTwo />
                    )
                }
            </div>
    )
}