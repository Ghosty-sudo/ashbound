(async()=>{
const fail=(m)=>{document.body.innerHTML=`<div style="min-height:100vh;background:#050409;color:#f3ead8;padding:24px;font:16px/1.5 system-ui,sans-serif"><h2>ASHBOUND FAILED TO WAKE</h2><p>${m}</p><p>Refresh once. If this persists, report the message above.</p></div>`;};
try{
 if(!('DecompressionStream' in self)) throw new Error('This browser does not support gzip loading.');
 const files=['ab0331.01.b64', 'ab0331.02.b64', 'ab0331.03.b64', 'ab0331.04.b64', 'ab0331.05.b64', 'ab0331.06.b64'];
 const texts=await Promise.all(files.map(async f=>{const r=await fetch(f,{cache:'no-store'});if(!r.ok)throw new Error(`Missing ${f} (${r.status})`);return (await r.text()).replace(/\s+/g,'');}));
 const joined=texts.join('');
 if(!joined) throw new Error('Game payload is empty.');
 let raw; try{raw=atob(joined)}catch(e){throw new Error('Game payload is not valid base64.')}
 const bytes=new Uint8Array(raw.length); for(let i=0;i<raw.length;i++)bytes[i]=raw.charCodeAt(i);
 let html; try{const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip')); html=await new Response(stream).text();}catch(e){throw new Error('Failed to Decode Data.')}
 if(!html.includes('ASHBOUND 0.33.0 HEARTHWARD ALPHA')) throw new Error('Wrong game payload version.');
 if(crypto?.subtle){const got=[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(html)))].map(b=>b.toString(16).padStart(2,'0')).join('');if(got!=='831f6ddcb964bbf647cff7237b25ad1441ec24863b7d13020462fee2d33af422')throw new Error('Game payload integrity check failed.');}
 document.open();document.write(html);document.close();
}catch(e){console.error(e);fail(e?.message||String(e));}
})();
