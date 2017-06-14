var d_cid="XXXXXX",u_cont=Qcheck("utm_content")||Qcheck("cms_content"),u_med=Qcheck("utm_medium")||Qcheck("cms_medium"),u_src=Qcheck("utm_source")||Qcheck("cms_source"),q_cid=Qcheck("cid");
if((u_med && u_src && q_cid)){d_cid = q_cid;}else if((u_med && u_src && !q_cid)){d_cid = "";}else if(q_cid){d_cid = q_cid;}else{d_cid = d_cid;}
var vx = {accid:"426-TDW-681",fid:"5332",lpid:"11111",cid:d_cid,cmshold:"default",action:"page",lang:"/en",tyfolder:"",page_url:"test",inlinety:"",but:"Read Now",form29:"Yes",type:"test",bingtrack:"",u_med:u_med||"web",u_cont:u_cont||"web",u_src:u_src||"web"};
createresourceform(vx);
