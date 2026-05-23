import {ReactNode} from 'react';

export interface FeatureCardProps {
	icon: ReactNode;
	title: string;
	desc: string;
}

export default function FeatureCard({icon, title, desc}: FeatureCardProps) {
	return (
		<div className="group flex-1 h-full flex flex-col gap-2 p-4 rounded-md border bg-zinc-100 dark:bg-zinc-950 hover:border-zinc-500 hover:dark:border-zinc-700 border-zinc-400 dark:border-zinc-800 max-w-xs duration-200 cursor-default">
			<div className="p-1.5 w-fit rounded-md border border-zinc-400 dark:border-zinc-800 bg-white dark:bg-black group-hover:bg-white group-hover:dark:bg-zinc-800 group-hover:border-zinc-500 group-hover:dark:border-r-zinc-500 duration-200">
				<div className="group-hover:scale-110 duration-500 group-hover:rotate-y-360">
					{icon}
				</div>
			</div>
			<h3 className="text-base font-bold">{title}</h3>
			<p className="text-sm text-zinc-700 dark:text-zinc-400">{desc}</p>
		</div>
	);
}
