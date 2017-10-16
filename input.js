var d_cid='',
bing=Qcheck('bing')||'',
gci=Qcheck('gci')||'',
gcl=Qcheck('gcl')||'',
u_camp=Qcheck('utm_campaign'),
u_cont=Qcheck('utm_content'),
u_med=Qcheck('utm_medium')||'web',
u_src=Qcheck('utm_source')||'web',
u_term=Qcheck('utm_term'),
matchtype=Qcheck('matchtype'),
q_cid=Qcheck('cid')||'';

if((u_med!='web' && u_src!='web' && q_cid)){d_cid = q_cid;}
else if((u_med!='web' && u_src!='web' && !q_cid)){d_cid = '';}
else if(q_cid){d_cid = q_cid;}else{d_cid = d_cid;}

vx = {accid:'426-TDW-681',
fid:'5332',//Test Form ID
lpid:'00000',//Test LP ID
cid:d_cid,
cmshold:'default',
action:'external',
lang:'',
tyfolder:'',
page_url:'https://github.com/iv8ncruz/3k2_f0rms',
inlinety:'',
but:'Submit Button',
form29:'Yes',
type:'test',
bingtrack:bing,
u_med:u_med||'web',
u_cont:u_cont||'web',
u_camp:u_camp,
u_term:u_term,
u_src:u_src||'web',
matchtype:matchtype,
gcl:gcl,
gci:gci,
cap_id:'',
cap_key:''
};
//Run Function
createresourceform(vx);
