import React from 'react'
import { Route, Routes } from 'react-router'
import { ShowsList } from '../pages/ShowsList'
import { Summary } from '../pages/Summary'
import { Form } from '../components/Form'

export function AllRoutes() {
  return (
   <>
   <Routes>
   <Route path = "/" element = {<ShowsList/>} />
    <Route path = "/:id" element = {<Summary/>} />
    <Route path = "/form" element = {<Form/>} />

   </Routes>
   </>
  )
}
