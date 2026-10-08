const A='/assets/';const money=n=>'₹'+n.toLocaleString('en-IN');
const prices=[['Hair packages','Men’s haircut + beard + hair spa',999],['Hair packages','Men’s haircut + beard + hair spa + D-tan',1599],['Hair packages','Women’s creative haircut + deep shine hair spa',1399],['Hair packages','Men’s D-tan + haircut + shine hair spa',1499],['Hair packages','Women’s haircut + 8 foil highlights + colour shine + hair spa',3799],['Hair packages','Men’s haircut + beard + global hair colour + hair spa',1599],['Premium treatments','Kerasmooth treatment',5499],['Premium treatments','Balayage hair colour / colour melt',4499],['Premium treatments','Hair smoothing — any length',4999],['Premium treatments','Keratin treatment — any length',4999],['Premium treatments','Botox hair treatment',5599],['Premium treatments','Nanoplastia treatment — exclusive',5599],['Premium treatments','Haircut + hair spa + D-tan + eyebrow',1999],['Facials','Lotus facial',2295,2700],['Facials','Gold facial',2125,2500],['Facials','O3+ Diamond facial',3145,3700],['Facials','O3+ Anti-ageing facial',3570,4200]];
const button=(text,service='appointment',cls='')=>`<a class="button ${cls}" data-book="${service}" ${service==='appointment'&&text!=='Chat on WhatsApp'?'data-appointment':''}>${text}</a>`;
const intro=(label,title,desc)=>`<section class="pageintro"><div class="eyebrow">${label}</div><h1>${title}</h1><p>${desc}</p></section>`;
const priceCard=(p,i)=>`<article class="pricecard motion" data-side="${i%2?'right':'left'}"><span class="eyebrow">${p[0]}</span><h3>${p[1]}</h3><div class="amount">${money(p[2])}${p[3]?` <del>${money(p[3])}</del>`:''}</div><p>${p[0]==='Facials'?'15% off original price':'Puja special price'}</p>${button('Enquire about this offer',p[1]+' at '+money(p[2]),'outline')}</article>`;
const strip=()=>`<aside class="offerstrip"><span>THE PUJA EDIT · 01–18 OCTOBER 2026</span><p>Hair packages from <strong>₹999</strong> · Facials <strong>15% off</strong></p><a href="/offers/">Explore the offers</a></aside>`;
const galleryItem=(n,i)=>`<button class="photo motion" data-side="${i%2?'right':'left'}" data-photo="${n}" aria-label="Enlarge salon photograph ${i+1}"><img src="${A}gallery-${n}.jpg" loading="lazy" alt="Sona Luxe ${[8,29].includes(n)?'nail artistry':[0,9].includes(n)?'salon interior':'hair styling portfolio'}"><span>SONA LUXE · ${[8,29].includes(n)?'NAIL ART':'THE LOOKBOOK'}</span></button>`;
const end=()=>`<section class="closing motion"><span class="eyebrow">YOUR NEXT CHAPTER</span><h2>A little time for you.<br><em>A look that feels like you.</em></h2><p>Tell us what you have in mind. We’ll help you choose your next salon visit.</p>${button('Book your appointment')}<a class="textlink" href="tel:+919101035255">Call 9101035255</a></section>`;
const faq=()=>`<section class="faq section"><div><span class="eyebrow">BEFORE YOUR VISIT</span><h2>A few good<br><em>questions.</em></h2></div><div>${[['Is Sona Luxe a unisex salon?','Yes. Explore hair styling and grooming for men and women, along with beauty and nail services.'],['How do I book an appointment?','Use any booking button to open WhatsApp, or call 9101035255. Your appointment is confirmed when the salon replies.'],['When are the Puja prices valid?','The published Puja offer runs from 1 October to 18 October 2026. Ask the salon about appointment availability and offer conditions before booking.'],['Are smoothing and keratin prices for any hair length?','The Puja poster lists hair smoothing and keratin treatment at ₹4,999 each for any length. Confirm the appropriate treatment in your consultation.'],['Where can I find the salon?','Visit Bengtol Gate, below Sona Gym, in Assam. Use the map on the Visit Us page and call for the exact landmark.']].map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div></section>`;
const services=[['01','Hair, beautifully considered.','Creative cuts, soft layers, glossy finishes and colour that complements your style.',25,'Hair packages from ₹999'],['02','Grooming with character.','Precision cuts, beard shaping and fresh finishing touches for your everyday look.',4,'Men’s haircut + beard + spa ₹999'],['03','Shine in every detail.','Expressive nail artistry, polished finishes and a little everyday indulgence.',29,'Ask for nail service pricing'],['04','Your festive glow.','Lotus, Gold and O3+ facial offers, with 15% off the published original prices.',28,'Puja facials from ₹2,125']];
const serviceRows=()=>services.map(([n,t,d,img,price],i)=>`<section class="serviceRow section ${i%2?'reverse':''}"><div class="serviceImage motion" data-side="${i%2?'right':'left'}"><img src="${A}gallery-${img}.jpg" loading="lazy" alt="${t}"><span>${n} / SONA LUXE</span></div><div class="serviceText motion" data-side="${i%2?'left':'right'}"><span class="eyebrow">THE SONA LUXE EXPERIENCE</span><h2>${t}</h2><p>${d}</p><p class="gold">${price}</p>${button('Enquire about '+['hair','grooming','nails','facials'][i],['hair styling','men’s grooming','nail artistry','facial offers'][i],'outline')}</div></section>`).join('');
const home=()=>`<section class="hero"><div class="herocopy"><span class="eyebrow">BENGTOL GATE, ASSAM · UNISEX SALON</span><h1>Not just a look.<br><em>A feeling.</em></h1><p>Beautiful hair. Thoughtful beauty. The kind of confidence that stays with you.</p><div class="actions">${button('Find your signature look')}<a class="textlink" href="/gallery/">Discover our work</a></div><div class="herofoot"><span>HAIR &nbsp; / &nbsp; BEAUTY &nbsp; / &nbsp; NAILS</span><span>SCROLL TO DISCOVER</span></div></div><div class="heroimage"><img src="${A}gallery-28.jpg" alt="A finished hair look at Sona Luxe" fetchpriority="high"><div class="vertical">THE ART OF FEELING BEAUTIFUL</div><div class="imagecaption"><span>THE SONA LUXE SIGNATURE</span><strong>Effortless. Individual. You.</strong></div></div><span class="heroindex">01 — THE FIRST IMPRESSION</span></section>${strip()}<section class="statement section motion"><span class="eyebrow">WELCOME TO SONA LUXE</span><h2>Come as you are.<br>Leave feeling <em>extraordinary.</em></h2><p>A space for fresh starts, favourite rituals and special occasions. Explore hair, beauty and nail artistry, made personal.</p></section><div class="featuregrid section">${[[25,'Hair artistry'],[4,'Modern grooming'],[29,'Nail couture']].map(([n,t],i)=>`<a class="feature motion" data-side="${i%2?'right':'left'}" href="/services/"><img src="${A}gallery-${n}.jpg" loading="lazy" alt="${t} at Sona Luxe"><span>0${i+1}</span><h3>${t}</h3></a>`).join('')}</div><section class="section offerhead"><div><span class="eyebrow">A FESTIVE LITTLE INDULGENCE</span><h2>The Puja <em>edit.</em></h2></div><a class="textlink" href="/offers/">View all 17 offers</a></section><div class="pricegrid section">${[prices[0],prices[2],prices[8]].map(priceCard).join('')}</div><section class="salon section"><img class="motion" src="${A}gallery-0.jpg" alt="Inside Sona Luxe Salon" loading="lazy"><div class="motion" data-side="right"><span class="eyebrow">MAKE YOURSELF AT HOME</span><h2>Your moment.<br><em>Your sanctuary.</em></h2><p>Step away from the everyday and settle into Sona Luxe. Find us at Bengtol Gate, below Sona Gym.</p><a class="textlink" href="/visit/">Plan your visit</a></div></section><section class="section"><span class="eyebrow">WORDS FROM THE CHAIR</span><h2>The little things <em>that stay.</em></h2><p class="sample">Sample testimonials — illustrative copy, awaiting real customer reviews.</p><div class="quotes">${['“My layers feel lighter, and the finish is exactly the soft look I had in mind.”','“A sharp cut, a tidy beard and time to relax. A lovely grooming experience.”','“The nail design added the perfect finishing touch to my festive outfit.”','“I came with a reference photo and loved having time to talk through the look.”','“A beautiful setting for a little self-care before a special occasion.”'].map((q,i)=>`<article class="quote motion" data-side="${i%2?'right':'left'}"><span class="quotemark">“</span><p>${q.replace(/[“”]/g,'')}</p><small>SAMPLE REVIEW ${String(i+1).padStart(2,'0')}</small></article>`).join('')}</div></section>${faq()}${end()}`;
const offers=()=>`${intro('THE FESTIVE COLLECTION','The Puja <em>edit.</em>','Your festive refresh, with the exact prices from Sona Luxe’s Puja offer poster. Valid 1–18 October 2026.')}${strip()}<section class="section"><div class="filterbar" role="group" aria-label="Filter offers">${['All','Hair packages','Premium treatments','Facials'].map((x,i)=>`<button data-filter="${x}" class="${i?'':'selected'}" aria-pressed="${!i}">${x}</button>`).join('')}</div><div class="pricegrid allprices">${prices.map(priceCard).join('')}</div><p class="note">Prices transcribed from the Puja offer poster. Confirm availability and applicable conditions with the salon before booking.</p></section><section class="poster section"><div><span class="eyebrow">FROM THE SALON</span><h2>The original<br><em>Puja offer.</em></h2><p>Hair packages, premium treatments and four facial offers, brought together for the festive season.</p>${button('Ask about Puja offers','Puja special offers')}</div><button data-photo="11" aria-label="Enlarge original Puja offer poster"><img src="${A}gallery-11.jpg" alt="Original Sona Luxe Puja offer poster with prices" loading="lazy"></button></section>${faq()}${end()}`;
const galleryNums=[28,25,4,29,23,14,5,3,22,20,8,1,2,6,7,10,13,15,16,17,18,19,21,24,26,27,30,31,32,33,0,9];
const gallery=()=>`${intro('THE SONA LUXE LOOKBOOK','Real work.<br><em>Beautiful details.</em>','Hair transformations, fresh grooming, nail artistry and moments inside the salon — from the Sona Luxe Instagram portfolio.')}${strip()}<section class="section"><div class="gallerygrid">${galleryNums.map(galleryItem).join('')}</div><p class="note">Photographs and reel cover images from the salon’s publicly accessible Instagram profile.</p></section>${end()}`;
const visit=()=>`${intro('WE LOOK FORWARD TO SEEING YOU','Make time<br><em>for yourself.</em>','Your next look starts with a conversation. Call or message us to plan your appointment.')}${strip()}<section class="contact section"><div class="motion"><span class="eyebrow">VISIT SONA LUXE</span><h2>A little closer<br><em>to your next look.</em></h2><p>Bengtol Gate, Chirang, Assam<br>Below Sona Gym</p><a class="phone" href="tel:+919101035255">9101035255</a><p>Please contact us for opening hours and appointment availability.</p>${button('Chat on WhatsApp')}<a class="textlink" href="https://www.google.com/maps/search/?api=1&query=Bengtol+Gate+Chirang+Assam" target="_blank" rel="noopener">Open directions</a></div><iframe title="Map of Bengtol Gate, Chirang, Assam" src="https://www.google.com/maps?q=Bengtol%20Gate%2C%20Chirang%2C%20Assam&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></section><section class="enquiry section motion"><span class="eyebrow">LET’S PLAN YOUR VISIT</span><h2>What do you have <em>in mind?</em></h2><form id="enquiry"><label>Your name<input name="name" autocomplete="name" required placeholder="Your name" maxlength="80"></label><label>Service<select name="service"><option>Hair styling</option><option>Men’s grooming</option><option>Nail artistry</option><option>Facials</option><option>Puja special offers</option><option>Premium hair treatments</option></select></label><label class="wide">Anything you’d like us to know?<textarea name="message" placeholder="Your preferred date, inspiration or questions" maxlength="1000"></textarea></label><button class="button" type="submit">Continue on WhatsApp</button><p class="note">Opens WhatsApp with your enquiry. The salon will confirm your appointment.</p></form></section>${faq()}`;
const routeSegment=location.pathname.split('/').filter(Boolean)[0];let route=!routeSegment||routeSegment==='index.html'||routeSegment==='home'?'home':routeSegment;const pages={home,services:()=>`${intro('HAIR · BEAUTY · NAILS','Your style.<br><em>Our attention.</em>','From a fresh cut to a full transformation, discover your next Sona Luxe ritual.')}${strip()}${serviceRows()}<section class="section"><span class="eyebrow">THE FINISHING TOUCH</span><h2>Gloss, softness <em>and movement.</em></h2><div class="pricegrid">${[prices[7],prices[8],prices[9]].map(priceCard).join('')}</div><p class="note">Puja prices valid 1–18 October 2026.</p></section>${end()}`,offers,gallery,visit};document.querySelector('#main').innerHTML=(pages[route]||home)();document.title=`${{home:'Sona Luxe Unisex Salon',services:'Services',offers:'Puja Offers',gallery:'Gallery',visit:'Visit Us'}[route]||'Sona Luxe'} | Sona Luxe`;
document.querySelectorAll('nav a').forEach(a=>{if(a.pathname===location.pathname||route==='home'&&a.pathname==='/')a.setAttribute('aria-current','page')});
const wa=service=>'https://wa.me/919101035255?text='+encodeURIComponent('Hello Sona Luxe, I would like to enquire about '+service+'. Please share availability and details.');document.querySelectorAll('[data-book]').forEach(a=>{a.href=wa(a.dataset.book);a.target='_blank';a.rel='noopener'});

const booking = document.createElement('dialog');
booking.id = 'appointment-dialog';
booking.className = 'booking-dialog';
booking.setAttribute('aria-labelledby', 'booking-title');
booking.innerHTML = `<button type="button" class="close booking-close" aria-label="Close appointment form">×</button><span class="eyebrow">YOUR NEXT SONA LUXE MOMENT</span><h2 id="booking-title">Book an <em>appointment.</em></h2><p class="booking-intro">Choose your preferred date and tell us what you have in mind.</p><form id="appointment-form"><label>Your name<input name="name" autocomplete="name" required maxlength="80" placeholder="Your name"></label><label>Phone number<input name="phone" type="tel" autocomplete="tel" inputmode="tel" required minlength="8" maxlength="20" placeholder="Your contact number"></label><label class="wide">Service<select name="service" required>${['Hair styling', 'Men’s grooming', 'Nail artistry', 'Facials', 'Premium hair treatments', ...prices.map(p => p[1]+' — '+money(p[2]))].map(s => `<option>${s}</option>`).join('')}</select></label><label>Preferred date<input name="date" type="date" required aria-label="Preferred appointment date"></label><label>Preferred time<input name="time" type="time" required aria-label="Preferred appointment time"></label><label class="wide">Anything you’d like us to know?<textarea name="message" maxlength="1000" placeholder="Your inspiration or questions"></textarea></label><button class="button wide" type="submit">Send appointment request on WhatsApp</button><p class="note wide" role="status">Your details open in WhatsApp. Tap Send there; the salon will confirm availability and your appointment.</p></form>`;
document.body.append(booking);
const bookingForm = booking.querySelector('form');
const bookingDate = bookingForm.elements.date;
const bookingPhone = bookingForm.elements.phone;
const bookingName = bookingForm.elements.name;
function todayInAssam() {
  const parts = new Intl.DateTimeFormat('en-CA', {timeZone:'Asia/Kolkata', year:'numeric', month:'2-digit', day:'2-digit'}).formatToParts(new Date());
  const part = type => parts.find(p => p.type === type).value;
  return `${part('year')}-${part('month')}-${part('day')}`;
}
document.querySelectorAll('[data-appointment]').forEach(a => {
  a.href = '/visit/#enquiry';
  a.removeAttribute('target');
  a.addEventListener('click', event => {
    event.preventDefault();
    bookingDate.min = todayInAssam();
    bookingDate.setCustomValidity('');
    booking.showModal();
    document.body.classList.add('booking-open');
  });
});
booking.querySelector('.booking-close').onclick = () => booking.close();
booking.addEventListener('close', () => document.body.classList.remove('booking-open'));
booking.addEventListener('click', event => {
  if (event.target !== booking) return;
  const r = booking.getBoundingClientRect();
  if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) booking.close();
});
bookingDate.addEventListener('input', () => bookingDate.setCustomValidity(''));
bookingPhone.addEventListener('input', () => bookingPhone.setCustomValidity(''));
bookingName.addEventListener('input', () => bookingName.setCustomValidity(''));
bookingForm.addEventListener('submit', event => {
  event.preventDefault();
  bookingDate.min = todayInAssam();
  bookingDate.setCustomValidity(bookingDate.value < bookingDate.min ? 'Please choose today or a future date.' : '');
  const phoneDigits = bookingPhone.value.replace(/\D/g, '');
  bookingPhone.setCustomValidity(!/^[+\d\s()-]+$/.test(bookingPhone.value) || phoneDigits.length < 8 || phoneDigits.length > 15 ? 'Please enter a valid phone number.' : '');
  bookingName.setCustomValidity(bookingName.value.trim() ? '' : 'Please enter your name.');
  if (!bookingForm.reportValidity()) return;
  const d = new FormData(bookingForm);
  const message = `Hello Sona Luxe, I would like to request an appointment.\nName: ${d.get('name').trim()}\nPhone: ${d.get('phone').trim()}\nService: ${d.get('service')}\nPreferred date: ${d.get('date')}\nPreferred time: ${d.get('time')} (India time)\nNotes: ${d.get('message').trim() || 'None'}\nPlease confirm availability.`;
  // Same-tab navigation also works in mobile browsers that block popups.
  window.location.assign('https://wa.me/919101035255?text=' + encodeURIComponent(message));
});
const menu=document.querySelector('.menu');menu.onclick=()=>{let open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',open);document.querySelector('nav').classList.toggle('open',open);menu.textContent=open?'Close':'Menu'};document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.setAttribute('aria-expanded','false');document.querySelector('nav').classList.remove('open');menu.textContent='Menu'}});
const box=document.querySelector('#lightbox');document.querySelectorAll('[data-photo]').forEach(b=>b.onclick=()=>{box.querySelector('img').src=A+'gallery-'+b.dataset.photo+'.jpg';box.showModal()});box.querySelector('.close').onclick=()=>box.close();box.onclick=e=>{if(e.target===box)box.close()};
document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-filter]').forEach(t=>{t.classList.toggle('selected',t===b);t.setAttribute('aria-pressed',t===b)});document.querySelectorAll('.allprices .pricecard').forEach((c,i)=>c.hidden=b.dataset.filter!=='All'&&prices[i][0]!==b.dataset.filter);scheduleMeasure()});
const form=document.querySelector('#enquiry');if(form)form.onsubmit=e=>{e.preventDefault();const d=new FormData(form);window.open('https://wa.me/919101035255?text='+encodeURIComponent(`Hello Sona Luxe, I’m ${d.get('name')}. I would like to enquire about ${d.get('service')}. ${d.get('message')}`),'_blank','noopener')};
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const motion=[...document.querySelectorAll('.motion')].map(el=>({el,top:0,height:0,current:0,target:0}));
let motionFrame=0,lastFrame=0,measureFrame=0;
const clamp=v=>Math.max(0,Math.min(1,v));
const smoothstep=v=>v*v*(3-2*v);
function measureMotion(){
  measureFrame=0;
  const transforms=motion.map(({el})=>el.style.transform);
  motion.forEach(({el})=>{el.style.transform='none'});
  motion.forEach(item=>{const r=item.el.getBoundingClientRect();item.top=r.top+scrollY;item.height=r.height});
  motion.forEach(({el},i)=>{el.style.transform=transforms[i]});
  animate();
}
function scheduleMeasure(){if(!measureFrame)measureFrame=requestAnimationFrame(measureMotion)}
function animate(){if(!motionFrame)motionFrame=requestAnimationFrame(renderMotion)}
function renderMotion(time){
  motionFrame=0;
  const dt=lastFrame?Math.min(64,time-lastFrame):16.67;lastFrame=time;
  const blend=1-Math.exp(-dt/320);
  const h=innerHeight,small=innerWidth<700;let settling=false;
  motion.forEach(item=>{
    const {el}=item;if(el.hidden)return;
    const top=item.top-scrollY,bottom=top+item.height;
    const edge=clamp(Math.max((top-h*.65)/(h*.65),(h*.24-bottom)/(h*.65),0));
    item.target=smoothstep(edge);
    item.current=reduced.matches?0:item.current+(item.target-item.current)*blend;
    if(Math.abs(item.target-item.current)<.001)item.current=item.target;else settling=true;
    if(bottom<-h||top>h*2)return;
    const e=item.current,dir=el.dataset.side==='right'?1:-1;
    el.style.transform=reduced.matches?'none':`perspective(1100px) translate3d(${dir*e*(small?20:64)}px,${e*10}px,${-e*35}px) rotateY(${dir*e*(small?2:5)}deg)`;
    el.style.filter=reduced.matches?'none':`blur(${e*(small?.8:1.8)}px)`;
  });
  const max=document.documentElement.scrollHeight-h;
  document.querySelector('.progress').style.transform=`scaleX(${max?scrollY/max:0})`;
  if(settling)animate();else lastFrame=0;
}
window.addEventListener('scroll',animate,{passive:true});
window.addEventListener('resize',scheduleMeasure);
window.addEventListener('pageshow',scheduleMeasure);
reduced.addEventListener('change',animate);
document.querySelectorAll('img').forEach(img=>img.addEventListener('load',scheduleMeasure,{once:true}));
if(document.fonts)document.fonts.ready.then(scheduleMeasure);
measureMotion();

// A gentle gold follower for mouse input; touch and reduced motion stay native.
const mouseMotion = matchMedia('(hover: hover) and (pointer: fine)');
const cursor = document.createElement('div');
cursor.className = 'cursor-halo';
cursor.setAttribute('aria-hidden', 'true');
document.body.append(cursor);
let cursorX = 0, cursorY = 0, targetX = 0, targetY = 0;
let cursorFrame = 0, cursorTime = 0, cursorVisible = false;
function hideCursor() {
  cursorVisible = false;
  cursor.classList.remove('visible', 'over-control', 'pressed');
  cancelAnimationFrame(cursorFrame);
  cursorFrame = 0;
  cursorTime = 0;
}
function followCursor(time) {
  cursorFrame = 0;
  if (!cursorVisible || !mouseMotion.matches || reduced.matches) return;
  const delta = cursorTime ? Math.min(time - cursorTime, 64) : 16.67;
  cursorTime = time;
  const amount = 1 - Math.exp(-delta / 85);
  cursorX += (targetX - cursorX) * amount;
  cursorY += (targetY - cursorY) * amount;
  cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
  if (Math.abs(targetX - cursorX) + Math.abs(targetY - cursorY) > .1) {
    cursorFrame = requestAnimationFrame(followCursor);
  } else {
    cursorTime = 0;
  }
}
document.addEventListener('pointermove', event => {
  if (event.pointerType !== 'mouse' || !mouseMotion.matches || reduced.matches || document.documentElement.classList.contains('is-loading')) {
    hideCursor();
    return;
  }
  targetX = event.clientX;
  targetY = event.clientY;
  if (!cursorVisible) {
    cursorX = targetX;
    cursorY = targetY;
    cursorVisible = true;
    cursor.classList.add('visible');
  }
  cursor.classList.toggle('over-control', !!event.target.closest('a, button, summary, input, select, textarea'));
  if (!cursorFrame) cursorFrame = requestAnimationFrame(followCursor);
}, {passive: true});
document.addEventListener('pointerdown', event => {
  if (event.pointerType === 'mouse' && cursorVisible) cursor.classList.add('pressed');
});
document.addEventListener('pointerup', () => cursor.classList.remove('pressed'));
document.documentElement.addEventListener('pointerleave', hideCursor);
window.addEventListener('blur', hideCursor);
document.addEventListener('visibilitychange', () => { if (document.hidden) hideCursor(); });
mouseMotion.addEventListener('change', hideCursor);
reduced.addEventListener('change', hideCursor);
