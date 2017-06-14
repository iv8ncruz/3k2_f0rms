function createresourceform(obj) {
"use strict";
MktoForms2.loadForm("//app-sj07.marketo.com", obj.accid, obj.fid, function (form){
if (obj.lang == "/en") {obj.lang = "";}

var setvalues = {"CID": obj.cid,"utmmedium": obj.u_med,"utmadcontent": obj.u_cont,"utmwebsource": obj.u_src,"CMS": obj.cmshold,"gAClientId" : getGaClientId('UA-3562190-1')};
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
if (obj.tyfolder) {var tyfolder = obj.tyfolder;} else {var tyfolder = "/resource-thank-you/";}
form.onSuccess(function (values, followUpUrl) {make_gen_mkto();

if (obj.bingtrack) {window.uetq = window.uetq || [];window.uetq.push({'ea': 'Form Submitted','el': obj.bingtrack});}

dataLayer.push({'event': 'marketo-2.0-form-submit-valid','eventCategory': 'landing-page','eventAction': 'form-submit','eventLabel': obj.page_url,'resourceType': obj.type});

setTimeout(function () {
var ty_f_link = "http://www.genesys.com" + obj.lang + tyfolder + obj.page_url;

if(ty_f_link.indexOf('?') != -1){var XYZ = "&";}else{var XYZ = "?";};

var Add_query = "";
if (obj.ga_c_label){Add_query = Add_query+XYZ+"gcl="+obj.ga_c_label;}
if (obj.ga_c_id){Add_query = Add_query+"&gci="+obj.ga_c_i;}

location.href = ty_f_link+Add_query;
}, 200);
return false;});

} else if (obj.action == "inline") {
form.onSuccess(function () {
make_gen_mkto();
if (obj.bingtrack) {
window.uetq = window.uetq || [];
window.uetq.push({
'ea': 'Form Submitted',
'el': obj.bingtrack
});
}

if (obj.successCallBack){
obj.successCallBack();
}

return dataLayer.push({
'event': 'marketo-2.0-form-submit-valid',
'eventCategory': 'landing-page',
'eventAction': 'form-submit',
'eventLabel': obj.page_url,
'resourceType': obj.type
}), setTimeout(function () {
form.getFormElem().hide(), $("#mktoForm_" + obj.fid + obj.inlinety).show()
}, 200), !1;
});
} else if (obj.action == "inline-webinar") {
form.onSuccess(function () {
make_gen_mkto();
if (obj.bingtrack) {
window.uetq = window.uetq || [];
window.uetq.push({
'ea': 'Form Submitted',
'el': obj.bingtrack
});
}
return dataLayer.push({
'event': 'marketo-2.0-form-submit-valid',
'eventCategory': 'landing-page',
'eventAction': 'form-submit',
'eventLabel': obj.page_url,
'resourceType': obj.type
}), setTimeout(function () {
form.getFormElem().hide(), $("#mktoForm_" + obj.inlinety).show();

var getcontentheight = $('#cboxLoadedContent .form-col').innerHeight();
$('#cboxLoadedContent').height(getcontentheight);
var getcont = $('#cboxLoadedContent').outerHeight(true);
//$('#cboxContent,#cboxMiddleLeft,#cboxMiddleRight').height(getcont);
//$('#colorbox,#cboxWrapper').height(getcont+42);
$('#cboxContent,#cboxMiddleLeft,#cboxMiddleRight').animate({
height: getcont
}, {
duration: 500,
queue: false
});
$('#colorbox,#cboxWrapper').animate({
height: getcont + 42
}, {
duration: 500,
queue: false
});
var getbox = $('#colorbox').outerHeight(true);
var boxofset = $('#colorbox').offset();
$('#colorbox').animate({
top: boxofset.top - (getbox + 42) / 2
}, {
duration: 500,
queue: false
});
}, 200), !1;
});
}
});
}

function Qcheck(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var c=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===c?"":decodeURIComponent(c[1].replace(/\+/g," "))}
function make_gen_mkto(){var e=$(".known-form #Email").val(),o=$(".known-form #Country__c").val(),n=$(".known-form #StateProvince__c").val(),t=new Date;t.setTime(t.getTime()+31536e6),e&&(document.cookie="gen_mkto_e="+e+";expires="+t.toUTCString()+";domain=.genesys.com;path=/;"),o&&(document.cookie="gen_mkto_c="+o+";expires="+t.toUTCString()+";domain=.genesys.com;path=/;"),n&&(document.cookie="gen_mkto_s="+n+";expires="+t.toUTCString()+";domain=.genesys.com;path=/;")}
function getCookie(t){for(var n=t+"=",r=document.cookie.split(";"),e=0;e<r.length;e++){for(var i=r[e];" "===i.charAt(0);)i=i.substring(1);if(0===i.indexOf(n))return i.substring(n.length,i.length)}return""}
function getGaClientId(t){try{var e,n,r=ga.getAll();for(e=0,n=r.length;e<n;e+=1)if(r[e].get("trackingId")===t)return r[e].get("clientId")}catch(t){}return"false"}
