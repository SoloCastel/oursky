// Same-origin fallback for public CDS HiPS2FITS survey thumbnails.
// Restricts user input and upstream hosts to avoid open-proxy behavior.
export default async function handler(req,res){
 const p=req.query||{};
 const ra=Number(p.ra),dec=Number(p.dec),fov=Number(p.fov);
 const width=Math.min(900,Math.max(80,Number(p.width)||320));
 const height=Math.min(900,Math.max(80,Number(p.height)||240));
 if(!Number.isFinite(ra)||!Number.isFinite(dec)||!Number.isFinite(fov)||ra<0||ra>=360||dec< -90||dec>90||fov<=0||fov>45){
  res.status(400).send('Invalid astronomical coordinates');return;
 }
 const query=new URLSearchParams({hips:'CDS/P/DSS2/color',ra:String(ra),dec:String(dec),fov:String(fov),width:String(Math.round(width)),height:String(Math.round(height)),projection:'TAN',coordsys:'icrs',format:'jpg'});
 const hosts=['alaskybis.cds.unistra.fr','alasky.cds.unistra.fr'];
 for(const host of hosts){
  try{
   const signal=AbortSignal.timeout(9000);
   const response=await fetch('https://'+host+'/hips-image-services/hips2fits?'+query,{signal});
   if(!response.ok||!response.headers.get('content-type')?.startsWith('image/'))continue;
   const bytes=await response.arrayBuffer();
   if(!bytes.byteLength||bytes.byteLength>5000000)continue;
   res.setHeader('Content-Type','image/jpeg');
   res.setHeader('Cache-Control','public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400');
   res.status(200).send(Buffer.from(bytes));return;
  }catch{}
 }
 res.setHeader('Cache-Control','public, max-age=60, s-maxage=180');
 res.status(503).send('CDS survey temporarily unavailable');
}
