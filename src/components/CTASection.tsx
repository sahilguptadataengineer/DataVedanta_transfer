import { Button } from "./Button";
import type { FeatureIconName } from "./icons";
import { CTACard } from "./CTACard";
import { Section } from "./Section";

type Link = { label: string; href: string };
type Props = { title: string; highlight?: string; description?: string; icon?: FeatureIconName; primary: Link; secondary?: Link };

// Closing call-to-action used at the bottom of inner pages.
export function CTASection({ title, highlight, description, icon, primary, secondary }: Props) {
  return (
    <Section>
      <CTACard title={title} highlight={highlight} description={description} icon={icon}>
        <Button href={primary.href}>{primary.label}</Button>
        {secondary && (
          <Button href={secondary.href} variant="outline">
            {secondary.label}
          </Button>
        )}
      </CTACard>
    </Section>
  );
}
