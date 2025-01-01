import { Link } from "@remix-run/react";
import { ThemeToggle } from "./resources.theme-toggle";
import GradientText from "~/components/reuse-components/grandient-text";
import UploadContent, { FileType } from "~/components/upload-file";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import FileCard from "~/components/reuse-components/file-card";
import { ArrowLeft } from "lucide-react";

export default function Index() {

  const [actionType, setActionType] = useState<FileType>("");

  return (
    <section className="w-full min-h-screen flex flex-col">
      <nav className="flex items-center justify-between p-4 w-full">
        <Link to="/" className="flex items-center space-x-2">
          <span 
            className="font-extrabold text-3xl bg-gradient-to-r from-orange-700 via-blue-500 
            to-green-400 text-transparent bg-clip-text bg-300% animate-gradient"
          >
            <h1>
              FileCram
            </h1>
          </span>{" "}
        </Link>
        <ThemeToggle />
      </nav>
      <div className="flex-col justify-center">
        <div className="flex-col justify-end items-center space-y-4 p-4">
          <h1 className="text-balance text-4xl md:text-6xl font-bold tracking-tighter">
            An open-source tool to compress an {" "}
            <GradientText tag="span" text="image"/>
            or {" "}
            <GradientText tag="span" text="PDF"/>
            <Link
              to="https://ui.aceternity.com"
              className="hover:text-blue-500"
            >
              with ease.
            </Link>
          </h1>
          <p className="text-slate-500 dark:text-slate-200 text-lg">
            Make files portable and save bandwidth when sharing files online.
          </p>
          <div className="h-5"/>
          {actionType === "" ? 
            <div className="flex flex-wrap py-4 gap-x-4 justify-center items-start">
              <div onClick={() => setActionType("image")}>
                <FileCard
                  cardTitle="Pick an image"
                  cardDesc="Pick any jpeg or png image"
                />
              </div>
              <div
                onClick={() => setActionType("pdf")}
              >
                <FileCard
                  cardTitle="Pick a PDF"
                  cardDesc="Pick a PDF format file"
                />
              </div>
            </div>
          : 
            <div>
              <Button
                onClick={() => setActionType("")}
                className="my-4"
                variant="ghost"
              >
                <ArrowLeft className="pe-2 h-4"/>
                Go Back
              </Button>
              <UploadContent fileType={actionType}/>
            </div>
          }
        </div>
      </div>
    </section>
  );
}
