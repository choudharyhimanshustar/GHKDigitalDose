import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'
import SchoolDescription from './SchoolDescription'
import DirectorMessage from './DirectorMessage'
import PrincipalMessage from './PrincipalMessage'
const AboutSchool = () => {
    return (
        <div class='flex' id='about' style={{ display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
            <SchoolDescription />

        </div>

    )
}

export default AboutSchool