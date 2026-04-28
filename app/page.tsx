"use client";

import Image from "next/image";
import type { IconType } from "react-icons";
import { motion, type Variants } from "framer-motion";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHono,
  SiDrizzle,
  SiPostgresql,
  SiSnowflake,
  SiClickhouse,
  SiLangchain,
  SiLinux,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import { FaAws, FaPalette, FaBrain, FaLock, FaRobot } from "react-icons/fa";
import NL from "country-flag-icons/react/3x2/NL";
import GB from "country-flag-icons/react/3x2/GB";

const experience = [
  {
    period: "2025 - present",
    title: "Lazentis",
    description:
      "Building a new European sovereign cloud, on our own infrastructure and code.",
  },
  {
    period: "2022 - present",
    title: "Freelance",
    description: "From custom CRM and ERP systems to new websites for clients.",
  },
];

const education = [
  { period: "2025 - 2026", title: "Start-up School Eindhoven" },
  {
    period: "2024 - 2025",
    title: "Sint-Lucas - Design, Media & Technology",
  },
];

const projects = [
  {
    title: "clentt.com",
    description:
      "AI workspace for B2B sales teams - prospecting, outreach and CRM, unified.",
    href: "https://clentt.com",
  },
  {
    title: "lazentis.com",
    description:
      "European cloud provider with S3-compatible object storage and DNS, built around data sovereignty.",
    href: "https://lazentis.com",
  },
];

const skills: { name: string; icon: IconType }[] = [
  { name: "UI/UX", icon: SiFigma },
  { name: "Graphic design", icon: FaPalette },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Hono", icon: SiHono },
  { name: "BetterAuth", icon: FaLock },
  { name: "Drizzle", icon: SiDrizzle },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Snowflake", icon: SiSnowflake },
  { name: "ClickHouse", icon: SiClickhouse },
  { name: "LangChain", icon: SiLangchain },
  { name: "Big data & ML/AI", icon: FaBrain },
  { name: "Linux", icon: SiLinux },
  { name: "AWS", icon: FaAws },
  { name: "GitHub", icon: SiGithub },
];

const contact = [
  {
    label: "hello@tylerhoogerwerf.com",
    href: "mailto:hello@tylerhoogerwerf.com",
  },
  { label: "Tilburg & Rotterdam, NL", href: null },
];

const ease = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

const languages = [
  {
    icon: <NL title="Netherlands" className="h-3 w-auto rounded-[1px]" />,
    label: "Dutch (native)",
  },
  {
    icon: <GB title="United Kingdom" className="h-3 w-auto rounded-[1px]" />,
    label: "English (fluent)",
  },
  {
    icon: <FaRobot className="h-[14px] w-[14px]" />,
    label: "AI prompting (fluent)",
  },
];

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section variants={item} className="mt-20">
      <h2 className="text-xs uppercase tracking-widest text-[color:var(--muted-foreground)] mb-6">
        {label}
      </h2>
      {children}
    </motion.section>
  );
}

function Row({
  period,
  title,
  description,
  href,
}: {
  period?: string;
  title: string;
  description?: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-baseline gap-6 py-3">
      {period && (
        <span className="w-28 shrink-0 text-sm tabular-nums text-[color:var(--muted-foreground)]">
          {period}
        </span>
      )}
      <div className="flex-1">
        <span className="block">{title}</span>
        {description && (
          <span className="block text-sm text-[color:var(--muted-foreground)] mt-0.5">
            {description}
          </span>
        )}
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-60">
      {inner}
    </a>
  ) : (
    inner
  );
}

export default function Home() {
  return (
    <>
      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex-1 mx-auto w-full max-w-2xl px-6 py-32"
      >
        <motion.header variants={item}>
          <h1 className="text-base font-medium">Tyler Hoogerwerf</h1>
          <p className="mt-8 leading-relaxed max-w-md text-[color:var(--muted-foreground)]">
            Passionate about building products with real impact and reach, and
            solving complex problems through code.
          </p>
        </motion.header>

        <Section label="Work">
          <ul>
            {experience.map((e) => (
              <li key={e.title}>
                <Row {...e} />
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Education">
          <ul>
            {education.map((e) => (
              <li key={e.title}>
                <Row {...e} />
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Projects">
          <ul>
            {projects.map((p) => (
              <li key={p.title}>
                <a
                  href={p.href}
                  className="group flex items-baseline gap-6 py-3 hover:opacity-60"
                >
                  <div className="flex-1">
                    <span className="block">{p.title}</span>
                    <span className="block text-sm text-[color:var(--muted-foreground)] mt-0.5">
                      {p.description}
                    </span>
                  </div>
                  <span
                    aria-hidden
                    className="text-sm text-[color:var(--muted-foreground)]"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Skills">
          <ul className="flex flex-wrap gap-x-5 gap-y-3">
            {skills.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className="flex items-center gap-2 text-sm text-[color:var(--muted-foreground)]"
              >
                <Icon
                  aria-hidden
                  className="h-[14px] w-[14px] text-[color:var(--foreground)]"
                />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Languages">
          <ul className="space-y-1.5 text-[color:var(--muted-foreground)]">
            {languages.map((l) => (
              <li key={l.label} className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="inline-flex w-5 items-center justify-center"
                >
                  {l.icon}
                </span>
                <span>{l.label}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Contact">
          <ul className="space-y-1">
            {contact.map((c) => (
              <li key={c.label}>
                {c.href ? (
                  <a href={c.href} className="hover:opacity-60">
                    {c.label}
                  </a>
                ) : (
                  <span className="text-[color:var(--muted-foreground)]">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Section>
      </motion.main>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease }}
        className="relative w-full h-[70vh] -mt-48 pointer-events-none"
      >
        <Image
          src="/spaaaace.jpg"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--background)] from-0% via-[color:var(--background)]/40 via-40% to-transparent" />
      </motion.div>
    </>
  );
}
