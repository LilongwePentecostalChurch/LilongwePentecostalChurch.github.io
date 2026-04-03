DISCOVER MORE SECTION
Place this section directly after the Hero section and before the About section.
This section is a full width cinematic horizontal sliding carousel — exactly like the Elevation Church website discovery section. It is NOT a gallery grid. It is NOT a tab bar with photos below. It is a single full width card carousel where each card is a large immersive cinematic panel that slides left and right.

OVERALL CONTAINER
Full width. Height 480px on desktop, 360px on tablet, 280px on mobile. No padding on left or right — the carousel bleeds edge to edge. Background is hidden behind the cards. Overflow hidden so only the active cards are visible.
The carousel shows 1 full card in center and partial glimpses of the previous card on the left edge and the next card on the right edge — exactly like Elevation Church. The partial cards on the edges are visible at about 60px wide, slightly darkened, hinting that the carousel can be scrolled. This creates depth and invites the user to explore.

EACH CAROUSEL CARD
Each card is a large cinematic panel. Full height of the container. Width fills the center of the screen with partial cards visible either side.
Card background: a full bleed atmospheric photograph of an LPC moment — worship, prayer, Bible study, outreach, youth, events. The photo fills the entire card. On top of the photo: a dark gradient overlay — transparent at the top right fading to dark maroon at the bottom left — exactly like Elevation Church. This overlay is at 60% opacity making the photo atmospheric and moody while keeping it visible and cinematic.
On top of the overlay — bottom left corner of each card — bold content block:
Small Montserrat Bold white label in all caps with letter spacing: the category name such as "LISTEN TO OUR PODCAST" or "WATCH LIVE" or "JOIN BIBLE STUDY" or "YOUTH MINISTRY" or "WOMEN OF LPC" — this is the eyebrow label.
Below the label: TAN-BUSTER Bold white heading, large, two lines maximum: the card title such as "GROWING STRONGER IN THE WORD" or "EXPERIENCE LIVE WORSHIP" or "STRONGER IN PRAYER" — bold, impactful, cinematic.
Below the heading: Signature script white subtitle in smaller size: a short one line description.
Below the subtitle: a small pill CTA button in dark semi-transparent background with white border and white Montserrat Bold text — "Listen Now" or "Watch Now" or "Join Us" or "Learn More" — with a small right arrow icon. On hover the button fills orange #E8821A and the border brightens.
All content in the bottom left block has a subtle upward entrance animation when the card slides into the active center position — text fades in and slides up 12px over 0.4s staggered — label first, then heading, then subtitle, then button.

CAROUSEL CARDS CONTENT
Design the following cards in order:
Card 1 — LISTEN TO OUR PODCAST: eyebrow "LISTEN TO OUR SERMONS", heading "GROWING STRONGER IN CHRIST", subtitle "Available on YouTube and all platforms", button "Listen Now". Background: atmospheric photo of preaching moment.
Card 2 — WATCH LIVE: eyebrow "JOIN US ONLINE", heading "EXPERIENCE LIVE WORSHIP", subtitle "Stream every Sunday on YouTube and TikTok", button "Watch Now". Background: atmospheric worship photo.
Card 3 — BIBLE STUDY: eyebrow "WEDNESDAY NIGHTS", heading "STRONGER IN THE WORD", subtitle "Deep Scripture. Sound Doctrine. Real Community.", button "Join Us". Background: atmospheric Bible study photo.
Card 4 — PRAYER AND FASTING: eyebrow "FRIDAY NIGHTS", heading "STRONGER IN PRAYER", subtitle "Intercession. Fasting. Spiritual Warfare.", button "Learn More". Background: atmospheric prayer photo.
Card 5 — YOUTH MINISTRY: eyebrow "LPC YOUTH", heading "THE NEXT GENERATION IS RISING", subtitle "Bold faith for young people in Lilongwe", button "Get Involved". Background: atmospheric youth ministry photo.
Card 6 — OUTREACH: eyebrow "CITY GOSPEL OUTREACH", heading "STRONGER IN PURPOSE", subtitle "Evangelism and Church Planting across Malawi", button "Join the Mission". Background: atmospheric outreach crowd photo.

NAVIGATION ARROWS
Left arrow: circular button 48px, dark semi-transparent maroon background, white left chevron icon, positioned vertically centered on the left edge of the carousel overlapping the partial left card. On hover: background fills orange #E8821A, arrow turns white, button scales to 1.1x.
Right arrow: same style, right chevron icon, positioned vertically centered on the right edge overlapping the partial right card. On hover: same orange fill effect.
Clicking left arrow slides the carousel one card to the left with a smooth 0.4s ease transition. Clicking right arrow slides one card to the right. When the last card is reached the next click loops back to the first card seamlessly.

AUTO ROTATION
The carousel automatically advances to the next card every 5 seconds. The transition between cards is a smooth horizontal slide — the active card slides left out of view while the next card slides in from the right — 0.4s ease transition. Auto rotation pauses when the user hovers over the carousel or clicks a navigation arrow. Auto rotation resumes 3 seconds after the user stops interacting. The carousel loops infinitely.

PAGINATION DOTS
Below the carousel centered: a row of small dot indicators — one dot per card. Inactive dots: small 6px circles in white at 40% opacity. Active dot: wider pill shape 20px wide, 6px tall, solid orange #E8821A. When the carousel advances the active dot transitions to the next position with a smooth width animation — the current dot shrinks back to a circle and the next dot expands to a pill. This is exactly the dot style seen on the Elevation Church carousel.

SECTION LABEL
Directly above the carousel: centered Signature script label in orange italic: "Explore Our World" and below it TAN-BUSTER Bold white heading: DISCOVER MORE with a thin 120px orange horizontal rule below it.

LIGHT AND DARK MODE
Dark mode default: card overlays are dark maroon at 60% opacity, content text is white, navigation arrows are dark semi-transparent maroon, pagination dots are white and orange, section background is the LPC smoky dark texture.
Light mode: card overlays lighten to warm peach at 50% opacity, content headings switch to dark maroon #1A0500, subtitles switch to burnt orange #C94A1A, CTA button becomes white fill with dark maroon text and orange border, navigation arrows become warm white with dark maroon icons and orange on hover, pagination dots become dark maroon inactive and orange active, section background switches to warm off-white #FFF8F0 with subtle grain overlay.

MICROINTERACTIONS SUMMARY
Card entrance: text content in each card fades in and slides up 12px staggered over 0.4s as the card enters the active center position.
Navigation arrows: orange fill on hover, scale 1.1x, smooth 0.2s transition.
CTA button: orange fill on hover, smooth 0.2s transition.
Carousel slide: smooth 0.4s horizontal ease transition between cards.
Auto rotation: 5 second interval, pauses on hover or click interaction, resumes after 3 second delay, infinite loop.
Pagination dots: active dot expands to pill shape, smooth width transition as carousel advances.
Partial side cards: slightly darkened at 40% dark overlay, brightens slightly on hover to invite clicking.

GLOBAL RULES
Fonts: TAN-BUSTER Bold for all headings, Signature script for labels and subtitles, Montserrat Bold for eyebrow labels and CTA buttons.
Colors: #E8821A, #C94A1A, #1A0500, #FFFFFF.
All card photos use cinematic atmospheric placeholder imagery until real LPC photography is uploaded after deployment to Vercel.
All card content — photo, eyebrow label, heading, subtitle, button text and link — is designed as a clean editable block so the developer can connect each card to a live CMS data source after the Figma design is built and deployed on Vercel.
