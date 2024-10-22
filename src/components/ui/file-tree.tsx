"use client";
import * as React from "react";
import {
  ChevronRight,
  Folder,
  FileText,
  FileImage,
  FileSpreadsheetIcon,
  FileSpreadsheet,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type FileType = "folder" | "pdf" | "image" | "document" | "spreadsheet";

interface FileItem {
  name: string;
  type: FileType;
  children?: FileItem[];
}

const files: FileItem = {
  name: "Personal Documents",
  type: "folder",
  children: [
    {
      name: "Medical",
      type: "folder",
      children: [
        {
          name: "2023",
          type: "folder",
          children: [
            { name: "Annual_Checkup_Report.pdf", type: "pdf" },
            { name: "Vaccination_Record.pdf", type: "pdf" },
            { name: "Lab_Results_Blood_Test.pdf", type: "pdf" },
          ],
        },
        {
          name: "2022",
          type: "folder",
          children: [
            { name: "Hospital_Discharge_Summary.pdf", type: "pdf" },
            { name: "Prescription_Medications.jpg", type: "image" },
          ],
        },
        { name: "Insurance_Policy.pdf", type: "pdf" },
        { name: "Medical_History.docx", type: "document" },
      ],
    },
    {
      name: "Legal",
      type: "folder",
      children: [
        {
          name: "Contracts",
          type: "folder",
          children: [
            { name: "Apartment_Lease_2023.pdf", type: "pdf" },
            { name: "Car_Purchase_Agreement.pdf", type: "pdf" },
          ],
        },
        {
          name: "Personal",
          type: "folder",
          children: [
            { name: "Last_Will_and_Testament.pdf", type: "pdf" },
            { name: "Power_of_Attorney.pdf", type: "pdf" },
          ],
        },
        { name: "Property_Deed.pdf", type: "pdf" },
        { name: "Divorce_Settlement.pdf", type: "pdf" },
      ],
    },
    {
      name: "Job",
      type: "folder",
      children: [
        {
          name: "Resumes",
          type: "folder",
          children: [
            { name: "Resume_2023.pdf", type: "pdf" },
            { name: "Resume_2022.docx", type: "document" },
          ],
        },
        {
          name: "Company_XYZ",
          type: "folder",
          children: [
            { name: "Offer_Letter.pdf", type: "pdf" },
            { name: "Employee_Handbook.pdf", type: "pdf" },
            {
              name: "Performance_Reviews",
              type: "folder",
              children: [
                { name: "Review_2023.pdf", type: "pdf" },
                { name: "Review_2022.pdf", type: "pdf" },
              ],
            },
          ],
        },
        {
          name: "Payroll",
          type: "folder",
          children: [
            { name: "W2_2022.pdf", type: "pdf" },
            { name: "Pay_Stubs_2023.xlsx", type: "spreadsheet" },
          ],
        },
        {
          name: "Certifications",
          type: "folder",
          children: [
            { name: "Project_Management_Cert.pdf", type: "pdf" },
            { name: "First_Aid_Certificate.jpg", type: "image" },
          ],
        },
      ],
    },
    { name: "Passport_Scan.jpg", type: "image" },
    { name: "Social_Security_Card.jpg", type: "image" },
    { name: "Tax_Return_2022.pdf", type: "pdf" },
  ],
};

function FileIcon({ type }: { type: FileType }) {
  switch (type) {
    case "folder":
      return <Folder className="h-4 w-4 text-blue-500" />;
    case "pdf":
      return <FileSpreadsheetIcon className="h-4 w-4 text-red-500" />;
    case "image":
      return <FileImage className="h-4 w-4 text-green-500" />;
    case "document":
      return <FileText className="h-4 w-4 text-yellow-500" />;
    case "spreadsheet":
      return <FileSpreadsheet className="h-4 w-4 text-emerald-500" />;
    default:
      return <FileText className="h-4 w-4 text-gray-500" />;
  }
}

function FileTreeItem({ item, level = 0 }: { item: FileItem; level?: number }) {
  const [isOpen, setIsOpen] = React.useState(level < 2);

  if (item.children) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "w-full justify-start font-normal",
              level === 0 ? "font-semibold" : ""
            )}
          >
            <ChevronRight
              className={cn(
                "h-4 w-4 shrink-0 transition-transform duration-200",
                isOpen ? "rotate-90" : ""
              )}
            />
            <FileIcon type={item.type} />
            <span className="ml-2">{item.name}</span>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="ml-4">
          {item.children.map((child, index) => (
            <FileTreeItem key={index} item={child} level={level + 1} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="w-full justify-start font-normal"
    >
      <FileIcon type={item.type} />
      <span className="ml-2">{item.name}</span>
    </Button>
  );
}

export default function DocumentExplorer() {
  return (
    <div className="w-full max-w-sm">
      <div className="p-6">
        <div className="space-y-2 h-64 overflow-y-auto">
          <FileTreeItem item={files} />
        </div>
      </div>
    </div>
  );
}
