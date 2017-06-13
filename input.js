<script type="text/javascript">
var cidcalc,
ciddefault = "7010B000001gGJH";
if ((getParameterByName("utm_medium") &&
getParameterByName("utm_source") &&
getParameterByName("cid")) || (getParameterByName("cms_medium") &&
getParameterByName("cms_source") &&
getParameterByName("cid"))) {
cidcalc = getParameterByName("cid");
} else if (getParameterByName("cid")) {
cidcalc = getParameterByName("cid");
} else if ((getParameterByName("utm_medium") &&
getParameterByName("utm_source") &&
!getParameterByName("cid")) || (getParameterByName("cms_medium") &&
getParameterByName("cms_source") &&
!getParameterByName("cid"))) {
cidcalc = "";
} else if (!getParameterByName("utm_medium") &&
!getParameterByName("utm_source") &&
!getParameterByName("cms_medium") &&
!getParameterByName("cms_source") &&
!getParameterByName("cid")) {
cidcalc = ciddefault;
} else {
cidcalc = ciddefault;
}

var getval = {
//MKTO Req
fid: "5332",
lpid: "56845",
cid: cidcalc,
cmshold: "default",
//Form Manipulation
action: "page",
lang: "/en",
tyfolder: "",
page_url: "2017-gartner-magic-quadrant-for-contact-center-infrastructure-worldwide",
inlinety: "",
//Cosmetics
but: "Read Now",
form29: "Yes",
//Tracking
type: "research-report",
bingtrack: "",
u_med: getParameterByName("utm_medium") || getParameterByName("cms_medium") || "web",
u_cont: getParameterByName("utm_content") || getParameterByName("cms_content") || "web",
u_src: getParameterByName("utm_source") || getParameterByName("cms_source") || "web"
};
//Send
createresourceform(getval);
</script>
