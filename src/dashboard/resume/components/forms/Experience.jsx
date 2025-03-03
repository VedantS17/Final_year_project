import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import  { useContext, useEffect, useState } from 'react'
import RichTextEditor from '../RichTextEditor'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { LoaderCircle } from 'lucide-react'
import GlobalApi from './../../../../../service/GlobalApi';
import { useParams } from 'react-router-dom'
import { toast } from '@/hooks/use-toast';


const formField={
    title:'',
    companyName:'',
    city:'',
    state:'',
    startDate:'',
    endDate:'',
    workSummary:'',
};

function Experience() {
    const [experienceList,setExperienceList]=useState([{
        formField
    }]);

    const params=useParams();
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
    const [loading,setLoading]=useState(false);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(()=>{
        resumeInfo&&setExperienceList(resumeInfo?.experience)
    },[])

    const handleChange=(index,event)=>{
        const newEntries=experienceList.slice();
        const {name,value}=event.target;
        newEntries [index][name]=value;
        setExperienceList(newEntries);
    }

    const AddNewExperience=()=>{
        setExperienceList([...experienceList,formField])
    }
    const RemoveExperience=()=>{
        setExperienceList(experienceList=>experienceList.slice(0,-1))
    }


    const  handleRichTextEditor=(e,name,index)=>{
        const newEntries=experienceList.slice();
        newEntries [index][name]=e.target.value;
        setExperienceList(newEntries);
    }
    
    const onSave = async (e) => {
        e.preventDefault();
        setIsSaving(true);
    
        const cleanedExperienceList = experienceList.map(({ formField, ...rest }) => rest);
    
        const data = {
            data: {
                experience: cleanedExperienceList.map(({ id, ...rest }) => rest)
            }
        };
    

    
        try {
            const resp = await GlobalApi.UpdateResumeDetail(params?.resumeId, data);
            console.log("Response:", resp);  
            setIsSaving(false);
            toast({
                title: "Success",
                description: "Details Updated Successfully",
            });
        } catch (error) {
            setIsSaving(false);
            console.error("Error:", error); 
            
            console.error("Error Response Data:", error.response?.data); 
        }
    };
    useEffect(()=>{
        setResumeInfo({
            ...resumeInfo,
            Experience:experienceList
        });
     
    },[experienceList]);

    


 

  return (
    <div>
      <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Professional Experience</h2>
        <p>Add your previous Job experience</p>
    
    <form onSubmit={onSave}>
       {experienceList.map((item,index)=>(
            <div key={index}>
                <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                    <div>
                        <label className='text-xs'>Position Title</label>
                        <Input name='title' 
                        onChange={(event)=>handleChange(index,event)}
                        defaultValue={item?.title}/>
                    </div>
                    <div>
                        <label className='text-xs'>Company Name</label>
                        <Input name='companyName' 
                        onChange={(event)=>handleChange(index,event)}
                        defaultValue={item?.companyName} />
                    </div>
                    <div>
                        <label className='text-xs'>City</label>
                        <Input name='city' onChange={(event)=>handleChange(index,event)}
                        defaultValue={item?.city}/>
                    </div>
                    <div>
                        <label className='text-xs'>State</label>
                        <Input name='state' onChange={(event)=>handleChange(index,event)}
                        defaultValue={item?.state}/>
                    </div>
                    <div>
                        <label className='text-xs'>Start Date</label>
                        <Input type='date' name='startDate' onChange={(event)=>handleChange(index,event)}
                        defaultValue={item?.startDate}/>
                    </div>
                    <div>
                        <label className='text-xs'>End Date</label>
                        <Input type='date' name='endDate' onChange={(event)=>handleChange(index,event)}
                        defaultValue={item?.endDate}/>
                    </div>
                    <div className='col-span-2'>
                        <RichTextEditor 
                        index={index}
                        defaultValue={item?.workSummary}
                        onRichTextEditorChange={(event)=>handleRichTextEditor(event,'workSummary',index)}
                        
                        />
                    </div>
                    
                </div>
            </div>
       ))} 
       <div className='flex justify-between'>
        <div>
        <Button variant="outline" onClick={AddNewExperience} className="text-primary">+ Add More Experience</Button>
        <Button variant="outline" onClick={RemoveExperience} className="text-primary">- Remove</Button>

        </div>
       
        <div className='mt-3  flex justify-end'>
                <Button type="submit"
                disabled={loading}>
                    {isSaving?<LoaderCircle className='animate-spin'/>:'Save'}
                    </Button>
            </div>
    </div>
    </form>
    
    </div>
    </div>
  )
}

export default Experience





