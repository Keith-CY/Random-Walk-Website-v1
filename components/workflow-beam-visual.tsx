"use client";

import {
  Circuitry,
  Cpu,
  Database,
  Handshake,
  Package,
  ShieldCheck,
  type Icon
} from "@phosphor-icons/react";
import { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";

type WorkflowBeamVisualProps = {
  variant: "product" | "service";
};

const nodePatterns = {
  product: ["runtime", "inference", "privacy"],
  service: ["dataset", "package", "handoff"]
} as const;

type NodePattern = (typeof nodePatterns)[keyof typeof nodePatterns][number];

const nodeIcons = {
  dataset: Database,
  handoff: Handshake,
  inference: Circuitry,
  package: Package,
  privacy: ShieldCheck,
  runtime: Cpu
} satisfies Record<NodePattern, Icon>;

export function WorkflowBeamVisual({ variant }: WorkflowBeamVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);
  const [firstPattern, secondPattern, thirdPattern] = nodePatterns[variant];

  return (
    <div className={`rw-beam-canvas rw-beam-canvas-${variant}`} ref={containerRef}>
      <div className="rw-beam-mesh" aria-hidden="true" />
      <BeamNode className="rw-beam-node-start" pattern={firstPattern} ref={firstRef} />
      <BeamNode className="rw-beam-node-core" pattern={secondPattern} ref={secondRef} />
      <BeamNode className="rw-beam-node-end" pattern={thirdPattern} ref={thirdRef} />
      <AnimatedBeam
        containerRef={containerRef}
        curvature={variant === "product" ? -18 : 18}
        delay={0.05}
        duration={3.4}
        fromRef={firstRef}
        gradientStartColor="#ffaa40"
        gradientStopColor="#9c40ff"
        pathColor="rgba(5, 5, 5, 0.26)"
        pathWidth={2.4}
        repeatDelay={0.15}
        toRef={secondRef}
      />
      <AnimatedBeam
        containerRef={containerRef}
        curvature={variant === "product" ? 18 : -18}
        delay={0.7}
        duration={3.4}
        fromRef={secondRef}
        gradientStartColor="#9c40ff"
        gradientStopColor="#40ffaa"
        pathColor="rgba(5, 5, 5, 0.26)"
        pathWidth={2.4}
        repeatDelay={0.15}
        toRef={thirdRef}
      />
    </div>
  );
}

const BeamNode = forwardRef<
  HTMLDivElement,
  { className?: string; pattern: NodePattern }
>(function BeamNode({ className, pattern }, ref) {
  const NodeIcon = nodeIcons[pattern];

  return (
    <div className={["rw-beam-node", `rw-beam-node-${pattern}`, className].filter(Boolean).join(" ")} ref={ref}>
      <div className="rw-beam-node-surface">
        <NodeIcon aria-hidden="true" className="rw-beam-node-icon" weight="duotone" />
      </div>
    </div>
  );
});
