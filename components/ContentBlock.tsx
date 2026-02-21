import { clsx } from "clsx";

interface ContentBlockProps {
    content: string;
    className?: string;
}

export default function ContentBlock({ content, className }: ContentBlockProps) {
    if (!content) return null;

    return (
        <div
            className={clsx(
                "prose prose-invert max-w-none",
                "prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white",
                "prose-p:text-gray-400 prose-p:leading-relaxed prose-p:font-light",
                "prose-strong:text-white prose-strong:font-semibold",
                "prose-a:text-accent-primary prose-a:no-underline prose-a:border-b prose-a:border-accent-primary/30 hover:prose-a:border-accent-primary hover:prose-a:text-accent-primary/80 prose-a:transition-all",
                "prose-blockquote:border-l-accent-primary prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic",
                "prose-li:text-gray-400 marker:prose-li:text-accent-primary",
                className
            )}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}
