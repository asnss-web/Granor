const reveal = new IntersectionObserver((entries)=>entries.forEach((e)=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>reveal.observe(el));

const lengthRange=document.getElementById('lengthRange');
const widthRange=document.getElementById('widthRange');
const preview=document.getElementById('gridPreview');
function updateConfig(){
  const l=+lengthRange.value,w=+widthRange.value,area=l*w,modules=area*4,load=area*270;
  document.getElementById('lengthOut').textContent=`${l} м`;
  document.getElementById('widthOut').textContent=`${w} м`;
  document.getElementById('areaResult').textContent=`${area} м²`;
  document.getElementById('moduleResult').textContent=`${modules} шт.`;
  document.getElementById('loadResult').textContent=`${load.toLocaleString('ru-RU')} кг`;
  const cols=Math.min(l*2,14),rows=Math.min(w*2,8);
  preview.style.gridTemplateColumns=`repeat(${cols},1fr)`;
  preview.innerHTML='<span></span>'.repeat(cols*rows);
}
[lengthRange,widthRange].forEach(el=>el.addEventListener('input',updateConfig));updateConfig();

document.querySelector('.menu-btn').addEventListener('click',function(){
  const nav=document.querySelector('.desktop-nav');
  const open=this.getAttribute('aria-expanded')==='true';
  this.setAttribute('aria-expanded',String(!open));
  if(!open){nav.style.display='flex';nav.style.position='absolute';nav.style.top='72px';nav.style.left='0';nav.style.right='0';nav.style.padding='24px';nav.style.background='#e8eeef';nav.style.flexDirection='column';}
  else nav.removeAttribute('style');
});
