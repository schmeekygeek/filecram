import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { ThemeToggle } from "./resources.theme-toggle";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Index() {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <nav className="flex items-center justify-between p-4 w-full">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-extrabold text-2xl bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
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
            An open-source tool to compress an{" "}
            <span className="font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
              image
            </span>{" "}
            or{" "}
            <span className="font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
              PDF
            </span>{" "}
            <Link
              to="https://ui.aceternity.com"
              className="hover:text-blue-500"
            >
              with ease.
            </Link>
          </h1>
          <p className="text-slate-500 dark:text-slate-200 text-lg">
            Make files portable and save bandwidth when sharing files online
          </p>
          <div className="h-5"/>
          <div className="flex-1 flex-col justify-center items-start">
            <Card className="flex justify-between items-end my-3 md:w-96">
              <CardHeader>
                <CardTitle
                  className="text-2xl"
                >Pick an image</CardTitle>
                <CardDescription className="text-md">Pick any jpeg or png image</CardDescription>
              </CardHeader>
              <CardFooter>
                <ArrowRight />
              </CardFooter>
            </Card>
            <Card className="flex justify-between items-end my-3 md:w-96">
              <CardHeader>
                <CardTitle
                  className="text-2xl"
                >Pick a PDF</CardTitle>
                <CardDescription className="text-md">Pick a PDF format file</CardDescription>
              </CardHeader>
              <CardFooter>
                <ArrowRight />
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
