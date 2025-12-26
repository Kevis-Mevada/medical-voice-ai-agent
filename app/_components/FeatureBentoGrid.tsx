import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function FeatureBentoGrid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

/* =========================
   IMAGE HEADER
========================= */

const Skeleton = ({ image }: { image: string }) => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
    <img
      src={image}
      alt="Medical AI feature"
      loading="lazy"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
  </div>
);

/* =========================
   MEDICAL AI FEATURES
========================= */

const items = [
  {
    title: "Voice-Based Symptom Collection",
    description:
      "Patients describe symptoms naturally using voice, eliminating long forms and manual input.",
    header: (
      <Skeleton image="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/12/voice-AI-agent-1680x1120-1.jpg?w=1024" />
    ),
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI Symptom Understanding",
    description:
      "AI analyzes patient speech, extracts key symptoms, and understands medical context safely.",
    header: (
      <Skeleton image="https://f5b623aa.delivery.rocketcdn.me/wp-content/uploads/2022/10/Blog_AI-Based-Voice-Assistants-in-HealthCare.jpg" />
    ),
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Smart Follow-Up Questions",
    description:
      "The agent asks relevant follow-up questions to better assess symptom severity.",
    header: (
      <Skeleton image="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1200&q=80" />
    ),
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Secure & Responsible Medical AI",
    description:
      "Privacy-first design with medical disclaimers and escalation to professionals when required.",
    header: (
      <Skeleton image="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80" />
    ),
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
