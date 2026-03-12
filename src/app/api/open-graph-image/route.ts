import { type NextRequest, NextResponse } from "next/server";

const OG_IMAGE_PATTERN =
  /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>|<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["'][^>]*>/i;
const TWITTER_IMAGE_PATTERN =
  /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["'][^>]*>|<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["'][^>]*>/i;

function extractImageUrl(html: string) {
  const ogMatch = html.match(OG_IMAGE_PATTERN);

  if (ogMatch) {
    return ogMatch[1] ?? ogMatch[2] ?? null;
  }

  const twitterMatch = html.match(TWITTER_IMAGE_PATTERN);
  return twitterMatch ? (twitterMatch[1] ?? twitterMatch[2] ?? null) : null;
}

export async function GET(request: NextRequest) {
  const target = request.nextUrl.searchParams.get("url");

  if (!target) {
    return NextResponse.json(
      { error: "Missing url parameter" },
      { status: 400 },
    );
  }

  let parsedUrl: URL;

  try {
    parsedUrl = new URL(target);
  } catch {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  if (!["http:", "https:"].includes(parsedUrl.protocol)) {
    return NextResponse.json(
      { error: "Unsupported protocol" },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(parsedUrl, {
      headers: {
        "user-agent":
          "Mozilla/5.0 (compatible; EliesSiteBot/1.0; +https://elies.site)",
      },
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch target page" },
        { status: 502 },
      );
    }

    const html = await response.text();
    const imageUrl = extractImageUrl(html);

    if (!imageUrl) {
      return NextResponse.json(
        { error: "No open graph image found" },
        { status: 404 },
      );
    }

    const resolvedImageUrl = new URL(imageUrl, parsedUrl).toString();

    return NextResponse.json({
      imageUrl: resolvedImageUrl,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to resolve open graph image" },
      { status: 500 },
    );
  }
}
