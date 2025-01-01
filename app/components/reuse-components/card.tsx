import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { ArrowRight } from "lucide-react";

function CardReuse(prop: { cardTitle: string, cardDesc: string }) {
  return (
    <Card className="flex justify-between items-end my-3 md:w-96">
      <CardHeader>
        <CardTitle
          className="text-2xl"
        > { prop.cardTitle }
        </CardTitle>
        <CardDescription className="text-md">{ prop.cardDesc }</CardDescription>
      </CardHeader>
      <CardFooter>
        <ArrowRight />
      </CardFooter>
    </Card>
  )
}

export default CardReuse
