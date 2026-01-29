import { CheckCircle, Code, TriangleAlert } from "lucide-react";
import FeatureCard from "./feature-card";

export default function Hero() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 sm:gap-8 md:gap-16">
      <div className="text-center flex flex-col justify-center items-center gap-2">
        <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span>Send emails reliably,</span>{" "}
          <span className="text-violet-500 dark:text-violet-400 text-nowrap">
            at scale
          </span>
        </h2>
        <p className="sm:text-lg md:text-xl text-zinc-700 dark:text-zinc-400 max-w-sm sm:max-w-2xl">
          A production-ready microservice for email delivery with built-in Dead
          Letter Queue support to handle failures gracefully.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-12">
          <FeatureCard
            icon={
              <CheckCircle
                className="text-purple-500 dark:text-purple-400"
                size={16}
              />
            }
            title={"Async Processing"}
            desc="Queue-based delivery ensures non-blocking requests"
          />
          <FeatureCard
            icon={
              <TriangleAlert
                className="text-orange-500 dark:text-orange-400"
                size={16}
              />
            }
            title={"DLQ support"}
            desc="Failed emails are logged for Inspection and retry"
          />
          <FeatureCard
            icon={
              <Code className="text-blue-500 dark:text-blue-400" size={16} />
            }
            title={"Simple API"}
            desc="Clean REST endpoints with JSON request/response"
          />
        </div>
      </div>
    </div>
  );
}
