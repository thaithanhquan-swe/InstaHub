import stories from "@/data/stories";
import { notFound } from "next/navigation";
import StoriesClient from "./components/StoriesClient/StoriesClient";

interface StoriesPageProps {
  params: Promise<{
    storyId: string;
  }>;
}

async function StoriesPage({ params }: StoriesPageProps) {
  const { storyId } = await params;
  const parsedStoryId = Number(storyId);

  const storyExists = stories.some((story) => story.id === parsedStoryId);

  if (!storyExists) {
    notFound();
  }

  return <StoriesClient key={parsedStoryId} storyId={parsedStoryId} />;
}

export default StoriesPage;