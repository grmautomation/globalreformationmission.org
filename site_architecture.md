# Global Reformation Mission Website Architecture

## Strategic framing

The website will translate the existing brand guide into a complete public-facing mission website. The experience should begin with theological conviction, then move visitors into clear practical pathways: worship, visit, teachings, mission, partnership, giving, and streaming. Because the current request is for a mockup, the content will avoid inventing unverified commitments, schedules, staff details, financial claims, or ministry programs. Any section requiring future confirmation will be written as an invitation or placeholder pathway rather than a factual claim.

> Chosen design philosophy: **Liturgical Editorial Modernism with cartographic mission cues**. The interface will be formal, spacious, scripture-centered, restrained, and oriented around mission movement.

## Primary navigation

| Route | Page name | Purpose | Key actions |
|---|---|---|---|
| `/` | Home | Establish conviction, mission, worship invitation, and pathways | Watch teachings, plan a visit, partner |
| `/visit` | Visit | Reduce first-time visitor uncertainty and present local worship pathway | Get directions, ask a question |
| `/about` | About | Explain mission identity and theological posture without overclaiming details | Read mission pillars, connect |
| `/mission` | Mission | Present the church-planting and strengthening pathway | Pray, give, go, send |
| `/teachings` | Teachings | Surface teaching categories and YouTube-linked sermons | Watch latest, browse streaming page |
| `/stream` | Stream | Dedicated video hub using public YouTube channel and selected embeds | Watch embedded teachings, open channel |
| `/give` | Give | Present giving as a partnership pathway; no payment processing in mockup | Contact for giving details, partner |
| `/connect` | Connect | Provide clear contact/social links and engagement pathways | Open YouTube, open Facebook |

## Content principles

The site will use verified language from the style guide and the public YouTube page where appropriate. It will not fabricate ministry schedules beyond what the style guide visibly showed as a sample card: **Sundays at 15:00** and **Lewiston, ME, USA**. These may be displayed as “shown in the current style system” or used cautiously in the visit block if framed as an item to confirm. All external links will point to the user-provided YouTube and Facebook pages.

## Streaming page model

| Element | Implementation | Notes |
|---|---|---|
| Featured video | YouTube iframe embed using a public video ID from the visible channel page | No claim that this is live unless the channel confirms it |
| Recent teachings | Three visible public videos from the channel | Uses public title, duration, and video ID where available |
| Channel actions | Buttons to YouTube channel and Facebook page | User-provided links |
| Streaming disclaimer | “For the latest uploads and live availability, open the YouTube channel.” | Avoids overclaiming dynamic API access |

## Visual system

| System area | Decision |
|---|---|
| Backgrounds | Reformation Navy and Midnight Mission for authority sections; Parchment White for reading sections |
| Accents | Covenant Gold for chapter markers, rules, and theological emphasis; Mission Blue for action states |
| Typography | Cormorant Garamond display; Source Sans 3 body and UI |
| Motifs | Faint map grids, coordinate lines, gold rules, scripture cards, editorial page numbers |
| Motion | Measured fades, rule extensions, low-intensity card lift, no playful bounce |

## Implementation constraints

The project remains frontend-only. YouTube embeds will use public iframe URLs and links. Giving will be a mockup pathway rather than payment processing. Any future donation checkout would require a confirmed giving platform or a Stripe-enabled upgrade.
