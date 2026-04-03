DISCOVERY GALLERY BAR SECTION
Place this section directly after the Hero section and before the About section.
Background: deep dark maroon smoky texture — same signature LPC 2026 atmospheric warm glow, slightly darker and more cinematic than the hero, giving this bar a grounded anchoring feel between the two sections.

LIGHT AND DARK MODE TOGGLE
Design a mode toggle switch that sits in the top right corner of this section, fixed to the navigation bar alongside the social media icons and the Join Us Sunday button. The toggle is a pill shaped switch 56px wide and 28px tall.
Dark mode state — default: the pill background is dark maroon #1A0500, the slider circle inside is orange #E8821A, a small white crescent moon icon sits inside the slider circle, the pill has a thin orange border. A small Montserrat label sits beside the toggle reading "Dark" in white.
Light mode state: the pill background is warm white #FFF8F0, the slider circle is orange #E8821A, a small white sun icon sits inside the slider circle, the pill has a thin orange border. A small Montserrat label sits beside the toggle reading "Light" in orange.
Toggle transition: when switched the slider circle slides smoothly from one side to the other over 0.3s, the background color of the pill transitions smoothly, the icon inside the circle crossfades between moon and sun, and the entire website transitions between dark and light mode simultaneously with a smooth 0.4s full page color transition — no flash, no jump.

DARK MODE DESIGN — DEFAULT
All sections use the signature LPC 2026 smoky dark maroon and orange-crimson atmospheric texture backgrounds as described throughout the full website prompt. All text is white. All cards are dark semi-transparent maroon. All borders and accents are orange. This is the default state of the entire website.

LIGHT MODE DESIGN
When light mode is activated the entire website transitions to a warm light palette while keeping the LPC brand identity fully intact. The smoky dark texture backgrounds are replaced with warm light equivalents as follows:
Page background: warm off-white #FFF8F0 — creamy and warm, not cold white.
Section backgrounds alternate between #FFF8F0 warm off-white and #FFF0E0 warm light peach — creating visual rhythm between sections without losing warmth.
The signature smoky texture is replaced in light mode with a subtle warm noise grain overlay at 4% opacity on top of the light backgrounds — keeping the tactile brand texture feel without the darkness.
Radial glow effects become soft warm amber sunbursts at very low opacity — 8% — sitting behind content areas to maintain the LPC atmospheric warmth in a lighter form.
Text colors in light mode:
All headings in TAN-BUSTER Bold switch from white to deep maroon #1A0500 — strong and readable.
All Signature script labels switch from white to burnt orange #C94A1A — warm and elegant.
All Montserrat body text switches from white to dark maroon #2A0800 — rich and legible.
Card colors in light mode:
All cards switch from dark semi-transparent maroon to warm white #FFFFFF with a soft orange-tinted box shadow — 0 4px 24px rgba(232 130 26 / 0.12).
Card borders become thin orange #E8821A at 40% opacity.
Card hover state: border brightens to full orange, shadow deepens and warms.
Navigation in light mode:
Nav background switches from #1A0500 dark to #FFF8F0 warm white with a soft orange bottom border.
Logo stays unchanged — black and orange always.
Nav links switch from white to dark maroon #1A0500, orange on hover.
CTA button stays orange fill with white text — unchanged in both modes.
Social media icons switch from white to dark maroon, orange on hover.
Mode toggle updates to show the sun icon and Light label.
Footer in light mode:
Footer background switches from #100300 near-black to #2A0800 deep warm brown — still dark and grounding but warmer and less stark.
Footer text switches to warm white #FFF8F0.
Social icons and links stay orange.
Growing Stronger wordmark stays white on the dark footer.
Floating social side panel in light mode:
Panel background switches from dark maroon to warm white #FFF8F0 with an orange left border.
Icons switch from white to dark maroon, orange on hover.
Panel gets a warm orange tinted box shadow on the left side.
Section dividers and rules in light mode:
All thin orange horizontal divider lines stay orange — unchanged.
Section footer rows get a warm peach #FFE8CC background instead of dark maroon.
Gallery section in light mode:
Tab bar background switches from #1A0500 dark maroon to #FFF0E0 warm peach.
Tab pills in default state: warm white background, dark maroon text, orange icon.
Active tab: orange fill, white text — unchanged.
Photo cards: the dark overlay on photos lightens from 30% dark maroon to 20% warm maroon — photos appear brighter and more vibrant in light mode.
Caption slide-up labels switch from white on dark to dark maroon on warm white semi-transparent background.
Lightbox overlay switches from 95% dark maroon to 90% warm white #FFF8F0 with dark maroon text and orange accents.
Leadership section in light mode:
Bishop feature card switches from dark smoky texture to warm white card with orange glow shadow.
Pastor, Elder, Deacon and Ministry Leader cards switch to warm white with orange border and shadow.
All name text switches to dark maroon. All title script text stays burnt orange.
Map section in light mode:
Section background switches from deep dark maroon to warm off-white #FFF8F0.
Malawi map silhouette switches from dark maroon fill to a warm light peach #FFE8CC fill with orange border glow.
Map background behind Malawi shape switches to warm white.
Tooltip card switches to white background with orange border and dark maroon text.
Left column text switches to dark maroon headings and body text.
Get Directions button stays orange fill with white text — unchanged.
Prayer form in light mode:
Form input fields switch from dark semi-transparent to warm white with orange border.
Input text switches to dark maroon.
Submit button stays orange — unchanged.

TRANSITION BEHAVIOUR
When the user clicks the mode toggle: a smooth 0.4s CSS transition applies simultaneously to background colors, text colors, card colors, shadow colors, overlay opacities and texture opacities across every section of the website. No element snaps or flashes. The transition feels like the page is breathing from dark to light or light to dark. The toggle slider animates smoothly over 0.3s. The user's mode preference is saved to local storage so when they return to the site their preferred mode is loaded automatically without any flash of the wrong mode on page load.

DISCOVERY GALLERY BAR SECTION CONTINUES BELOW

TOP LABEL ROW
Centered at the top of the section. Signature script label in orange italic: "Explore Our World"
Below: TAN-BUSTER Bold heading in white in dark mode and dark maroon in light mode: DISCOVER MORE
Thin orange horizontal rule below the heading stretching 120px wide centered.

HORIZONTAL AUTO-ROTATING TAB BAR
Directly below the heading. A full width horizontal scrollable tab strip. Dark maroon background #1A0500 in dark mode, warm peach #FFF0E0 in light mode, with a thin orange top and bottom border line. Tabs sit in a single row. On desktop all tabs are visible. On mobile the strip scrolls horizontally with a smooth momentum scroll and a subtle orange fade-out gradient on the right edge hinting that more tabs exist.
The tab bar automatically rotates from left to right in a continuous slow loop — smoothly sliding each tab into view one after the other with no manual interaction needed. The rotation speed is slow and elegant — each tab stays visible for 3 seconds before the strip advances to the next. The active highlighted tab moves with the rotation — whichever tab is currently in the center or most prominent position is treated as selected and its corresponding gallery grid content updates automatically below. The auto-rotation pauses immediately when the user hovers over the tab bar or clicks any tab manually — giving the user full control. When the user moves their mouse away from the tab bar the auto-rotation resumes from where it paused after a 2 second delay. When the strip reaches the last tab it loops seamlessly back to the first tab with no jump or flash — a smooth infinite loop. On mobile the auto-rotation is disabled and the user scrolls the tab bar manually with touch swipe. A thin animated orange progress bar sits below the tab strip showing how far through the current rotation cycle the strip is — it fills from left to right over the 3 second interval then resets when the next tab becomes active.
Each tab is a pill shaped button with the following states:
Default state in dark mode: dark semi-transparent maroon background, white Montserrat Bold label, small relevant icon to the left of the label in white, no border.
Default state in light mode: warm white background, dark maroon Montserrat Bold label, dark maroon icon, no border.
Active or selected state in both modes: orange fill #E8821A background, white Montserrat Bold label, icon in white, soft orange glow shadow underneath the pill.
Hover state in both modes: border appears in orange #E8821A, label turns orange, icon turns orange, smooth 0.2s transition.
The tabs in order from left to right:
Tab 1 — ALL — grid icon — shows the full mixed gallery
Tab 2 — WORSHIP — music note icon — shows worship service photos
Tab 3 — BIBLE STUDY — open book icon — shows Bible study session photos
Tab 4 — PRAYER — hands icon — shows prayer and fasting photos
Tab 5 — YOUTH — lightning bolt icon — shows youth ministry photos
Tab 6 — WOMEN — flower icon — shows women's ministry photos
Tab 7 — MEN — shield icon — shows men's ministry photos
Tab 8 — OUTREACH — globe icon — shows community outreach photos
Tab 9 — EVENTS — calendar icon — shows church events and special services photos
Tab 10 — BEHIND THE SCENES — camera icon — shows media team and setup photos

GALLERY GRID BELOW THE TAB BAR
The gallery grid sits directly below the tab bar and updates dynamically when a tab is clicked or when the auto-rotation advances to the next tab — the grid content filters and transitions with a smooth fade and scale animation: current photos fade out and scale down slightly, new photos fade in and scale up — smooth 0.3s transition.
Grid layout: masonry style — mixed heights creating an editorial magazine feel. Three columns on desktop, two columns on tablet, one column on mobile. Photos have no gaps between them on mobile, 8px gaps on desktop.
Each photo card:
Default state in dark mode: photo fills the card fully. Dark orange-maroon gradient overlay sits on top of the photo at 30% opacity — subtle, letting the photo breathe.
Default state in light mode: photo fills the card fully. Warm light peach overlay at 15% opacity — very subtle, photos appear bright and vibrant.
Hover state in dark mode: the dark overlay fades to 70% opacity and deepens to maroon, a TAN-BUSTER Bold white caption label slides up from the bottom of the card with a smooth 0.3s upward slide. A small orange LPC badge appears top-right corner. The card gets a thin orange border glow. The photo scales up subtly to 1.03x.
Hover state in light mode: the light overlay fades to 40% warm peach, a TAN-BUSTER Bold dark maroon caption label slides up from the bottom with a warm white semi-transparent background pill behind the text. A small orange LPC badge appears top-right corner. The card gets a thin orange border glow. The photo scales up subtly to 1.03x.
Bottom right of each card on hover: a small circle button with an expand icon — white on dark mode, dark maroon on light mode — clicking opens the photo in a full screen lightbox overlay.

LIGHTBOX OVERLAY
Dark mode: full screen dark maroon overlay at 95% opacity. Photo centered with white border and orange corner accents. Left and right arrow buttons in orange circles. Top right white X close button. Bottom center caption in Montserrat white and LPC badge small.
Light mode: full screen warm white overlay at 90% opacity. Photo centered with orange border and dark maroon corner accents. Left and right arrow buttons in orange circles. Top right dark maroon X close button. Bottom center caption in Montserrat dark maroon and LPC badge small.
Both modes: opens with smooth scale-up fade-in, closes with scale-down fade-out, clicking outside the photo closes the lightbox.

LOAD MORE ROW
Below the gallery grid: centered row with Montserrat text in white on dark mode and dark maroon on light mode: "Showing 12 of 48 photos" and below it a large orange outline pill button "Load More" in Montserrat Bold. On hover button fills orange with white text in both modes. On click: 12 more photos animate in from below with a staggered fade-up entrance — each photo appearing 0.05s after the previous one.

BOTTOM SOCIAL PROMPT STRIP
Below the Load More button: full width strip. Dark maroon background in dark mode, warm peach #FFF0E0 in light mode, thin orange top border. Centered Montserrat text in white on dark mode and dark maroon on light mode: "Share your LPC moments — tag us on social media" then a row of four pill buttons — TikTok, YouTube, Facebook, Instagram — each with platform icon left and label right in Montserrat Bold. TikTok and Instagram buttons in orange fill. YouTube and Facebook in white outline on dark mode and orange outline on light mode. All four open the respective LPC social media page in a new browser tab on click.

SECTION FOOTER
Standard LPC section footer adapts to both modes. Dark mode: dark maroon background, white text, orange icons. Light mode: warm peach background, dark maroon text, orange icons. TikTok, YouTube, Facebook and Instagram icons left each clickable, LPC badge center, Growing Stronger wordmark right. Thin orange top border above footer row in both modes.

MICROINTERACTIONS SUMMARY
Mode toggle: slider animates 0.3s, full page transitions 0.4s, mode saved to local storage, no flash on page load.
Tab bar auto-rotation: smooth left to right continuous loop, 3 seconds per tab, pauses on hover or manual click, resumes after 2 second delay, seamless infinite loop, orange progress bar resets each cycle.
Tab switching: active tab fills orange, gallery grid fades and scales, smooth 0.3s transition.
Photo hover: overlay deepens, caption slides up, badge appears, border glows, photo zooms 1.03x.
Lightbox: scale-up fade-in on open, scale-down fade-out on close, arrow navigation, click outside to close.
Load More: staggered cascading fade-up entrance, 0.05s delay between each card.
Tab bar on mobile: auto-rotation disabled, horizontal momentum scroll, touch swipe navigation.
All animations smooth, subtle and consistent across both light and dark modes.

GLOBAL RULES FOR THIS SECTION
Fonts: TAN-BUSTER Bold for headings and captions, Signature script for labels, Montserrat for all UI text and tab labels.
Colors dark mode: #E8821A orange, #C94A1A burnt orange, #1A0500 dark maroon, #FFFFFF white.
Colors light mode: #E8821A orange, #C94A1A burnt orange, #FFF8F0 warm off-white, #1A0500 dark maroon for text.
Background dark mode: signature LPC smoky warm atmospheric texture mandatory.
Background light mode: warm off-white with subtle grain overlay and soft amber radial glow at low opacity.
All photos use placeholder imagery until real LPC gallery content is uploaded after deployment to Vercel.
All photo frames, caption layers, tab content areas and mode toggle state are designed as clean editable blocks so the developer can connect each element to a live CMS data source and implement the mode toggle in code after the Figma design is built and deployed on Vercel.