import { Navigate, Route, Routes } from 'react-router-dom'
import { InfoPage } from '../pages/InfoPage'
import { AddonsPage } from '../pages/AddonsPage'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/firstStep" element={<InfoPage />} />
            <Route path="/secondStep" element={<AddonsPage />} />
            <Route path='/*' element={<Navigate to='/firstStep' />} />
        </Routes>
    </>

  )
}
