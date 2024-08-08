"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "../../../lib/utils";

export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [

    {
      id: 0,
      name: "Abhilash Poloju",
      designation: "Senior Software Engineer",
      optedCourse: "AWS, Azure, GCP, Big Data, C",
      content: (
        <p>
          These courses are amazing, <Highlight>I want to use them</Highlight> in my project. The instructors are very knowledgeable and helpful.
        </p>
      ),
    },
    {
      id: 1,
      name: "Uday Sharma",
      designation: "Data Scientist",
      optedCourse: "Data Science & Python",
      content: (
        <p>
          The <Highlight>Data Science & Python</Highlight> course was very comprehensive and practical. I highly recommend it.
        </p>
      ),
    },
    {
      id: 2,
      name: "Ravi Kumar",
      designation: "Cyber Security Specialist",
      optedCourse: "Cyber Security",
      content: (
        <p>
        The <Highlight>Cyber Security</Highlight> course provided in-depth knowledge and hands-on experience. It&apos;s a must for anyone looking to enter this field.
      </p>
      
      ),
    },
    {
      id: 3,
      name: "Saba Begum",
      designation: "Full Stack Developer",
      optedCourse: "Front-End (HTML & CSS & JavaScript) and Back-End (Core Java & Advance Java & Spring, SQL, Oracle SQL)",
      content: (
        <p>
          The combination of <Highlight>Front-End and Back-End</Highlight> courses made me a proficient full stack developer. The course structure was very well planned.
        </p>
      ),
    },
    {
      id: 4,
      name: "Amit Patel",
      designation: "Ethical Hacker",
      optedCourse: "Ethical Hacking (Attacking VAPT & SOC)",
      content: (
        <p>
          The <Highlight>Ethical Hacking</Highlight> course was very informative and the practical sessions were extremely useful.
        </p>
      ),
    },
    {
      id: 5,
      name: "Sunita Joshi",
      designation: "System Administrator",
      optedCourse: "Windows Admin and Linux Admin",
      content: (
        <p>
          The <Highlight>Windows Admin and Linux Admin</Highlight> courses helped me enhance my skills and knowledge. The trainers were very supportive.
        </p>
      ),
    },
    {
      id: 6,
      name: "Vikram Singh",
      designation: "Software Developer",
      optedCourse: "C++ & JAVA (Core & Advance & Full Stack Java)",
      content: (
        <p>
          The <Highlight>C++ & JAVA</Highlight> course was excellent. It covered all the important concepts and helped me in my career growth.
        </p>
      ),
    },
    {
      id: 7,
      name: "Anjali Mehta",
      designation: "Data Analyst",
      optedCourse: "Power BI and MySQL",
      content: (
        <p>
          The <Highlight>Power BI and MySQL</Highlight> course was very detailed and practical. It helped me understand data analysis better.
        </p>
      ),
    },
    {
      id: 8,
      name: "Karan Malhotra",
      designation: "Network Engineer",
      optedCourse: "Firewall (FortiGate, PALEO) & CCN, Windows",
      content: (
        <p>
          The <Highlight>Firewall</Highlight> course was very informative. It covered all the aspects of firewall management and security.
        </p>
      ),
    },
    {
      id: 9,
      name: "Priya Nair",
      designation: "Machine Learning Engineer",
      optedCourse: "R, Python, Machine Learning, Data Science",
      content: (
        <p>
          The <Highlight>R, Python, Machine Learning, Data Science</Highlight> course was very comprehensive and gave me a solid foundation in machine learning.
        </p>
      ),
    }
  ];
  

  

