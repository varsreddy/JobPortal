import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobsTable = () => {
  const { companies, searchCompanyByText } = useSelector(
    (store) => store.company
  );
  const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allAdminJobs);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const filteredJobs =
  //     (allAdminJobs?.length >= 0 &&
  //       allAdminJobs.filter((job) => {
  //         if (!searchJobByText) {
  //           return true;
  //         }
  //         return job?.title
  //           ?.toLowerCase()
  //           .includes(
  //             searchJobByText.toLowerCase() ||
  //               job?.company?.name
  //                 ?.toLowerCase()
  //                 .includes(searchJobByText.toLowerCase())
  //           );
  //       })) ||
  //     [];
  //   setFilterJobs(filteredJobs);
  // }, [allAdminJobs, searchJobByText]);

    useEffect(() => {
    const filteredJobs =
      allAdminJobs?.length > 0
        ? allAdminJobs.filter((job) => {
            if (!searchJobByText) return true;

            const title = job?.title?.toLowerCase() || "";
            const company = job?.company?.name?.toLowerCase() || "";
            const searchText = searchJobByText.toLowerCase();

            return (
              title.includes(searchText) || company.includes(searchText)
            );
          })
        : [];

    setFilterJobs(filteredJobs);
  }, [allAdminJobs, searchJobByText]);

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent posted jobs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterJobs?.map((job) => (
            <tr key={job._id}>
              <TableCell>{job?.company?.name}</TableCell>
              <TableCell>{job?.title}</TableCell>
              <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
              <TableCell className="text-right cursor-pointer">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-32 bg-white text-black shadow-md">
                    <div
                      onClick={() => navigate(`/admin/companies/${job._id}`)}
                      className="flex items-center gap-2 w-fit cursor-pointer"
                    >
                      <Edit2 className="w-4" />
                      <span>Edit</span>
                    </div>
                    <div onClick={()=> navigate(`/admin/jobs/${job._id}/applicants`)} className="flex items-center gap-2 mt-2 cursor-pointer">
                      <Eye className="w-4"/>
                      <span>Applications</span>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;
