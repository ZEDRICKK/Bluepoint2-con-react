import { Navigate, Route, Routes } from "react-router-dom"
import { BenefitsPage, CareersPage, ContactUsPage, HomePage, NaviServicesPage, WhatsNaviPage } from "../bluepoint/pages"


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

            <Route path="/" element={<Navigate to="/home" />} />

        </Routes>
    </>
  )
}


