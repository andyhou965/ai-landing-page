"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const Workflow = () => {
  const shakeAnimation = {
    init: { opacity: 1, scale: 1 },
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="workflow" className="w-full py-20">
      <div className="relative mx-auto flex items-center justify-center">
        <motion.div
          variants={shakeAnimation}
          initial="init"
          whileInView="shake"
          className="bg-black"
        >
          <h1 className="heading relative z-10">The Workflow</h1>
          <div className="z-10 pt-10 flex flex-col lg:flex-row items-center justify-center gap-4 max-w-6xl mx-auto">
            <Card
              title="Data Ingestion & Preparation"
              icon={<AceternityIcon order="STEP 1" />}
              description="Upload your dataset in .csv or .xlsx format, and view a preview of the data. The engine will guide you to input more info to ensure the dataset is ready for modeling"
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-sky-600"
              />
            </Card>
            <Card
              title="Data Analysis & Processing"
              icon={<AceternityIcon order="STEP 2" />}
              description="Analyze the data to explore summary statistics and relationships between variables. This helps you better understand the data and make informed decisions"
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[
                  [236, 72, 153],
                  [232, 121, 249],
                ]}
                dotSize={2}
              />
            </Card>
            <Card
              title="Model Selection & Training"
              icon={<AceternityIcon order="STEP 3" />}
              description="Select the AI model and adjust the parameters as needed. Once configured, initiate the model training with a single click"
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-emerald-900"
                colors={[[125, 211, 252]]}
              />
            </Card>
            <Card
              title="Deployment & Make Predictions"
              icon={<AceternityIcon order="STEP 4" />}
              description="Evaluate the trained model by comparing it with the commonly used baseline. Then the Model Hub to manage, review, and deploy models, or make predictions on new datasets"
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[[246, 195, 36]]}
              />
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;

const Card = ({
  title,
  icon,
  description,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border group/canvas-card flex items-center justify-center border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center ">
          {icon}
        </div>
        <h2 className="text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-3xl">
          {title}
        </h2>
        <h2
          className="text-sm text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center"
          style={{ color: "#e4ecff" }}
        >
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <HoverBorderGradient
        containerClassName="rounded-full duration-200"
        as="button"
        className="bg-black text-white font-semibold flex items-center space-x-2 py-4 px-12 shadow-lg shadow-primary/60"
      >
        <span>{order}</span>
      </HoverBorderGradient>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
