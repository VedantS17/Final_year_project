import { Input } from '@/components/ui/input'
import { Rating } from '@smastrom/react-rating'
import React, { useContext, useEffect, useState } from 'react'
import '@smastrom/react-rating/style.css'
import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import GlobalApi from './../../../../../service/GlobalApi'
import { useParams } from 'react-router-dom'

import { toast } from '@/hooks/use-toast'
function Skills() {
    
    const  [skillsList,setSkillsList]=useState([{
        name:'',
        rating:0
    }])
    const {resumeId}=useParams();
    const [loading,setLoading]=useState(false);
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)

    useEffect(()=>{
        resumeInfo&&setSkillsList(resumeInfo?.skills)
    },[])



    const handleChange=(index,name,value)=>{
        const newEntries=skillsList.slice();
        newEntries [index][name]=value;
        setSkillsList(newEntries);
    };
    const AddNewSkills=()=>{
        setSkillsList([...skillsList,{
            name:'',
        rating:0  
        }])
    }
    const RemoveSkills=()=>{
        setSkillsList(skillsList=>skillsList.slice(0,-1)) 
    }
    const onSave=()=>{
        setLoading(true);
        const data={
            data:{
                skills:skillsList.map(({ id, ...rest }) => rest)
            }
        }
        GlobalApi.UpdateResumeDetail(resumeId,data).then(resp=>{
            
            setLoading(false);
            toast({
                title: "Success",
                description: "Details Updated Successfully",
            });
        },(error)=>{
            setLoading(false);
            toast({
                title: "Oops!",
                description: "Failed try again!",
            });
        })
    }

    useEffect(()=>{
        setResumeInfo({
         ...resumeInfo,
         skills:skillsList
        })
 
     },[skillsList])

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Skills</h2>
        <p>Add your top  preofessional skills</p>

        
        <div>
  {skillsList.map((item, index) => (
    <div key={item?.id || index} className='flex justify-between mb-2 border rounded-lg p-3'>
      <div>
        <label className='text-xs'>Name</label>
        <Input 
          className="w-full" 
          defaultValue={item?.name}
          onChange={(e) => handleChange(index, 'name', e.target.value)} 
        />
      </div>
      <Rating 
        style={{ maxWidth: 120 }} 
        value={item.rating} 
        onChange={(v) => handleChange(index, 'rating', v)} 
      />
    </div>
  ))}
</div>
        <div className='flex justify-between'>
        <div>
        <Button variant="outline" onClick={AddNewSkills} className="text-primary">+ Add More Skills</Button>
        <Button variant="outline" onClick={RemoveSkills} className="text-primary">- Remove</Button>

        </div>
       
        <div className='mt-3  flex justify-end'>
                <Button type="submit"
                disabled={loading}
                onClick={onSave}>
                    {loading?<LoaderCircle className='animate-spin'/>:'Save'}
                    </Button>
            </div>
    </div>
    </div>
  )
}

export default Skills
