'use client';

import Script from 'next/script';

export default function SRABadge() {
  return (
    <div className="flex flex-col items-center min-h-[80px]">
      {/* 1. The Placeholder: 
          The Yoshki script looks for a specific div to inject the badge. 
          The ID or class name will be provided in your Yoshki dashboard.
      */}
      <div id="sra-badge-container" className="sra-badge"></div>

      {/* 2. The Script:
          Replace the SRC with the unique URL provided to you by Yoshki 
          after you register your domain in mySRA.
      */}
      <Script 
        src="https://cdn.yoshki.com/badge/your-unique-id.js" 
        strategy="afterInteractive"
        onLoad={() => {
          console.log('SRA Badge script loaded successfully');
        }}
      />
      
      {/* 3. Fallback text for accessibility */}
      <noscript>
        <p className="text-[10px] text-gray-400">
          SRA regulated firm. Verification badge requires JavaScript.
        </p>
      </noscript>
    </div>
  );
}