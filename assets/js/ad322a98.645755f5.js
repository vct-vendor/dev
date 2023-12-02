"use strict";(self.webpackChunkvct_vendor_github_io=self.webpackChunkvct_vendor_github_io||[]).push([[667],{5163:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>t,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=d(5893),r=d(1151);const o={},i="Also Bought",l={id:"also-bought",title:"Also Bought",description:"Leave review to help in further development",source:"@site/docs/also-bought.md",sourceDirName:".",slug:"/also-bought",permalink:"/also-bought",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"FAQ",permalink:"/faq"},next:{title:"Change SKU Dynamically",permalink:"/change-sku-dynamically"}},t={},c=[{value:"Overview",id:"overview",level:2},{value:"Tasks performed",id:"tasks-performed",level:3},{value:"Features",id:"features",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Create <kbd>VCT Also Bought</kbd> widget(s)",id:"create-vct-also-bought-widgets",level:2},{value:"<kbd>Update Products</kbd> in widget",id:"update-products-in-widget",level:3},{value:"Configure <kbd>vct_alsobought</kbd> cron group",id:"configure-vct_alsobought-cron-group",level:4},{value:"Configure Related products",id:"configure-related-products",level:3},{value:"Configure Up-Sell products",id:"configure-up-sell-products",level:3},{value:"Configure Cross-Sell products",id:"configure-cross-sell-products",level:3},{value:"Known issue",id:"known-issue",level:2},{value:"Examples",id:"examples",level:2},{value:"<kbd>Sidebar Main</kbd> container",id:"sidebar-main-container",level:3},{value:"<kbd>Mini-cart Promotion</kbd> container",id:"mini-cart-promotion-container",level:3},{value:"<kbd>Before Page Footer</kbd> container",id:"before-page-footer-container",level:3},{value:"Related products block",id:"related-products-block",level:3},{value:"Up-Sell products block",id:"up-sell-products-block",level:3},{value:"Cross-Sell products block",id:"cross-sell-products-block",level:3}];function h(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",input:"input",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"also-bought",children:"Also Bought"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://commercemarketplace.adobe.com/vct-alsobought.html#bazaarvoice.reviews.tab",children:"Leave review"})," to help in further development"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://commercemarketplace.adobe.com/vct-alsobought.html",children:(0,n.jsx)(s.img,{alt:"VCT Also Bought Logo",src:d(9633).Z+"",width:"481",height:"483"})})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://commercemarketplace.adobe.com/vct-alsobought.html",children:"Marketplace Page"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://commercemarketplace.adobe.com/vct-alsobought.html#product.info.details.release_notes",children:"Release Notes"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://commercemarketplace.adobe.com/vct-alsobought.html#product.info.details.quality_report",children:"Quality Report"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(s.p,{children:["This ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#module",children:"module"})," allows to add a block of products known as ",(0,n.jsx)(s.em,{children:'"Frequently Bought Together"'})," or ",(0,n.jsx)(s.em,{children:'"Who Bought This Also Bought"'}),". These ",(0,n.jsx)(s.em,{children:"Also Bought"})," products can be further displayed using a custom ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#widget",children:"widget"})," in a location of your choice or/and in ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#related-product",children:"Related"}),", ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#upsell",children:"Up-Sell"}),", ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#cross-sell",children:"Cross-Sell"})," products."]}),"\n",(0,n.jsxs)(s.p,{children:["This module will automatically create a list of products that were present in other customer orders, along with the currently viewed product. These products list is updated automatically according to the ",(0,n.jsx)(s.a,{href:"https://docs.magento.com/user-guide/system/cron.html",children:"cron schedule"})," you configure or manually in the ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#admin",children:"Admin"})," or using CLI command."]}),"\n",(0,n.jsx)(s.h3,{id:"tasks-performed",children:"Tasks performed"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Collect products that were present in other customer orders along with the product being viewed in a separate table using:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Cron (automatically according to schedule);"}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)("kbd",{children:"Update Products"})," button in ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#admin-area",children:"Admin"}),";"]}),"\n",(0,n.jsx)(s.li,{children:"CLI command."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Show ",(0,n.jsx)(s.em,{children:"Also Bought"})," products in:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["custom ",(0,n.jsx)("kbd",{children:"VCT Also Bought"})," ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#widget",children:"widget(s)"}),";"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#related-product",children:"Related"}),", ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#upsell",children:"Up-Sell"}),", ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#cross-sell",children:"Cross-Sell"})," products."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Show ",(0,n.jsx)(s.em,{children:"Also Bought"})," products in a widget(s) for:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Specific products manually selected;"}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#product-types",children:"All product types"}),", ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#bundle-product",children:"Bundle"}),", ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#configurable-product",children:"Configurable"}),", ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#downloadable-product",children:"Downloadable"}),", ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#grouped-product",children:"Grouped"}),", ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#simple-product",children:"Simple"}),", ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#virtual-product",children:"Virtual"})," products."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Show or hide ",(0,n.jsx)(s.em,{children:"Also Bought"})," products in ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#related-product",children:"Related"}),", ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#upsell",children:"Up-Sell"}),", ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#cross-sell",children:"Cross-Sell"})," products."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Show random ",(0,n.jsx)(s.em,{children:"Also Bought"})," products instead of last purchased products in a custom ",(0,n.jsx)("kbd",{children:"VCT Also Bought"})," ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#widget",children:"widget"}),", ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#related-product",children:"Related"}),", ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#upsell",children:"Up-Sell"}),", ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#cross-sell",children:"Cross-Sell"})," products."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Configure ",(0,n.jsx)(s.em,{children:"Also Bought"})," widget:","\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Set title for widget(s)."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Show or hide the following product card elements in ",(0,n.jsx)(s.em,{children:"Also Bought"})," widget of your choice separately for each widget:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Product image, Price box;"}),"\n",(0,n.jsx)(s.li,{children:"Reviews summary (products rating and number of reviews);"}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)("kbd",{children:"Add To Cart"}),", ",(0,n.jsx)("kbd",{children:"Add To Wish List"}),", ",(0,n.jsx)("kbd",{children:"Add To Compare"})," buttons."]}),"\n",(0,n.jsxs)(s.li,{children:["Configurable products options in case of ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-admin/catalog/product-attributes/swatches.html?lang=en",children:(0,n.jsx)("kbd",{children:"Visual Swatch"})})," or ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-admin/catalog/product-attributes/swatches.html?lang=en",children:(0,n.jsx)("kbd",{children:"Text Swatch"})}),";"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Set ",(0,n.jsx)(s.em,{children:"Also Bought"})," widget location of your choice from the following containers:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)("kbd",{children:"After Page Header"}),", ",(0,n.jsx)("kbd",{children:"After Page Header Top"}),", ",(0,n.jsx)("kbd",{children:"Alert Urls"}),";"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)("kbd",{children:"Before Main Columns"}),", ",(0,n.jsx)("kbd",{children:"Main Content Top"}),", ",(0,n.jsx)("kbd",{children:"Main Content Container"}),", ",(0,n.jsx)("kbd",{children:"Main Content Area"}),", ",(0,n.jsx)("kbd",{children:"Main Content Aside"}),", ",(0,n.jsx)("kbd",{children:"Main Content Bottom"}),";"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)("kbd",{children:"Mini-Cart Promotion Block"}),";"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)("kbd",{children:"Page Header"}),", ",(0,n.jsx)("kbd",{children:"Page Header Container"}),", ",(0,n.jsx)("kbd",{children:"Page Header Panel"}),", ",(0,n.jsx)("kbd",{children:"Page Top"}),", ",(0,n.jsx)("kbd",{children:"Page Bottom"}),";"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)("kbd",{children:"Product Auxiliary Info"}),", ",(0,n.jsx)("kbd",{children:"Product Info Auxiliary Container"}),", ",(0,n.jsx)("kbd",{children:"Product Social Links Container"}),", ",(0,n.jsx)("kbd",{children:"Product View Extra Hint"}),", ",(0,n.jsx)("kbd",{children:"Review Form Fields Before"}),";"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)("kbd",{children:"Sidebar Main"}),", ",(0,n.jsx)("kbd",{children:"Sidebar Additional"}),", ",(0,n.jsx)("kbd",{children:"Compare Link Wrapper"}),";"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)("kbd",{children:"Before Page Footer"}),", ",(0,n.jsx)("kbd",{children:"Page Footer"}),", ",(0,n.jsx)("kbd",{children:"Before Page Footer Container"}),", ",(0,n.jsx)("kbd",{children:"Page Footer Container"}),", ",(0,n.jsx)("kbd",{children:"CMS Footer Links"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"features",children:"Features"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Wide customization of the ",(0,n.jsx)(s.em,{children:"Also Bought"})," product block by implementing it with a ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#widget",children:"widget"}),"."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Tested and verified by ",(0,n.jsx)(s.a,{href:"https://developer.adobe.com/commerce/marketplace/guides/sellers/extension-quality-program",children:"Adobe Extension Quality Program"}),"."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Meets ",(0,n.jsx)(s.a,{href:"https://developer.adobe.com/commerce/php/coding-standards",children:"Magento Coding Standard"}),"."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,n.jsx)(s.a,{href:"https://developer.adobe.com/commerce/php/development/components/plugins",children:"Plugins (Interceptors)"})," are used to prevent conflicts among ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#module",children:"modules"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(s.admonition,{type:"danger",children:[(0,n.jsxs)(s.mdxAdmonitionTitle,{children:["Use ",(0,n.jsx)(s.a,{href:"https://getcomposer.org/doc/00-intro.md",children:"Composer"})," to install the module or download the code for review:"]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://account.magento.com/customer/account/login",children:"Log in"})," to your Marketplace account that purchased this module;"]}),"\n",(0,n.jsxs)(s.li,{children:["Ensure you are using correct access keys from ",(0,n.jsx)("kbd",{children:"My Profile"})," ",(0,n.jsx)("kbd",{children:(0,n.jsx)(s.a,{href:"https://commercemarketplace.adobe.com/customer/accessKeys",children:"Access Keys"})})," page;"]}),"\n",(0,n.jsxs)(s.li,{children:["Paste the ",(0,n.jsx)("kbd",{children:"Public Key"})," and ",(0,n.jsx)("kbd",{children:"Private Key"})," in ",(0,n.jsx)(s.code,{children:"auth.json"})," file inside your project e.g.:"]}),"\n"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-txt",metastring:'title="auth.json" {4-5}',children:'...\n    "http-basic": {\n        "repo.magento.com": {\n            "username": "<Public Key>",\n            "password": "<Private Key>"\n        }\n    }\n...\n'})}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Ensure the file is renamed from ",(0,n.jsx)(s.code,{children:"auth.json.sample"})," to ",(0,n.jsx)(s.code,{children:"auth.json"}),";"]}),"\n",(0,n.jsx)(s.li,{children:"Run the following commands:"}),"\n"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"composer require vct/alsobought # Install module with Composer\nbin/magento setup:upgrade # Update the database schema and data\n\nbin/magento setup:static-content:deploy --force # Deploy static view files\nbin/magento setup:di:compile # Compile the code\n"})})]}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.mdxAdmonitionTitle,{children:["Help for common issues is on the ",(0,n.jsx)(s.a,{href:"/faq#installation",children:"FAQ page"}),". For further assistance, please contact me by email ",(0,n.jsx)(s.a,{href:"mailto:vct.vendor@gmail.com?subject=Installation%20issue",children:"vct.vendor@gmail.com"}),"."]})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/prerequisites/authentication-keys.html?lang=en",children:"Get your authentication keys"})," and ",(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/tutorials/extensions.html?lang=en",children:"install an extension"})," in the Magento documentation."]}),"\n",(0,n.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(s.admonition,{type:"danger",children:(0,n.jsxs)(s.mdxAdmonitionTitle,{children:[(0,n.jsx)("kbd",{children:"Flush Magento Cache"})," in ",(0,n.jsx)("kbd",{children:"SYSTEM"})," ",(0,n.jsx)("kbd",{children:"Tools"})," ",(0,n.jsx)("kbd",{children:"Cache Management"})," after configuration change to see the changes!"]})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/manage-cache.html?lang=en#clean-and-flush-cache-types",children:"Clean and flush cache types"})," in the Magento documentation."]}),"\n",(0,n.jsxs)(s.h2,{id:"create-vct-also-bought-widgets",children:["Create ",(0,n.jsx)("kbd",{children:"VCT Also Bought"})," widget(s)"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.mdxAdmonitionTitle,{children:["Use a custom ",(0,n.jsx)("kbd",{children:"VCT Also Bought"})," widget to display ",(0,n.jsx)(s.em,{children:"Also Bought"})," products: ",(0,n.jsx)("kbd",{children:"Content"})," ",(0,n.jsx)("kbd",{children:"ELEMENTS"})," ",(0,n.jsx)("kbd",{children:"Widgets"})," ",(0,n.jsx)("kbd",{children:"Add Widget"})," ",(0,n.jsx)("kbd",{children:"WIDGET"})," ",(0,n.jsx)("kbd",{children:"SETTINGS"})," ",(0,n.jsx)("kbd",{children:"Type"})," ",(0,n.jsx)("kbd",{children:"VCT Also Bought"}),"."]})}),"\n",(0,n.jsx)(s.admonition,{title:"Widget configs can be set separately for each widget.",type:"warning"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://docs.magento.com/user-guide/cms/widget-create.html",children:"Creating and managing widgets"})," in the Magento documentation."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)("kbd",{children:"Content"})," ",(0,n.jsx)("kbd",{children:"ELEMENTS"})," ",(0,n.jsx)("kbd",{children:"Widgets"})," ",(0,n.jsx)("kbd",{children:"[VCT Also Bought]"})," ",(0,n.jsx)("kbd",{children:"WIDGET"})," ",(0,n.jsx)("kbd",{children:"Widget Options"}),":"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Config"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Default"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Widget Block Title"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"string"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"none"})}),(0,n.jsx)(s.td,{children:"Widget block title in the frontend."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Random Products"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Yes"}),(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"No"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"No"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Yes"})," to display random and ",(0,n.jsx)("kbd",{children:"No"})," to display newest ",(0,n.jsx)(s.em,{children:"Also Bought"})," products."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Products Number"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"int"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"5"})}),(0,n.jsxs)(s.td,{children:["Number of displayed ",(0,n.jsx)(s.em,{children:"Also Bought"})," products."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Number Of Columns"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"int"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"5"})}),(0,n.jsxs)(s.td,{children:["Number of columns display in ",(0,n.jsx)(s.em,{children:"Also Bought"})," widget."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Show Product Image"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Yes"}),(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"No"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Yes"})}),(0,n.jsx)(s.td,{children:"Show or hide product image(s)."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Show Reviews Summary"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Yes"}),(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"No"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Yes"})}),(0,n.jsx)(s.td,{children:"Show or hide product rating and number of reviews."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Show Price"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Yes"}),(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"No"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Yes"})}),(0,n.jsx)(s.td,{children:"Show or hide product price."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Show Swatches"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Yes"}),(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"No"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"No"})}),(0,n.jsx)(s.td,{children:"Show or hide swatches (configurable products options)."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Show Add To Cart"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Yes"}),(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"No"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Yes"})}),(0,n.jsxs)(s.td,{children:["Show or hide ",(0,n.jsx)("kbd",{children:"Add To Cart"})," button."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Show Add To Wish List"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Yes"}),(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"No"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Yes"})}),(0,n.jsxs)(s.td,{children:["Show or hide ",(0,n.jsx)("kbd",{children:"Add To Wish List"})," button."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Show Add To Compare"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Yes"}),(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"No"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Yes"})}),(0,n.jsxs)(s.td,{children:["Show or hide ",(0,n.jsx)("kbd",{children:"Add To Compare"})," button."]})]})]})]}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.mdxAdmonitionTitle,{children:["To display products in a single row, set the ",(0,n.jsx)("kbd",{children:"Number Of Columns"})," to a value equal to or greater than the ",(0,n.jsx)("kbd",{children:"Products Number"}),"."]})}),"\n",(0,n.jsxs)(s.h3,{id:"update-products-in-widget",children:[(0,n.jsx)("kbd",{children:"Update Products"})," in widget"]}),"\n",(0,n.jsxs)(s.admonition,{type:"danger",children:[(0,n.jsxs)(s.mdxAdmonitionTitle,{children:["Changes in ",(0,n.jsx)(s.em,{children:"Also Bought"})," product list will be visible in the frontend only after updating the products using:"]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["cron (scheduled tasks) in ",(0,n.jsx)("kbd",{children:"Stores"})," ",(0,n.jsx)("kbd",{children:"SETTINGS"})," ",(0,n.jsx)("kbd",{children:"Configuration"})," ",(0,n.jsx)("kbd",{children:"ADVANCED"})," ",(0,n.jsx)("kbd",{children:"System"})," ",(0,n.jsx)("kbd",{children:"Cron (Scheduled Tasks)"})," ",(0,n.jsx)("kbd",{children:"Cron configuration options for group: vct_alsobought"}),";"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)("kbd",{children:"Update Products"})," button in Admin in ",(0,n.jsx)("kbd",{children:"Stores"})," ",(0,n.jsx)("kbd",{children:"SETTINGS"})," ",(0,n.jsx)("kbd",{children:"Configuration"})," ",(0,n.jsx)("kbd",{children:"VCT"})," ",(0,n.jsx)("kbd",{children:"Also Bought"})," ",(0,n.jsx)("kbd",{children:"Update"}),";"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"bin/magento vct:alsobought:update"})," command."]}),"\n"]})]}),"\n",(0,n.jsxs)(s.h4,{id:"configure-vct_alsobought-cron-group",children:["Configure ",(0,n.jsx)("kbd",{children:"vct_alsobought"})," cron group"]}),"\n",(0,n.jsxs)(s.p,{children:["Configure ",(0,n.jsx)("kbd",{children:"Cron configuration options for group: vct_alsobought"})," in ",(0,n.jsx)("kbd",{children:"Stores"})," ",(0,n.jsx)("kbd",{children:"SETTINGS"})," ",(0,n.jsx)("kbd",{children:"Configuration"})," ",(0,n.jsx)("kbd",{children:"ADVANCED"})," ",(0,n.jsx)("kbd",{children:"System"})," ",(0,n.jsx)("kbd",{children:"Cron (Scheduled Tasks)"})," to set a schedule for ",(0,n.jsx)(s.em,{children:"Also Bought"})," products updates."]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.mdxAdmonitionTitle,{children:["By default, ",(0,n.jsx)(s.em,{children:"Also Bought"})," products are updated with cron ",(0,n.jsx)(s.strong,{children:"every 60 minutes"}),"."]})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://experienceleague.adobe.com/docs/commerce-admin/systems/tools/cron.html?lang=en#configure-cron",children:"Cron (scheduled tasks)"})," in the Magento documentation."]}),"\n",(0,n.jsx)(s.h3,{id:"configure-related-products",children:"Configure Related products"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)("kbd",{children:"Stores"})," ",(0,n.jsx)("kbd",{children:"SETTINGS"})," ",(0,n.jsx)("kbd",{children:"Configuration"})," ",(0,n.jsx)("kbd",{children:"VCT"})," ",(0,n.jsx)("kbd",{children:"Also Bought"}),":"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Config"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Default"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Show By Related"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Yes"}),(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"No"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Yes"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Yes"})," to add ",(0,n.jsx)(s.em,{children:"Also Bought"})," products to Related products.",(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"No"})," to remove previously added ",(0,n.jsx)(s.em,{children:"Also Bought"})," products from Related products."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Random In Related"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Yes"}),(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"No"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"No"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Yes"})," to display random ",(0,n.jsx)(s.em,{children:"Also Bought"})," products in Related products.",(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"No"})," to display newest ",(0,n.jsx)(s.em,{children:"Also Bought"})," products in Related products."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Position In Related"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Before"}),(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"After"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"After"})}),(0,n.jsxs)(s.td,{children:["Show ",(0,n.jsx)(s.em,{children:"Also Bought"})," products ",(0,n.jsx)("kbd",{children:"Before"})," or ",(0,n.jsx)("kbd",{children:"After"})," Related products."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Products Number In Related"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"int"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"2"})}),(0,n.jsxs)(s.td,{children:["Number of ",(0,n.jsx)(s.em,{children:"Also Bought"})," products in Related products."]})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"configure-up-sell-products",children:"Configure Up-Sell products"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)("kbd",{children:"Stores"})," ",(0,n.jsx)("kbd",{children:"SETTINGS"})," ",(0,n.jsx)("kbd",{children:"Configuration"})," ",(0,n.jsx)("kbd",{children:"VCT"})," ",(0,n.jsx)("kbd",{children:"Also Bought"}),":"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Config"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Default"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Show By Up-Sell"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Yes"}),(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"No"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Yes"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Yes"})," to add ",(0,n.jsx)(s.em,{children:"Also Bought"})," products to Up-Sell products.",(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"No"})," to remove previously added ",(0,n.jsx)(s.em,{children:"Also Bought"})," products from Up-Sell products."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Random In Up-Sell"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Yes"}),(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"No"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"No"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Yes"})," to display random ",(0,n.jsx)(s.em,{children:"Also Bought"})," products in Up-Sell products.",(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"No"})," to display newest ",(0,n.jsx)(s.em,{children:"Also Bought"})," products in Up-Sell products."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Position In Up-Sell"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Before"}),(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"After"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"After"})}),(0,n.jsxs)(s.td,{children:["Show ",(0,n.jsx)(s.em,{children:"Also Bought"})," products ",(0,n.jsx)("kbd",{children:"Before"})," or ",(0,n.jsx)("kbd",{children:"After"})," Up-Sell products."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Products Number In Up-Sell"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"int"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"2"})}),(0,n.jsxs)(s.td,{children:["Number of ",(0,n.jsx)(s.em,{children:"Also Bought"})," products in Up-Sell products."]})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"configure-cross-sell-products",children:"Configure Cross-Sell products"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)("kbd",{children:"Stores"})," ",(0,n.jsx)("kbd",{children:"SETTINGS"})," ",(0,n.jsx)("kbd",{children:"Configuration"})," ",(0,n.jsx)("kbd",{children:"VCT"})," ",(0,n.jsx)("kbd",{children:"Also Bought"}),":"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Config"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Default"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Show By Cross-Sell"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Yes"}),(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"No"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Yes"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Yes"})," to add ",(0,n.jsx)(s.em,{children:"Also Bought"})," products to Cross-Sell products.",(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"No"})," to remove previously added ",(0,n.jsx)(s.em,{children:"Also Bought"})," products from Cross-Sell products."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Random In Cross-Sell"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Yes"}),(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"No"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"No"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Yes"})," to display random ",(0,n.jsx)(s.em,{children:"Also Bought"})," products in Cross-Sell products.",(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"No"})," to display newest ",(0,n.jsx)(s.em,{children:"Also Bought"})," products in Cross-Sell products."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Position In Cross-Sell"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("kbd",{children:"Before"}),(0,n.jsx)("br",{}),(0,n.jsx)("kbd",{children:"After"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"After"})}),(0,n.jsxs)(s.td,{children:["Show ",(0,n.jsx)(s.em,{children:"Also Bought"})," products ",(0,n.jsx)("kbd",{children:"Before"})," or ",(0,n.jsx)("kbd",{children:"After"})," Cross-Sell products."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"Products Number In Cross-Sell"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"int"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)("kbd",{children:"2"})}),(0,n.jsxs)(s.td,{children:["Number of ",(0,n.jsx)(s.em,{children:"Also Bought"})," products in Cross-Sell products."]})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"known-issue",children:"Known issue"}),"\n",(0,n.jsxs)(s.admonition,{type:"warning",children:[(0,n.jsx)(s.mdxAdmonitionTitle,{children:(0,n.jsx)(s.strong,{children:"ISSUE"})}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)("kbd",{children:"Add To Cart"})," button in products card can cause a JavaScript error in containers containing a ",(0,n.jsx)("code",{children:"form"})," tag e.g. ",(0,n.jsx)("kbd",{children:"Review Form Fields Before"})," container."]}),(0,n.jsxs)(s.p,{children:["This is happening because the button itself already contains a ",(0,n.jsx)("code",{children:"form"})," tag."]})]}),"\n",(0,n.jsxs)(s.admonition,{type:"tip",children:[(0,n.jsx)(s.mdxAdmonitionTitle,{children:(0,n.jsx)(s.strong,{children:"FIX"})}),(0,n.jsxs)(s.p,{children:["Set ",(0,n.jsx)("kbd",{children:"Content"})," ",(0,n.jsx)("kbd",{children:"ELEMENTS"})," ",(0,n.jsx)("kbd",{children:"Widgets"})," ",(0,n.jsx)("kbd",{children:"[VCT Also Bought]"})," ",(0,n.jsx)("kbd",{children:"WIDGET"})," ",(0,n.jsx)("kbd",{children:"Widget Options"})," ",(0,n.jsx)("kbd",{children:"Show Add To Cart"})," to ",(0,n.jsx)("kbd",{children:"No"})," to disable ",(0,n.jsx)("kbd",{children:"Add To Cart"})," button in containers with a ",(0,n.jsx)("code",{children:"form"})," tag."]})]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.admonition,{title:"Only some examples are demonstrated here!",type:"info"}),"\n",(0,n.jsxs)(s.h3,{id:"sidebar-main-container",children:[(0,n.jsx)("kbd",{children:"Sidebar Main"})," container"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Sidebar Main container",src:d(8713).Z+"",width:"1385",height:"702"})}),"\n",(0,n.jsxs)(s.h3,{id:"mini-cart-promotion-container",children:[(0,n.jsx)("kbd",{children:"Mini-cart Promotion"})," container"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Mini-cart Promotion container",src:d(999).Z+"",width:"1081",height:"897"})}),"\n",(0,n.jsxs)(s.h3,{id:"before-page-footer-container",children:[(0,n.jsx)("kbd",{children:"Before Page Footer"})," container"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Before Page Footer container",src:d(1321).Z+"",width:"1842",height:"792"})}),"\n",(0,n.jsx)(s.h3,{id:"related-products-block",children:"Related products block"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Related products block",src:d(4229).Z+"",width:"1234",height:"609"})}),"\n",(0,n.jsx)(s.h3,{id:"up-sell-products-block",children:"Up-Sell products block"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Up-Sell products block",src:d(6460).Z+"",width:"931",height:"512"})}),"\n",(0,n.jsx)(s.h3,{id:"cross-sell-products-block",children:"Cross-Sell products block"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Cross-Sell products block",src:d(5609).Z+"",width:"1111",height:"787"})})]})}function a(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9633:(e,s,d)=>{d.d(s,{Z:()=>n});const n=d.p+"assets/images/Vct_AlsoBought-8b32b9d7126e6c09ae5e8290c39b05bd.svg"},1321:(e,s,d)=>{d.d(s,{Z:()=>n});const n=d.p+"assets/images/frontend-before-page-footer-b3c8ed923adcb14143416a0e1872c2d9.png"},5609:(e,s,d)=>{d.d(s,{Z:()=>n});const n=d.p+"assets/images/frontend-cross-sell-6bd3a87cd7c75b598717351a08fd8d1f.png"},999:(e,s,d)=>{d.d(s,{Z:()=>n});const n=d.p+"assets/images/frontend-mini-cart-f60752ab2b38ee3f9c342e8031dbb61f.png"},4229:(e,s,d)=>{d.d(s,{Z:()=>n});const n=d.p+"assets/images/frontend-related-18f12c62749e43abc8fa44ac04bc8844.png"},8713:(e,s,d)=>{d.d(s,{Z:()=>n});const n=d.p+"assets/images/frontend-sidebar-main-hover-4037c57c0273cfce55e4f9bdd22844fd.png"},6460:(e,s,d)=>{d.d(s,{Z:()=>n});const n=d.p+"assets/images/frontend-up-sell-9d30bdbeb5a90ecbcd12a9b159ea82f9.png"},1151:(e,s,d)=>{d.d(s,{Z:()=>l,a:()=>i});var n=d(7294);const r={},o=n.createContext(r);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);