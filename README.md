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
|pre_html||Optional: Add Content on top of form|*eg: &lt;p&gt;hello&lt;/p&gt;|
|SCB|successCallBack|Optional: Add function call page after page submit *ONLY works in action 'inline'|alert('Call Back');|
## Addons
soon

## Changelog
### Version 2.9.5
Updated to the latest version.
