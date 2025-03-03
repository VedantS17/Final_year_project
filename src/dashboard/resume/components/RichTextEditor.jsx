import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { toast } from '@/hooks/use-toast';
import { Brain, LoaderCircle } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import { BtnBold, BtnBulletList,  BtnItalic, BtnLink, BtnNumberedList, BtnStrikeThrough, BtnUnderline, Editor, EditorProvider, Separator, Toolbar } from 'react-simple-wysiwyg'
import { AIchatSession } from './../../../../service/AIModel';




const PROMPT='position title: {positionTitle} , Depends on position title give me 2-3 bullet points for my experience in resume (Please do not add experince level and No JSON array) , give me result in HTML tags'
function RichTextEditor({onRichTextEditorChange,index,defaultValue}) {
    const [value,setValue]=useState(defaultValue);
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
    const [loading,setLoading] =useState(false);



    useEffect(() => {
      setValue(resumeInfo.experience[index]?.workSummary || '');
  }, [resumeInfo.experience, index]);





    const GenerateSummaryFromAI=async()=>{
        setLoading(true)
        if(!resumeInfo.experience[index].title)
        {
            setLoading(false);
            toast('Please Add Position Title')
            return ;
        }
        const prompt=PROMPT.replace('{positionTitle}',resumeInfo.experience[index].title)
        
        const result=await AIchatSession.sendMessage(prompt);
        console.log(result.response.text());
        const resp=  result.response.text()
        const bulletPoints = resp
            .replace(/[\[\]"]/g, '')
            .split(',')
            .map(point => `<li>${point.trim()}</li>`) 
            .join(''); // Join back into a single string
        setValue(bulletPoints);
        const updatedExperience = [...resumeInfo.experience];
        updatedExperience[index].workSummary = bulletPoints;
        setResumeInfo({ ...resumeInfo, experience: updatedExperience });
        setLoading(false);
    }


  return (
    <div>
        <div className='flex justify-between my-2'>
            <label className='text-xs' >Summary</label>
            <Button variant="outline"  size="sm" 
            onClick={GenerateSummaryFromAI}
            className="flex gape-2 border-primary text-primary">
                {loading?
                <LoaderCircle className='animate-spin'/>:
                <>
                <Brain className='h-4 w-4'/>"Generate from AI"
                </>
            }
                </Button>
        </div>
      <EditorProvider>
        <Editor value={value} onChange={(e)=>{
            setValue(e.target.value);
            onRichTextEditorChange(e)
        }}>
            <Toolbar>
                <BtnBold/>
                <BtnItalic/>
                <BtnUnderline />
                <BtnStrikeThrough />
                <Separator />
                <BtnNumberedList />
                <BtnBulletList />
                <Separator />
                <BtnLink />
                
                
            </Toolbar>


        </Editor>
      </EditorProvider>
    </div>
  )
}

export default RichTextEditor
