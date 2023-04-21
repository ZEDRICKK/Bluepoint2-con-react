import { Navigate, Route, Routes } from "react-router-dom"
import { BluePointPage, WhatsNaviPage } from "../bluepoint/pages"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="bluepoint" element={ <BluePointPage />} />
            <Route path="whatsnavi" element={ <WhatsNaviPage /> } />

            <Route path="/" element={<Navigate to="/bluepoint" />} />

        </Routes>
    </>
  )
}


