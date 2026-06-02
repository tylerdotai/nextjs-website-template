export function YouTubeEmbed({
  id,
  title,
}: {
  id: string;
  title?: string;
}) {
  if (!/^[a-zA-Z0-9_-]{11}$/.test(id)) {
    return (
      <div className="my-6 not-prose p-4 border border-red-500/30 bg-red-500/10 rounded-lg text-sm text-red-800 dark:text-red-200">
        Invalid YouTube video ID. Expected 11 characters from the video URL after <code>v=</code>.
      </div>
    );
  }

  return (
    <div className="my-6 not-prose aspect-video w-full overflow-hidden rounded-lg border border-border">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title ?? 'YouTube video'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
        loading="lazy"
      />
    </div>
  );
}
