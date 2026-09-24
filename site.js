// Navigation and all written content work without JavaScript.
const assets = window.PORTFOLIO_ASSETS || {};
const safePath = value => typeof value === 'string' && value && !value.includes(':') && !value.startsWith('/') && !value.includes('..');
document.querySelectorAll('[data-cover], [data-image-key]').forEach(slot => {
 const cover = slot.hasAttribute('data-cover');
 const key = cover ? slot.dataset.cover.replace('assets/','').replace('.jpg','') : slot.dataset.imageKey;
 const source = assets.images?.[key];
 if (!safePath(source)) return;
 const image = new Image(); image.alt = cover ? '' : slot.dataset.imageAlt;
 image.onload = () => {
  if (cover) {image.className='cover';slot.prepend(image);slot.classList.add('has-image');slot.querySelector('.asset-note')?.remove();}
  else {image.className='gallery-image';slot.replaceWith(image);}
 }; image.src = source;
});
['linkedin'].forEach(kind => {
 const url=assets[kind]; if(typeof url !== 'string' || !url.startsWith('https://')) return;
 document.querySelectorAll('[data-profile="'+kind+'"], .socials a[href="contact.html#'+kind+'"]').forEach(el=>{
  if(el.tagName==='A'){el.href=url;el.setAttribute('aria-label','LinkedIn profile');}
  else {const a=document.createElement('a');a.href=url;a.textContent='LinkedIn';el.replaceWith(a);}
 });
});
if(safePath(assets.cv)){const box=document.querySelector('#cv-download');if(box){const a=document.createElement('a');a.href=assets.cv;a.textContent='Download CV (PDF)';a.setAttribute('download','');box.replaceChildren(a);}}
if(safePath(assets.jinx)){const box=document.querySelector('.jinx');if(box){const img=new Image();img.alt='Jinx characters — two zombies and a skull';img.onload=()=>{box.className='original-jinx';box.replaceChildren(img);};img.src=assets.jinx;}}
