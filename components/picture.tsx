import Image from "next/image";

export function Picture({
  className = "",
  src,
  alt = "",
}: {
  className?: string;
  src?: string;
  alt?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-paper-2 ring-1 ring-ink/6 ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      ) : null}
    </div>
  );
}
