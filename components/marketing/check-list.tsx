import { Leaf } from "@/components/brand/botanicals";

/** Editorial two-column list with hand-drawn leaf bullets. */
export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-x-12 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="border-border flex items-start gap-3 border-b border-dashed py-4 leading-relaxed"
        >
          <Leaf className="text-sage mt-0.5 size-5 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
