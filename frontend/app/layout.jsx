import './globals.css';
import Providers from '@/components/Providers';
import PageLauncher from '@/components/PageLauncher';
import Script from 'next/script';

export const metadata = {
  title: 'Mentor.me — Real projects, real mentors, real experience',
  description: 'Connect with experienced mentors through real-world micro-projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Providers>
          {children}
          <PageLauncher />
        </Providers>
        <Script id="scroll-reveal" strategy="afterInteractive">{`
          (function(){
            var io = new IntersectionObserver(function(entries){
              entries.forEach(function(e){
                if(e.isIntersecting){
                  e.target.classList.add('is-visible');
                  io.unobserve(e.target);
                }
              });
            },{threshold:0.1, rootMargin:'0px 0px -40px 0px'});
            function observe(){
              document.querySelectorAll('[data-animate]:not(.is-visible)').forEach(function(el){io.observe(el);});
            }
            observe();
            var mo = new MutationObserver(observe);
            mo.observe(document.body,{childList:true,subtree:true});
          })();
        `}</Script>
      </body>
    </html>
  );
}

