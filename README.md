# 3k2_f0rms
## Custom Marketo Form
### Purpose
Template that's able to support standard and custom forms without the complications of building multiple scripts to support different experiences.
### Scope
All internal and external pages. All languages.

## Version
### 2.9.5
## Variables
| JS Variable | EE Variable | Description | Values |
|-------------|-------------|-------------|--------|
|cid|cid|Salesforce ID|*eg:1bdasy1136s|
|fid|fid|Marketo Form ID|*eg:0000|
|lpid|lpid|Marketo Landing ID|*eg:00000|
|cms_hold|cmshold|Marketo Routing|HOT / default / web|
|action|action|Form Behavior on Submit|page / inline / inline-webinar / external|
|lang|lang|Page Language|*eg: en / es / jp|
|ty_f|tyfolder|Thank you Folder|*eg: /folder|
|p_url|page_url|Thank you URI|*eg: thispageurl|
|ty_in|inlinety|Inline Div ID for inline action|*eg: _in_id -> Final TY id: mktoForm_{fid}_in_id|
|but|but|Button Text|*eg: Submit / Register|
|f29|form29|Form Version|yes / no|
|multi||Muti-Form Setup (radio list) *needs custom template work|yes / no|
|type|type|Asset Type|*eg: brochure / datasheet / whitepaper / demo / test|
|bing|bingtrack|Bing Click Tracking Label|*eg: Contact Us|
|gci|gci|Google Conversion ID|*eg 000000000000|
|gcl|gcl|Google Conversion Label|*eg: ajsndwdnajwdnndaw|
|cap_id|cap_id|Capptera Tracking ID|*eg 000000000000|
|cap_key|cap_key|Capptera Key|*eg: ajsndwdnajwdnndaw|
|u_med|u_med|UTM Medium||
|u_src|u_src|UTM Source||
|u_term|u_term|UTM Term||
|u_camp|u_camp|UTM Campaign||
|u_cont|u_cont|UTM Content||
|matchtype|matchtype|Match Type|b=broad / p=phrase / e=exact|
|pre_html||Optional: Add Content on top of form|*eg: &lt;p&gt;hello&lt;/p&gt;|
|SCB|successCallBack|Optional: Add function call page after page submit *ONLY works in action 'inline'|alert('Call Back');|
## Addons
+ A/B Test on fields - (inprogress)

## Changelog
### Version 2.9.5
+ 09/14/2017: Updated main script to support A/B test
+ 09/13/2017: Updated to the latest version.
