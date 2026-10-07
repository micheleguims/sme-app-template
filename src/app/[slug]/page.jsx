import { notFound } from "next/navigation";
import ChapterContent from "@/components/ChapterContent";
import { chapters, getChapter } from "@/content/manual";

export function generateStaticParams() {
  return chapters.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  return chapter ? { title: chapter.label, description: chapter.description } : {};
}

export default async function ChapterPage({ params }) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();
  return <ChapterContent chapter={chapter} />;
}
