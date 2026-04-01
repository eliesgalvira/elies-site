import Image from "next/image";
import { OpenGraphImage } from "@/components/open-graph-image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="w-full max-w-5xl row-start-2">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">Elies</h1>
          <p className="text-sm text-foreground/70">Selected projects</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* GitHub */}
          <a
            href="https://github.com/eliesgalvira"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="rounded-lg overflow-hidden bg-foreground/[0.06] transition-transform duration-300 ease-out group-hover:scale-[1.05]">
              <AspectRatio ratio={16 / 9} className="rounded-lg">
                {/* Light logo */}
                <Image
                  src="/github.svg"
                  alt="GitHub profile"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-full w-full rounded-lg object-contain p-8 dark:hidden"
                />
                {/* Dark logo */}
                <Image
                  src="/github-dark.svg"
                  alt="GitHub profile"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-full w-full rounded-lg object-contain p-8 hidden dark:block"
                />
              </AspectRatio>
            </div>
            <div className="mt-3">
              <h3 className="font-medium">GitHub</h3>
              <p className="text-sm text-foreground/70">
                github.com/eliesgalvira
              </p>
            </div>
          </a>

          {/* Signal Transformer Tool */}
          <a
            href="https://signaltransform.net"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="rounded-lg overflow-hidden bg-foreground/[0.06] transition-transform duration-300 ease-out group-hover:scale-[1.05]">
              <AspectRatio ratio={16 / 9} className="rounded-lg">
                <Image
                  src="/cropped-sigtransform.webp"
                  alt="Signal Transformer Tool"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-full w-full rounded-lg object-cover"
                  priority
                />
              </AspectRatio>
            </div>
            <div className="mt-3">
              <h3 className="font-medium">Signal Transformer Tool</h3>
              <p className="text-sm text-foreground/70">signaltransform.net</p>
            </div>
          </a>

          {/* HP-35 Calculator */}
          <a
            href="https://hp-35.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="rounded-lg overflow-hidden bg-foreground/[0.06] transition-transform duration-300 ease-out group-hover:scale-[1.05]">
              <AspectRatio ratio={16 / 9} className="rounded-lg">
                <Image
                  src="/hp-35.webp"
                  alt="HP-35 Calculator"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-full w-full rounded-lg object-cover"
                />
              </AspectRatio>
            </div>
            <div className="mt-3">
              <h3 className="font-medium">HP-35 Calculator</h3>
              <p className="text-sm text-foreground/70">hp-35.com</p>
            </div>
          </a>

          {/* File Sharing */}
          <a
            href="https://file-sharing-lilac.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="rounded-lg overflow-hidden bg-foreground/[0.06] transition-transform duration-300 ease-out group-hover:scale-[1.05]">
              <AspectRatio ratio={16 / 9} className="rounded-lg">
                <OpenGraphImage
                  pageUrl="https://file-sharing-lilac.vercel.app"
                  cacheKey="file-sharing"
                  alt="File sharing project"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-full w-full rounded-lg object-cover"
                />
              </AspectRatio>
            </div>
            <div className="mt-3">
              <h3 className="font-medium">File Sharing</h3>
              <p className="text-sm text-foreground/70">
                file-sharing-lilac.vercel.app
              </p>
            </div>
          </a>

          {/* Online Clipboard */}
          <a
            href="https://clipboardbox.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="rounded-lg overflow-hidden bg-foreground/[0.06] transition-transform duration-300 ease-out group-hover:scale-[1.05]">
              <AspectRatio ratio={16 / 9} className="rounded-lg">
                <Image
                  src="/clipboard-box.png"
                  alt="Online Clipboard"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-full w-full rounded-lg object-cover"
                />
              </AspectRatio>
            </div>
            <div className="mt-3">
              <h3 className="font-medium">Online Clipboard</h3>
              <p className="text-sm text-foreground/70">
                clipboardbox.com
              </p>
            </div>
          </a>

          {/* AI Product Designer */}
          <a
            href="https://github.com/eliesgalvira/ai-product-chat"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="rounded-lg overflow-hidden bg-foreground/[0.06] transition-transform duration-300 ease-out group-hover:scale-[1.05]">
              <AspectRatio ratio={16 / 9} className="rounded-lg">
                <Image
                  src="/ai-product-chat.png"
                  alt="AI Product Designer"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-full w-full rounded-lg object-cover"
                />
              </AspectRatio>
            </div>
            <div className="mt-3">
              <h3 className="font-medium">AI Product Designer</h3>
              <p className="text-sm text-foreground/70">
                github.com/eliesgalvira/ai-product-chat
              </p>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}
