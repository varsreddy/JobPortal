import React from "react";
import { Button } from "./ui/button";
import { Badge } from "../components/ui/badge";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import { useNavigate } from "react-router-dom";

const Job = ({job}) => {
  const navigate = useNavigate();
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentDate = new Date();
    const timeDiff = currentDate - createdAt;

    return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  }
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm  text-gray-500">{daysAgoFunction(job?.createdAt) === 0? "Today":`${daysAgoFunction(job?.createdAt)} days ago`}</p>
        <Button  className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" size="icon">
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      <div className="">
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
            <Badge className='text-blue-700 font-bold'  variant="ghost">{job?.posiiton} Positions</Badge>
            <Badge className='text-[#f83002] font-bold' variant="ghost">{job?.jobType}</Badge>
            <Badge className='text-[#7209b7] font-bold' variant="ghost">{job?.salary}4 LPA</Badge>
        </div>
        <div className="flex items-center gap-4 mt-4">
            <Button onClick={()=> navigate(`/description/${job._id}`)} variant={"outline"}>Details</Button>
            <Button className={"bg-[#7209b7] text-white hover:text-[#7209b7] hover:bg-white hover:border"}>Save for Later</Button>
        </div>
    </div>
  );
};

export default Job;
