import React, { useState } from 'react'
import PersonalDetail from './forms/PersonalDetail'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from 'lucide-react'
import Summary from './forms/Summary';
import Experience from './forms/Experience';
import Education from './forms/Education';
import Skills from './forms/Skills';
import { Navigate, Link, useParams } from 'react-router-dom';
import VideoRecorder from './forms/VideoRecorder';


function FormSection() {
    const [activeFormIndex,setActiveFormIndex]=useState(1);
    const [enableNext,setEnableNext]=useState(true);
    const {resumeId}=useParams();
  return (
    <div>
        <div className='flex justify-between items-center'>
        <div className='flex gap-5'>
        <Link to={"/dashboard"}>
          <Button><Home/></Button>
          </Link>
            <Button variant="outline" size="sm"
            className="flex gap-2"><LayoutGrid/>Theme
            </Button>
        </div>
        
            <div className='flex gap-2'>
                {activeFormIndex>1
                &&<Button size="sm"
                onClick={()=>setActiveFormIndex(activeFormIndex-1)} ><ArrowLeft/></Button>}
            <Button 
            disabled={!enableNext}
            className="flex gap-2 " size="sm"
            onClick={()=>setActiveFormIndex(activeFormIndex+1)}
            >Next
            <ArrowRight/></Button>
            </div>
        </div>
      {/*Personal Detail */}
       {activeFormIndex ==1?  <PersonalDetail enableNext={(v)=>setEnableNext(v)}/>
       :activeFormIndex==2?
                  <Summary  enableNext={(v)=>setEnableNext(v)}/>
        :activeFormIndex==3?
                  <Experience enableNext={(v)=>setEnableNext(v)}/>
                  :activeFormIndex==4?
                  <Education/>
                  :activeFormIndex==5?
                  <Skills/>
                  :activeFormIndex==6?
                  <VideoRecorder/>
                  :activeFormIndex==7?
                  <Navigate to={'/my-resume/'+resumeId+"/view"}/>
                  :null
      }
      

      {/* Experience */}

       {/* Educational Detail */}

       {/*Skills*/ }
    </div>
  )
}

export default FormSection
