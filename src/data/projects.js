/* ==========================================================================
   PROJECT DATA
   Edit this array to add, remove, or update projects. Every page (Home,
   Projects, Archive, and the project detail page) reads from this file, so
   this is the only place you need to touch to update content site-wide.

   Fields:
     slug      - unique, url-safe id, used in the /projects/:slug route
     title     - project name
     label     - short code shown on the generated cover graphic (<=6 chars)
     status    - "completed" | "in-progress" | "planned"
     date      - short human-readable date/period
     tags      - array of strings, used for filtering in the Archive
     featured  - true/false, featured projects can be surfaced on Home
     summary   - one to two sentence description (used on cards)
     gallerySeeds - array of {seed, caption} used to generate placeholder
                    images. Swap svgPlaceholder(...) for a real <img src>
                    once you have real screenshots/photos.
     content   - markdown string rendered on the project detail page
   ========================================================================== */

export const PROJECTS = [
  {
    slug: "rfid-security-system",
    title: "RFID Authentication & Proximity Security System",
    label: "RFID",
    status: "completed",
    date: "Spring 2026",
    tags: ["Embedded Systems", "C", "AVR128DB48", "SPI", "I2C"],
    featured: true,
    summary: "A four-state FSM access-control system on the AVR128DB48, combining RFID authentication with PIR-based proximity sensing.",
    gallerySeeds: [
      { seed: "rfid-1", caption: "Breadboard prototype: MFRC522 reader wired over SPI" },
      { seed: "rfid-2", caption: "Four-state FSM: IDLE → SCAN → AUTH → ALERT" },
      { seed: "rfid-3", caption: "I2C LCD showing live authentication status" }
    ],
    content: `
## Overview

Final project for **ECE 4411 (Embedded Systems)**, built around the AVR128DB48 microcontroller. The system authenticates RFID tags and layers in proximity sensing, so it reacts differently depending on whether someone is simply nearby versus actively presenting a credential.

## Hardware

- AVR128DB48 microcontroller as the core
- MFRC522 RFID reader over **SPI**
- PIR motion sensor for proximity detection
- I2C-connected LCD for live status output
- PWM-driven buzzer for audible feedback
- RGB LEDs for at-a-glance state indication

## Firmware: the FSM

The whole system is driven by a four-state finite state machine:

1. **Idle** — no motion detected, system is dormant
2. **Proximity detected** — PIR trips, system wakes and arms the reader
3. **Scanning** — waiting for an RFID tag to be presented
4. **Authenticated / Denied** — tag checked against the allow-list, LCD and LED/buzzer respond accordingly

Keeping the logic in an explicit FSM (rather than a tangle of flags) made the timing between PIR wake-up, RFID polling, and feedback outputs much easier to reason about and debug on real hardware.

## Result

A working prototype that correctly distinguishes "someone walked by" from "someone tried to badge in," with LCD + buzzer + RGB feedback tuned so the system's current state is always obvious without needing a serial monitor open.
`
  },
  {
    slug: "homelab-nas",
    title: "Homelab NAS + Dockerized Game Servers",
    label: "NAS",
    status: "in-progress",
    date: "Ongoing",
    tags: ["Homelab", "Docker", "Linux", "Networking"],
    featured: true,
    summary: "Self-hosted NAS on an Intel i7-6700 running OpenMediaVault, with Dockerized game servers and remote access still being tuned.",
    gallerySeeds: [
      { seed: "nas-1", caption: "OpenMediaVault dashboard on the i7-6700 box" },
      { seed: "nas-2", caption: "docker-ce (not docker.io) pulled from Docker's official repo" },
      { seed: "nas-3", caption: "itzg/minecraft-bedrock-server container, allowlist set via docker exec" }
    ],
    content: `
## Overview

A home NAS built on an Intel i7-6700 with ~8GB RAM, running **OpenMediaVault (OMV)** as the base OS/management layer, with Docker layered on top for self-hosted services.

## Setup notes

- Installed **docker-ce** from Docker's official Debian repo — deliberately avoided the \`docker.io\` package, which tends to lag behind on OMV/Debian.
- First container deployed: \`itzg/minecraft-bedrock-server\`, a Bedrock-edition Minecraft server.
- Player allowlisting handled directly via \`docker exec\` into the running container rather than editing config files on the host.

## Current blocker: external access

Port forwarding isn't possible right now due to router access limitations (not my router to configure). **Tailscale** is the leading candidate for solving remote access without needing to touch the router at all — next step is standing that up.

## Where this is headed

This box is also the planned home for a cross-platform Minecraft Java server (see that project) once the networking layer is sorted out.
`
  },
  {
    slug: "minecraft-cross-platform",
    title: "Cross-Platform Minecraft Server (Java + Bedrock + Switch)",
    label: "MC/X",
    status: "planned",
    date: "Planned",
    tags: ["Homelab", "Docker", "Minecraft", "Networking"],
    featured: false,
    summary: "A Java-edition server bridged to Bedrock and Switch players via Geyser/Floodgate, with proximity voice chat layered on top.",
    gallerySeeds: [
      { seed: "geyser-1", caption: "Planned topology: Java core + Geyser/Floodgate bridge" }
    ],
    content: `
## The plan

Run a standard Minecraft **Java** server as the core, and use **Geyser + Floodgate** to let Bedrock and Nintendo Switch players connect to it directly — no separate Bedrock-only world needed.

## Add-ons

- **Simple Voice Chat** for proximity-based voice audio in-game
- Runs alongside the existing Bedrock server on the homelab NAS box

## Ports required

| Port | Protocol | Purpose |
|---|---|---|
| 25565 | TCP | Java edition |
| 19132 | UDP | Bedrock/Geyser |
| 24454 | UDP | Simple Voice Chat |

## Status

Blocked on the same networking question as the NAS project — waiting on a clean way to expose these ports (Tailscale vs. proper port forwarding) before standing this up.
`
  },
  {
    slug: "tron-linux-rice",
    title: "TRON-Inspired Linux Desktop Rice",
    label: "RICE",
    status: "in-progress",
    date: "Ongoing",
    tags: ["Linux", "Desktop Customization", "Lua", "Design"],
    featured: true,
    summary: "A neon-cyan, TRON/cyberpunk desktop built on Linux Mint 22.3 with Cinnamon, including a live Cava audio visualizer rendered in Conky.",
    gallerySeeds: [
      { seed: "rice-1", caption: "Conky HUD overlay, neon cyan on black" },
      { seed: "rice-2", caption: "Cava audio visualizer, Lua/Cairo rendering" },
      { seed: "rice-3", caption: "Custom Fastfetch config on terminal launch" }
    ],
    content: `
## Aesthetic direction

A TRON/cyberpunk desktop rice for **Linux Mint 22.3** running Cinnamon — neon cyan accents on near-black, sharp edges over soft ones.

## What's built so far

- A working **Cava** audio visualizer, hand-rendered with **Lua + Cairo** inside Conky, rather than relying on Cava's built-in terminal output
- A Conky HUD overlay for system stats in the same visual language
- A customized **Fastfetch** config so opening a terminal reinforces the theme instead of breaking it

## Still to do

- GTK theme pass to bring window chrome fully in line with the Conky/Cava look
- Font finalization (Orbitron-style display face for headers, something more legible for body text)
`
  },
  {
    slug: "sharks-vs-minnows",
    title: "Sharks vs. Minnows (Godot 4)",
    label: "S/M",
    status: "in-progress",
    date: "Ongoing",
    tags: ["Godot", "GDScript", "Game Dev"],
    featured: true,
    summary: "A 2D Sharks vs. Minnows game built in Godot 4, first project learning the engine, built out milestone by milestone.",
    gallerySeeds: [
      { seed: "sm-1", caption: "Scene setup: shark and minnow CharacterBody2D nodes" },
      { seed: "sm-2", caption: "Basic movement working for both roles" }
    ],
    content: `
## Why this project

A first project in **Godot 4**, chosen specifically to learn the engine hands-on rather than through tutorials alone. Sharks vs. Minnows is simple enough to finish, but has enough moving parts (movement, roles, win conditions) to actually exercise the engine.

## Milestone roadmap

- [x] **Milestone 1** — Scene setup
- [x] **Milestone 2** — \`CharacterBody2D\` movement for both shark and minnow roles
- [ ] **Milestone 3** — Tagging / catch mechanic
- [ ] **Milestone 4** — Round timer and win condition
- [ ] **Milestone 5** — Basic UI and polish pass

## Notes

Working through this milestone-by-milestone rather than building everything at once, so each piece can actually be tested in isolation before moving on.
`
  },
  {
    slug: "open-world-survival",
    title: "2D Open-World Multiplayer Survival Game",
    label: "SURV",
    status: "planned",
    date: "Long-term",
    tags: ["Godot", "GDScript", "Game Dev", "Multiplayer"],
    featured: false,
    summary: "A longer-term, Rust-inspired 2D open-world multiplayer survival game, planned for Godot 4 once the fundamentals are solid.",
    gallerySeeds: [
      { seed: "surv-1", caption: "Early concept notes for a Rust-inspired survival loop" }
    ],
    content: `
## The idea

A long-term project: a 2D, open-world, **multiplayer** survival game inspired by *Rust* — base building, resource scarcity, and player-vs-player risk, but in a 2D top-down or side-view space instead of Rust's 3D world.

## Why wait

Godot's multiplayer/networking model, and 2D open-world streaming/chunking, are both nontrivial. Sharks vs. Minnows exists partly to build up enough Godot fluency before taking this on for real.

## Status

Planned. No code yet — this entry exists as a marker for the roadmap.
`
  }
];
