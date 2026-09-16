/**
 * Reusable server component for injecting JSON-LD structured data.
 * Data must come from trusted sources — not user-generated content.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
