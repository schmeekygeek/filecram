import { FileUpload } from "./ui/file-upload";

interface UploadContentProps {
  fileType: FileType
}

export type FileType = "image" | "pdf" | "";

export default function UploadContent(props: UploadContentProps) {
  let type = ""
  switch(props.fileType) {
    case 'image':
      type="image/png, image/jpeg"
    break;
    case 'pdf':
      type=".pdf"
    break;
    default:
      type=""
  }
  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
    <FileUpload filetype={type}/>
    </div>

  )
}
