function createresourceform(obj) {
"use strict";
MktoForms2.loadForm("//app-sj07.marketo.com", obj.accid, obj.fid, function (form){
if (obj.lang == "/en") {obj.lang = "";}

var setvalues = {"CID": obj.cid,"utmmedium": obj.u_med,"utmadcontent": obj.u_cont,"utmwebsource": obj.u_src,"utmsource":obj.u_src,"utmcampaign": obj.u_camp,"utmkeyword": obj.u_term,"utmterm": obj.u_term,"matchtype": obj.matchtype,"CMS": obj.cmshold,"gAClientId" : getGaClientId('UA-3562190-1')};
form.setValues(setvalues);
if (obj.but != ""){$('#mktoForm_' + obj.fid + ' .mktoButton').html(obj.but);}
if (obj.lpid){form.addHiddenFields({"lpId": obj.lpid});}

MktoForms2.whenReady(function (form) {
var knownenabled = $('#mktoForm_' + obj.fid).hasClass("known-form");

if (obj.form29) {
$("#mktoForm_" + obj.fid).addClass('form29');
$("#mktoForm_" + obj.fid + " input"+","+"#mktoForm_" + obj.fid + " textarea").each(function () {var storelabel = $(this).siblings("label").text().replace('*', '').replace(':', '');$(this).attr('placeholder', storelabel);});
$("#mktoForm_" + obj.fid + " select").each(function () {var storelabel = $(this).siblings("label").text().replace('*', '').replace(':', '');var checksel = $("option:selected", this).text();if (checksel === "Select...") {$("option:selected", this).text(storelabel);}});
$('.mktoCheckboxList,.mktoRadioList').siblings('label').each(function(){$(this).addClass('must_show_label');});
}

if (knownenabled) {
var Cemail = getCookie('gen_mkto_e'),Cfirst = $('#mktoForm_' + obj.fid + ' .person_first').html(),Clast = $('#mktoForm_' + obj.fid + ' .person_last').html(),Ccountry = getCookie('gen_mkto_c'),Cstate = getCookie('gen_mkto_s');

if(Cfirst.match(/^[\w\d]+[\w\s\d]+/) && Clast.match(/^[\w\d]+[\w\s\d]+/)&&(!Cemail||!Ccountry)){document.getElementsByClassName("deletemyrecord")[0].click();}

if (Cemail !== "" && Cemail !== "undefined") {form.setValues({"Email": Cemail});$('#mktoForm_' + obj.fid + ' #Email').closest(".mktoFormRow").hide();}
if (Cfirst.match(/^[\w\d]+[\w\s\d]+/)) {form.setValues({"FirstName": Cfirst});$('#mktoForm_' + obj.fid + ' #FirstName').closest(".mktoFormRow").hide();}
if (Clast.match(/^[\w\d]+[\w\s\d]+/)) {form.setValues({"LastName": Clast});$('#mktoForm_' + obj.fid + ' #LastName').closest(".mktoFormRow").hide();}
if (Ccountry !== "" && Cemail !== "undefined") {form.setValues({"Country__c": Ccountry});$('#mktoForm_' + obj.fid + ' #Country__c').closest(".mktoFormRow").hide();}
if (Cstate !== "") {form.setValues({"StateProvince__c": Cstate});$('#mktoForm_' + obj.fid + ' #StateProvince__c').closest(".mktoFormRow").hide();}
if (Cfirst.match(/^[\w\d]+[\w\s\d]+/) && Clast.match(/^[\w\d]+[\w\s\d]+/)) {$('#mktoForm_' + obj.fid + ' #known_person').show();}}
});

if (obj.action == "page") {

form.onSuccess(function (values, followUpUrl) {
make_gen_mkto();
uetq_dl(obj.bingtrack);
ga_ads(obj);
ga_dl('marketo-2.0-form-submit-valid','landing-page','form-submit',obj.page_url,obj.type);
capterra_event();
setTimeout(function () {
if (obj.tyfolder) {var tyfolder = obj.tyfolder;} else {var tyfolder = "/resource-thank-you/";}
var ty_f_link = "http://www.genesys.com" + obj.lang + tyfolder + obj.page_url;
location.href = ty_f_link;
}, 200);
return false;
});

} else if (obj.action == "external") {

form.onSuccess(function (values, followUpUrl) {
make_gen_mkto();
uetq_dl(obj.bingtrack);
ga_ads(obj);
ga_dl('marketo-2.0-form-submit-valid','landing-page','form-submit',obj.page_url,obj.type);
capterra_event();
setTimeout(function () {
var ty_f_link = obj.page_url;
location.href = ty_f_link;
console.log(ty_f_link);
}, 200);
return false;
});


} else if (obj.action == "inline") {

form.onSuccess(function () {
make_gen_mkto();
uetq_dl(obj.bingtrack);
ga_ads(obj);
ga_dl('marketo-2.0-form-submit-valid','landing-page','form-submit',obj.page_url,obj.type);
capterra_event();
if (obj.successCallBack){obj.successCallBack();}
setTimeout(function () {form.getFormElem().hide(), $("#mktoForm_" + obj.fid + obj.inlinety).show()}, 200),!1;
return false;
});

} else if (obj.action == "inline-webinar") {

form.onSuccess(function () {
make_gen_mkto();
uetq_dl(obj.bingtrack);
ga_ads(obj);
ga_dl('marketo-2.0-form-submit-valid','landing-page','form-submit',obj.page_url,obj.type);
capterra_event();
setTimeout(function () {
form.getFormElem().hide(), $("#mktoForm_" + obj.inlinety).show();
var getcontentheight = $('#cboxLoadedContent .form-col').innerHeight();
$('#cboxLoadedContent').height(getcontentheight);
var getcont = $('#cboxLoadedContent').outerHeight(true);
$('#cboxContent,#cboxMiddleLeft,#cboxMiddleRight').animate({height: getcont}, {duration: 500,queue: false});
$('#colorbox,#cboxWrapper').animate({height: getcont + 42}, {duration: 500,queue: false});
var getbox = $('#colorbox').outerHeight(true),boxofset = $('#colorbox').offset();
$('#colorbox').animate({top: boxofset.top - (getbox + 42) / 2}, {duration: 500,queue: false});
}, 200),!1;
return false;
});
}
});

}

function uetq_dl(a){a&&(window.uetq=window.uetq||[],window.uetq.push({ea:"Form Submitted",el:a}))}
function ga_dl(a,b,c,d,e){dataLayer.push({event:a,eventCategory:b,eventAction:c,eventLabel:d,resourceType:e})}
function Qcheck(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b=new RegExp("[\\?&]"+a+"=([^&#]*)").exec(location.search);return null===b?"":decodeURIComponent(b[1].replace(/\+/g," "))}
function make_gen_mkto(){var a=$(".known-form #Email").val(),b=$(".known-form #Country__c").val(),c=$(".known-form #StateProvince__c").val(),d=new Date;d.setTime(d.getTime()+31536e6),a&&(document.cookie="gen_mkto_e="+a+";expires="+d.toUTCString()+";domain=.genesys.com;path=/;"),b&&(document.cookie="gen_mkto_c="+b+";expires="+d.toUTCString()+";domain=.genesys.com;path=/;"),c&&(document.cookie="gen_mkto_s="+c+";expires="+d.toUTCString()+";domain=.genesys.com;path=/;")}
function getCookie(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "===e.charAt(0);)e=e.substring(1);if(0===e.indexOf(b))return e.substring(b.length,e.length)}return""}
function getGaClientId(a){try{var b,c,d=ga.getAll();for(b=0,c=d.length;b<c;b+=1)if(d[b].get("trackingId")===a)return d[b].get("clientId")}catch(a){}return"false"}
function ga_ads(a, b) { var c = window , d = a.gcl , e = a.gci ,f = $(".mktoForm").length ,g = $(".ad_track").length; if(d){ if(c.vx||f>0){ fire_goog(c, d, e, b); } if(g>0){ $(".ad_track").click(function () { fire_goog(c, d, e, b); }); } }}
function fire_goog(a,b,c,d){a.google_conversion_id=c||997233217,a.google_conversion_label=b,a.google_remarketing_only=!1,a.google_conversion_format="3";var e=new Object;e.onload_callback=function(){"undefined"!=typeof d&&(window.location=d)};var f=window.google_trackConversion;"function"==typeof f&&f(e)}
function capterra_event(a,b){ a=a||"da3f9e9633fa0d194a4efae4036c7b34",b=b||"2008615",c="https:"==document.location.protocol?"https://ct.capterra.com":"http://ct.capterra.com";!function(){var d=document.createElement("script");d.type="text/javascript",d.async=!0,d.src=c+"/capterra_tracker.js?vid="+b+"&vkey="+a;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(d,e)}()}

