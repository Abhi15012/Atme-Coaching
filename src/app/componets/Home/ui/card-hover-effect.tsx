import { cn } from "../../../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
name: string;
    description: string;
    price: number;
    rating:number;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.name}
          key={item?.name}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-pink-400  dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="flex justify-center items-center text-center ">
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardDescription className="font-medium   text-purple-400 ">Rating:{item.rating}</CardDescription>
            <CardDescription className="font-medium   text-emerald-500  my-1">Price:{item.price} rs</CardDescription>
            <button className="bg-green-600 hover:bg-pink-600   font-semibold  w-1/2 h-10 rounded-lg text-lg">Enrol Now</button>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl md:h-72  h-full w-full  text-black dark:text-white overflow-hidden bg-gradient-to-b  from-slate-700 to-slate-950 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="px-2 ">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={cn("text-white  font-bold tracking-wide mt-4 mb-8", className)}>
      {children}
    </h3>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        " text-zinc-300 tracking-wide leading-relaxed text-md",
        className
      )}
    >
      {children}
    </p>
  );
};
