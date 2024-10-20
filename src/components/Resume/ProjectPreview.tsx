import { Project } from "@/Types/ResumeTypes";
import { format } from "date-fns";


// Define the type for resumeInfo
type ResumeInfo = {
    themeColor: string;
    projects: Project[];
};

// Define the props type
type ProjectPreviewProps = {
    resumeInfo: ResumeInfo;
};

function ProjectPreview({ resumeInfo }: ProjectPreviewProps) {
    return (
        <div className='my-6'>
            <h2 className='text-center font-bold text-sm mb-2'
                style={{
                    color: resumeInfo?.themeColor
                }}
            >Projects</h2>
            <hr style={{
                borderColor: resumeInfo?.themeColor
            }} />

            {resumeInfo?.projects?.map((project, index) => (
                <div key={index} className='my-5'>
                    <div className="flex items-center justify-between">

                        <p className='text-sm font-bold'
                            style={{
                                color: resumeInfo?.themeColor
                            }}>{project?.name}</p>
                        <p className='text-xs flex justify-end'>
                            <span className="font-semibold" style={{ color: resumeInfo?.themeColor }}>
                                {project?.startDate
                                    ? format(new Date(project.startDate), 'MMM yyyy')
                                    : 'N/A'}<span className="mx-1">-</span>
                                {project?.currentlyWorking
                                    ? 'Present'
                                    : (project?.endDate
                                        ? format(new Date(project.endDate), 'MMM yyyy')
                                        : 'N/A')}
                            </span>
                        </p>
                    </div>
                    <div className='text-xs my-2' dangerouslySetInnerHTML={{ __html: project?.description || '' }} />
                </div>
            ))}
        </div>
    );
}

export default ProjectPreview;
