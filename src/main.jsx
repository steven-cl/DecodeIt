import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Layout from './Layout'
import Home from "@/pages/Home"
import U1Intro from "@/pages/U1Intro"
import U2CPUOrganization from "@/pages/U2CPUOrganization"
import U3InstructionsDesign from "@/pages/U3InstructionsDesign"
import U4ExecutionUnity from "@/pages/U4ExecutionUnity"
import U5ControlUnity from "@/pages/U5ControlUnity"
import U6MemorySystem from "@/pages/U6MemorySystem"
import U7InputOutputSystem from "@/pages/U7InputOutputSystem"
import NotFound from "@/pages/NotFound"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/machine_organization_and_architecture_introduction" element={<U1Intro />} />
          <Route path="/cpu_organization" element={<U2CPUOrganization />} />
          <Route path="/design_of_instructions_set" element={<U3InstructionsDesign />} />
          <Route path="/execution_unity" element={<U4ExecutionUnity />} />
          <Route path="/control_unity" element={<U5ControlUnity />} />
          <Route path="/memory_system" element={<U6MemorySystem />} />
          <Route path="/input_output_system" element={<U7InputOutputSystem />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
