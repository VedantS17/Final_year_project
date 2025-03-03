
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../../service/GlobalApi';
import { Brain, LoaderCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { AIchatSession } from './../../../../../service/AIModel';


const prompt="Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format"
function Summary({enableNext}) {
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
    const [Summary,setSummary]=useState();
    const [loading,setLoading]=useState(false);
    const params=useParams();
    const [aiGeneratedSummaryList,setAiGenerateSummaryList]=useState([]);
    useEffect(()=>{
        Summary&&setResumeInfo({
            ...resumeInfo,
            Summary:Summary
        })
    },[Summary])

    const GenerateSummaryFromAI=async()=>{
        setLoading(true)
        const PROMPT=prompt.replace('{jobTitle}',resumeInfo?.jobTitle);
        console.log(PROMPT);
        const result = await AIchatSession.sendMessage(PROMPT);
        const parsedResponse = JSON.parse(result.response.text());
        console.log(parsedResponse);  // Add this line to inspect the response
        setAiGenerateSummaryList(parsedResponse);
        // setAiGenerateSummaryList(JSON.parse(result.response.text()))
        setLoading(false);
    }


    const onSave = (e) => {
    e.preventDefault();
    
    setLoading(true);
    const data = {
        data: {
            Summary: Summary
        }
    };
    
    console.log("Saving data:", data);  // Log data being sent
    
    GlobalApi.UpdateResumeDetail(params?.resumeId, data)
        .then((resp) => {
            console.log("API Response:", resp);  // Log response from API
            enableNext(true);
            setLoading(false);
            toast({ title: "Success", description: "Details Updated Successfully" });
        })
        .catch((error) => {
            console.error("API Error:", error);  // Log the error if the API call fails
            setLoading(false);
            toast({ title: "Error", description: "Error ocurred" });
        });
};

    return (
    <div>
         <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Summary</h2>
        <p>Add Summary for your job title</p>

        <form className='mt-7' onSubmit={onSave}>
            <div className='flex justify-between items-end'>
                <label>Add Summary</label>
                <Button variant="outline" onClick={()=>GenerateSummaryFromAI()} 
                type="button" size="sm" className="border-primary text-primary flex gap-2"> 
                <Brain className='h-4 w-4' />  Generate from AI</Button>
            </div>
            <Textarea className="mt-5" required
            value={Summary}
                defaultValue={Summary?Summary:resumeInfo?.Summary}
            onChange={(e)=>setSummary(e.target.value)}
            />
            <div className='mt-2 flex justify-end'>
            <Button type="submit"
                disabled={loading}>
                    {loading?<LoaderCircle className='animate-spin' />:'Save'}
                    </Button>
            </div>
        </form>
        </div>

    
        {aiGeneratedSummaryList && Array.isArray(aiGeneratedSummaryList) && aiGeneratedSummaryList.length > 0 && (
            <div className="my-5">
                <h2 className="font-bold text-lg">Suggestions</h2>
                {aiGeneratedSummaryList.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setSummary(item?.summary)}
                        className="p-5 shadow-lg my-4 rounded-lg cursor-pointer"
                    >
                        <h2 className="font-bold my-1 text-primary">Level: {item?.experience_level}</h2>
                        <p>{item?.summary}</p>
                    </div>
                ))}
            </div>
        )} 




    </div>
  )
}

export default Summary