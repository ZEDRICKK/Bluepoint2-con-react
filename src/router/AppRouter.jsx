import { Navigate, Route, Routes } from "react-router-dom"
import { BenefitsPage, CareersPage, ContactUsPage, HomePage, NaviServicesPage, WhatsNaviPage } from "../bluepoint/pages"
import { ExperienceNavi } from "../bluepoint/pages/ExperienceNavi"
import { VideoDemo } from "../bluepoint/pages/VideoDemo"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="home" element={ < HomePage />} />
            <Route path="whatsnavi" element={ <WhatsNaviPage /> } />
            <Route path="naviservices" element={ < NaviServicesPage />} />
            <Route path="benefits" element={ <BenefitsPage /> } />
            <Route path="careers" element={ <CareersPage /> } />
            <Route path="contactus" element={ < ContactUsPage />} />
            <Route path="videodemo" element={ < VideoDemo />} />

            <Route path="experiencenavi" element={ < ExperienceNavi />} />

            <Route path="/" element={<Navigate to="/home" />} />

        </Routes>
    </>
  )
}


