---
layout: default
title: Resources
ref: resources
lang: en
datatable-ids: t002, t003, t004
sections: About us
permalink: /resources.html
---
{%- assign tables = site.data.tables.references -%}

The following are reference materials for the IT Strategy team to use.

These materials are meant to be sources of inspiration, guidance, or policies that we need to consider when crafting our strategies.

Don't hesitate to send us proposals of books, articles, videos or even policies!

## {{ tables[0].name[page.lang] }}

{% include table.html table-id="t001" file="references"%}

## {{ tables[1].name[page.lang ]}}

{{ tables[1].description[page.lang ]}}

{% include table.html table-id="t002" file="references"%}

## {{ tables[2].name[page.lang ]}}

{{ tables[2].description[page.lang ]}}

{% include table.html table-id="t003" file="references"%}

## {{ tables[3].name[page.lang ]}}

{{ tables[3].description[page.lang ]}}

{% include table.html table-id="t004" file="references"%}
