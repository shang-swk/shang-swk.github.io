import { Badge } from "@/components/ui/badge";
import { RARITY_LABELS, STATUS_LABELS, VERIFICATION_LABELS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function VerifiedBadge({ status }: { status: string }) {
  const verified = ["verified", "published"].includes(status);
  return (
    <Badge
      className={cn(
        verified && "border-emerald-700/25 bg-emerald-50 text-emerald-800",
        status === "needs_source" && "border-amber-700/25 bg-amber-50 text-amber-800"
      )}
    >
      {VERIFICATION_LABELS[status] ?? status}
    </Badge>
  );
}

export function RarityBadge({ rarity }: { rarity: string }) {
  return <Badge>{RARITY_LABELS[rarity] ?? rarity}</Badge>;
}

export function ReleaseStatusBadge({ status }: { status: string }) {
  return <Badge>{STATUS_LABELS[status] ?? status}</Badge>;
}

export function SourceReliabilityBadge({ score }: { score: number | null }) {
  const label = score == null ? "可信度待评" : `可信度 ${score}`;
  return (
    <Badge className={cn(score != null && score >= 80 && "border-emerald-700/25 text-emerald-800")}>
      {label}
    </Badge>
  );
}
