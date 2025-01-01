import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { ArrowRight } from "lucide-react";

interface FileCardProps {
  cardTitle: string;
  cardDesc: string;
}

function FileCard(props: FileCardProps) {
  return (
    <Card className="flex justify-between items-end my-3 md:w-96 transition transform hover:scale-105 hover:cursor-pointer">
      <CardHeader>
        <CardTitle
          className="text-2xl"
        > { props.cardTitle }
        </CardTitle>
        <CardDescription className="text-md">{ props.cardDesc }</CardDescription>
      </CardHeader>
      <CardFooter>
        <ArrowRight />
      </CardFooter>
    </Card>
  )
}

export default FileCard
