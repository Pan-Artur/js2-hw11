(()=>{let t=document.querySelector(".seconds"),e=document.querySelector(".minutes"),o=document.querySelector(".hours"),r=document.querySelector(".message"),n=3600,s=setInterval(()=>{0==--n&&(clearInterval(s),r.textContent="Таймер завершено!",r.classList.add("show"),setTimeout(()=>{r.classList.remove("show")},6e3));let a=Math.floor(n/3600),l=Math.floor(n%3600/60),c=n%60;1800===n&&(r.textContent="Залишилось менше половини часу!",r.classList.add("show"),setTimeout(()=>{r.classList.remove("show")},3e3)),o.textContent=a.toString().padStart(2,"0"),e.textContent=l.toString().padStart(2,"0"),t.textContent=c.toString().padStart(2,"0")},1e3)})(),(()=>{let t=document.querySelector("#time"),e=document.querySelector("#hours"),o=document.querySelector("#minutes"),r=document.querySelector("#seconds"),n=document.querySelector("#milliseconds"),s=document.querySelector("#message"),a=3e4,l=setInterval(()=>{if(0==(a-=10)){clearInterval(l),t.classList.remove("warning"),s.textContent="Таймер завершено!",s.classList.add("show"),n.textContent="000",setTimeout(()=>{s.classList.remove("show")},6e3);return}let c=Math.floor(a/36e5),d=Math.floor(a%36e5/6e4),i=Math.floor(a%6e4/1e3),u=a%1e3;a<=1e4?t.classList.add("warning"):t.classList.remove("warning"),e.textContent=c.toString().padStart(2,"0"),o.textContent=d.toString().padStart(2,"0"),r.textContent=i.toString().padStart(2,"0"),n.textContent=u.toString().padStart(3,"0")},10)})();
//# sourceMappingURL=index.81aacb1c.js.map