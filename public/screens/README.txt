REAL SCREENSHOT SWAP-IN
=======================

The landing currently uses SVG-rendered bot mockups (see src/components/PhoneMockup.tsx)
so the page looks complete out of the box.

When you have the 6 real screenshots from Telegram, you can either:

OPTION A — Keep the SVG mockups (recommended for ad traffic)
The mockups already match the bot UI and look good. No work needed.

OPTION B — Use real screenshots
1. Save your 6 screenshots here as:
   - en-menu.png    (English main menu)
   - en-receipt.png (English receipt recognition)
   - en-waste.png   (English waste traffic light)
   - es-menu.png    (Spanish main menu)
   - es-receipt.png (Spanish receipt recognition)
   - es-waste.png   (Spanish waste traffic light)

2. Recommended size: 720×1480 (iPhone 14 portrait), PNG with transparent or
   #EFEAE0 background to match the chat area.

3. Open src/components/PhoneMockup.tsx and replace the JSX inside each
   variant block (menu, receipt, waste) with:

      <img src={`/screens/${lang}-${variant}.png`} alt="" className="w-full h-full object-cover" />

   Drop the chat-bubble JSX. Keep the phone frame and notch.

4. Commit + push. Vercel auto-deploys.
