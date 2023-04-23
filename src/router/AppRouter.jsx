import { Navigate, Route, Routes } from "react-router-dom"
import { BenefitsPage, CareersPage, ContactUsPage, HomePage, NaviServicesPage, WhatsNaviPage } from "../bluepoint/pages"
import { ExperienceNavi } from "../bluepoint/pages/ExperienceNavi"


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

            <Route path="experiencenavi" element={ < ExperienceNavi />} />

            <Route path="/" element={<Navigate to="/home" />} />

        </Routes>
    </>
  )
}


