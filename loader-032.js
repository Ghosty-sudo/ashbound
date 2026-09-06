(async()=>{try{
if(typeof DecompressionStream!=='function')throw new Error('This browser needs gzip stream support.');
const names=["ab032.01.b64","ab032.02.b64","ab032.03.b64","ab032.04.b64","ab032.05.b64","ab032.06.b64"];
const texts=await Promise.all(names.map(async n=>{const r=await fetch('./'+n,{cache:'no-store'});if(!r.ok)throw new Error(n+' '+r.status);return(await r.text()).replace(/\s+/g,'')}));
const parts=texts.map(s=>{const raw=atob(s),a=new Uint8Array(raw.length);for(let i=0;i<raw.length;i++)a[i]=raw.charCodeAt(i);return a});
const total=parts.reduce((n,a)=>n+a.length,0),z=new Uint8Array(total);let o=0;for(const a of parts){z.set(a,o);o+=a.length}
const h=await new Response(new Blob([z]).stream().pipeThrough(new DecompressionStream('gzip'))).text();
if(!h.includes('ASHBOUND 0.32.0 STEELWAKE ALPHA'))throw new Error('Build marker verification failed.');
if(globalThis.crypto?.subtle){const d=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(h)),hex=[...new Uint8Array(d)].map(x=>x.toString(16).padStart(2,'0')).join('');if(hex!=='2350dcad43b567f4cb894aad41e80addab9a00e8ff827ec69e25ad66b85b6120')throw new Error('Build hash verification failed.')}
document.open();document.write(h);document.close()
}catch(e){document.body.innerHTML='<main style="font-family:system-ui;padding:28px;background:#09070c;color:#f7efd6;min-height:100vh"><h1>ASHBOUND FAILED TO WAKE</h1><p>'+String(e.message||e)+'</p><p>Refresh once. If this persists, report the message above.</p></main>';console.error(e)}})()
