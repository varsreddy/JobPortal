// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
// import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
// import { Edit2, MoreHorizontal } from "lucide-react";

// const CompaniesTable = () => {
//   return (
//     <div>
//       <Table>
//         <TableCaption>A list of your recent registered companies</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Logo</TableHead>
//             <TableHead>Name</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           <TableCell>
//             <Avatar>
//               <AvatarImage className="h-[60px] w-[60px]" src="https://media.istockphoto.com/id/1053291038/vector/business-finance-bar-profit-vector-illustration.jpg?s=612x612&w=0&k=20&c=r0axxeuEroKcQO7lhVziB0-AFuRTFfGUfnrfF1euzB4=" />
//             </Avatar>
//           </TableCell>
//             <TableCell>Company Name</TableCell>
//             <TableCell>12/12/2023</TableCell>
//             <TableCell className="text-right cursor-pointer">
//               <Popover>
//                 <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
//                 <PopoverContent className="w-32">
//                     <div className="flex items-center gap-2 w-fit cursor-pointer">
//                         <Edit2 className="w-4"/>
//                         <span>Edit</span>
//                     </div>
//                 </PopoverContent>
//               </Popover>
//             </TableCell>
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default CompaniesTable;

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
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
  const { companies,searchCompanyByText } = useSelector(store => store.company);
  const [filterCompany ,setFilterCompany] = useState(companies);

  const navigate = useNavigate();
  useEffect(()=>{
    const filteredCompany = companies.length >= 0 && companies.filter((company)=>{
      if(!searchCompanyByText){
        return true;
      }
      return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
    });
    setFilterCompany(filteredCompany);
  },[companies,searchCompanyByText])

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies?.length <= 0 ? (
            <span>No companies are registered yet.</span>
          ) : (
            <>
              {filterCompany?.map((company) => (
                <tr key={company._id}>
                  <TableCell>
                    <Avatar>
                      <AvatarImage
                        className="h-[60px] w-[60px]"
                        src ={company.logo}
                        alt="Company Logo"

                      />
                    </Avatar>
                  </TableCell>
                  <TableCell>{company.name}</TableCell>
                  <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                  <TableCell className="text-right cursor-pointer">
                    <Popover>
                      <PopoverTrigger>
                        <MoreHorizontal />
                      </PopoverTrigger>
                      <PopoverContent className="w-32">
                        <div onClick={()=>navigate(`/admin/companies/${company._id}`)} className="flex items-center gap-2 w-fit cursor-pointer">
                          <Edit2 className="w-4" />
                          <span>Edit</span>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </tr>
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
