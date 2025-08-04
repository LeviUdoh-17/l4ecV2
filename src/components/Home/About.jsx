import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { LuCheck } from "react-icons/lu";

const statements = [
  {title: 'We Build Bold', words: 'Smart solutions. Real results. No fluff.', bg: '', texts: 'text-slate-600', header: 'text-slate-900'}, 
  {title: 'Client Commitment', words: 'Fostering trust through excellence and strategic collaboration.', bg: 'bg-gradient-to-br from-[#1A1787] to-blue-500', texts: 'text-white', header: 'text-white'}, 
  {title: 'Why It Matters', words: 'Turning potential into extraordinary success, every step.', bg: '', texts: 'text-slate-600', header: 'text-slate-900'},
]

const About = () => {
  return (
    <div className="px-20 py-10 pt-10 lg:pt-0 relative flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 items-center">
      <Card className="w-[30rem] h-[25rem] border-none shadow-2xl lg:mt-0 mt-25">
        <CardTitle>
          <CardHeader className="text-4xl text-slate-800 font-semibold">
            Let us do the work, so that you can focus on what matters.
          </CardHeader>
        </CardTitle>
        <CardContent>
          <CardDescription className="text-md font-[600] word-break text-slate-500">
            L4 Enterprise Consulting is a purpose-driven small business
            specializing in Business Consulting, Digital Transformation,
            Technical Delivery, and Technology Management.
          </CardDescription>
        </CardContent>
        <Button className="mt-8 ml-5 px-7 py-6 text-sm text-white bg-[#1A1787] hover:border hover:border-[#1A1787] rounded-none hover:bg-transparent hover:text-[#1A1787] transition-smooth">
          Learn More
        </Button>
      </Card>
      <img src="aboutImage.png" className="object-contain h-[35rem] hidden lg:block absolute bottom-[-.1rem] left-[40%]" alt="" />
      <div className="flex flex-col gap-5">
        {
          statements.map((statement) => (
            <div className={`flex justify-start gap-5 shadow-lg h-[7rem] w-[24rem] px-6 items-center ${statement.bg}`}>
              <div className="border h-fit text-4xl text-green-400 rounded-full w-fit">
                <LuCheck/>
              </div>
              <div >
                <p className={`text-xl font-bold ${statement.header}`}>{statement.title}</p>
                <p className={`text-md font-[400] text-slate-600 ${statement.texts}`}>{statement.words}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default About;
