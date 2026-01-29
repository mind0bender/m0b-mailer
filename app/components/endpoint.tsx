import { ArrowLeft, ArrowRight, Code2, CodeSquare } from "lucide-react";

export interface EndpointProps {
  method?: "GET" | "POST";
  path?: string;
  desc: string;
  reqBody?: object;
  resBody?: object | string;
  code?: string;
}

export default function Endpoint({
  method,
  path,
  desc,
  reqBody,
  resBody,
  code,
}: EndpointProps) {
  return (
    <div className="w-full rounded-md text-sm border border-zinc-400 dark:border-zinc-800">
      <div className="w-full flex flex-col gap-2 rounded-t-md text-sm bg-zinc-200 dark:bg-zinc-950 px-4 py-4 border-b border-b-zinc-400 dark:border-b-zinc-800">
        <div className="flex items-center gap-4">
          {method ? (
            <span
              className={`rounded-full text-white dark:text-black font-semibold px-2 py-1 ${method === "GET" ? "bg-orange-500 dark:bg-orange-400" : "bg-violet-500 dark:bg-violet-400"}`}
            >
              {method}
            </span>
          ) : (
            <div className="text-lg text-blue-500 dark:text-violet-400 flex justify-center items-center gap-2">
              <CodeSquare />
              Code
            </div>
          )}
          <span className="font-mono">{path}</span>
        </div>
        <div className="text-zinc-800 dark:text-zinc-300">{desc}</div>
      </div>
      <div className="w-full rounded-b-md px-6 py-6 text-sm">
        {reqBody && (
          <div>
            <span className="flex items-center gap-2 py-2">
              <ArrowRight
                className="text-orange-500 dark:text-orange-400"
                size={12}
              />{" "}
              Request Body
            </span>
            <div className="px-2">
              <pre className="text-sm px-4 py-2 rounded-md bg-zinc-200 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 whitespace-pre-wrap">
                {JSON.stringify(reqBody, null, 2)}
              </pre>
            </div>
          </div>
        )}
        {resBody && (
          <div>
            <span className="flex items-center gap-2 py-2">
              <ArrowLeft
                className="text-violet-500 dark:text-violet-400"
                size={12}
              />{" "}
              Response Body
            </span>
            <div className="px-2">
              <pre className="text-sm px-4 py-2 rounded-md bg-zinc-200 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 whitespace-pre-wrap">
                {JSON.stringify(resBody, null, 2)}
              </pre>
            </div>
          </div>
        )}
        {code && (
          <div className="px-2">
            <pre className="text-sm px-4 py-2 rounded-md bg-zinc-200 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 whitespace-pre-wrap">
              {code}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
