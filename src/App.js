import "./App1.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Header from "./nav/Header";
import Footer from "./footer/Footer";
import About from "./about/AboutSchool";
import PrincipalMessage from "./about/PrincipalMessage";
import DirectorMessage from "./about/DirectorMessage";
import TransportFacility from "./admission/Transport/App";
import Contact from "./contact/App";
import Admission from "./Adimssion/Admission";
import Rule from "./Adimssion/Rulearea/Rule";
import Councelling from "./Adimssion/Councelling";
import Management from "./about/Management";
import VisionMission from "./about/VisionMission";
import AwardsAchievements from "./about/AwardsAchievements";
import Jrcollege from "./Acadamics/Jrcollege/Jrcollege";
import Primary from "./Acadamics/Primary/Primary";
import Secondary from "./Acadamics/Secondary/Secondary";
import Teaching from "./Acadamics/Teaching/Teaching";
import Infrastructrue from "./campusLife/Infrastructure/App";
import LifeGHK from "./campusLife/LifeGHK/LifeGHK";
import TeachingStaff from "./people/Teaching Staff/App";
import News from "./campusLife/News/News";
import CouncilPtaMenber from "./people/studentCouncile/CouncilPtaMenber";
import Alumni from "./Alumni/App";
import NonTeachingStaff from "./people/NonTeachingStaff/nonTeachingStaff";
import VisitingFaculty from "./people/VisitingFaculty/vistingFaculty";
import HelpingStaff from "./people/HelpingStaff/helpingStaff";
import Fieldtrip from "./campusLife/FieldTrip/Fieldtrip";
import AdmissionForm from "./Adimssion/Forms/admissionForm";
import General from "./Adimssion/Rulearea/General";
import FeeShedule from "./Adimssion/Rulearea/FeeShedule";
import Attendence from "./Adimssion/Rulearea/Attendence";
import Regulation from "./Adimssion/Rulearea/Regulation";
import RuleConduct from "./Adimssion/Rulearea/RuleConduct";
import Withdrawl from "./Adimssion/Rulearea/Withdrawl";
import SchoolTiming from "./Adimssion/SchoolTiming/App";
import Preprimary from "./Acadamics/Preprimary/Preprimary";
import Bulbul from "./campusLife/bulbulClub/Bulbul";
import AcademicResults from "./Acadamics/Results/AcademicResults";
import Blogs from "./campusLife/Blogs/Blog";
import GalleryMain from "./Gallery/GalleryMain";
import It from "./campusLife/Blogs/fullBlogPage/it/It";
import Aim from "./campusLife/Blogs/fullBlogPage/aim/Aim";
import Ghkjr from "./campusLife/Blogs/fullBlogPage/ghkjr/Ghkjr";
import Ghkpre from "./campusLife/Blogs/fullBlogPage/ghkpre/Ghkpre";
import Climbing from "./campusLife/Blogs/fullBlogPage/climbing/Climbing";


function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/PrincipalMessage" element={<PrincipalMessage />} />
          <Route path="/DirectorMessage" element={<DirectorMessage />} />
          <Route path="/vision" element={<VisionMission />} />
          <Route path="/Achievement" element={<AwardsAchievements />} />
          <Route path="/committe" element={<Management />} />
          <Route path="/admission/transport" element={<TransportFacility />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/admission/">
            <Route path="document" element={<Admission />}></Route>
            <Route path="rule/" element={<Rule />}>
              <Route path="general" element={<General />}></Route>
              <Route path="attendance" element={<Attendence />}></Route>
              <Route path="feeShedule" element={<FeeShedule />}></Route>
              <Route path="regulation" element={<Regulation />}></Route>
              <Route path="ruleconduct" element={<RuleConduct />}></Route>
              <Route path="withdrawaladmission" element={<Withdrawl />}></Route>
            </Route>
          </Route>
          <Route path="councelling" element={<Councelling />}></Route>
          <Route path="/preprimary" element={<Preprimary />} />
          <Route path="/primary" element={<Primary />} />
          <Route path="/secondary" element={<Secondary />} />
          <Route path="/jrcollege" element={<Jrcollege />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/infrastructure" element={<Infrastructrue />} />
          <Route path="/lifeghk" element={<LifeGHK />} />
          <Route path="/fieldtrip" element={<Fieldtrip />} />
          <Route path="/news" element={<News />} />
          <Route path="/teachingstaff" element={<TeachingStaff />} />
          <Route path="/nonteachingstaff" element={<NonTeachingStaff />} />
          <Route path="/visitingfaculty" element={<VisitingFaculty />} />
          <Route path="/visitingfaculty" element={<VisitingFaculty />} />
          <Route path="/helpingstaff" element={<HelpingStaff />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/admissionform" element={<AdmissionForm />} /> 
          <Route path="/SchoolTiming" element={<SchoolTiming />} />
          <Route path="/studentCouncile" element={<CouncilPtaMenber />} />
          <Route path="/scoutBulbulClub" element={<Bulbul />} />
          <Route path="/AcademicResults" element={<AcademicResults />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/itBlogs" element={<It />} />
          <Route path="/aimBlogs" element={<Aim />} />
          <Route path="/jrBlogs" element={<Ghkjr />} />
          <Route path="/preBlogs" element={<Ghkpre />} />
          <Route path="/climbingBlogs" element={<Climbing />} />
          <Route path="/GalleryMain" element={<GalleryMain />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
