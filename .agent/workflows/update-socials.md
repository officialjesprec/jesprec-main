---
description: how to update social media links and icons
---

# Updating Social Media Links

To update or add new social media platforms to the website footer:

1. **Locate the Footer Component**: Open `components/Footer.tsx`.
2. **Import New Icons**: 
   - We use `react-icons/fa6` (Font Awesome 6) for consistent styling.
   - If adding a new platform, import its icon from `react-icons/fa6`.
3. **Update the Links**:
   - Find the `<ul className="space-y-4">` section under the "Connect" heading.
   - Each link follows this structure:
     ```tsx
     <li>
       <a href="YOUR_URL" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-500 hover:text-[YOUR_BRAND_COLOR] transition-colors text-xs font-bold uppercase tracking-[0.2em] group">
         <div className="w-5 h-5 flex items-center justify-center">
           <ICON_NAME size="100%" />
         </div>
         <span>LABEL</span>
       </a>
     </li>
     ```
4. **Brand Hover Colors Used**:
   - Instagram: `#E1306C`
   - X (Twitter): `white`
   - LinkedIn: `#0A66C2`
   - Behance: `#1769FF`
   - WhatsApp: `#25D366`
5. **Verify Changes**: Run `npm run dev` to check the icons and links.
6. **Deploy**: Committing and pushing to the `main` branch will trigger an automatic Vercel deployment.
