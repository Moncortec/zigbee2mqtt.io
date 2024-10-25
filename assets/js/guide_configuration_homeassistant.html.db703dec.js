"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[55069],{47094:(s,n,a)=>{a.r(n),a.d(n,{comp:()=>i,data:()=>l});var e=a(24691);const t={},i=(0,a(89260).A)(t,[["render",function(s,n){const a=(0,e.g2)("RouteLink");return(0,e.uX)(),(0,e.CE)("div",null,[n[3]||(n[3]=(0,e.Lk)("h1",{id:"home-assistant-integration",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#home-assistant-integration"},[(0,e.Lk)("span",null,"Home Assistant integration")])],-1)),(0,e.Lk)("p",null,[n[1]||(n[1]=(0,e.eW)("See: ")),(0,e.bF)(a,{to:"/guide/usage/integrations/home_assistant.html"},{default:(0,e.k6)((()=>n[0]||(n[0]=[(0,e.eW)("Home Assistant integration guide")]))),_:1}),n[2]||(n[2]=(0,e.eW)("."))]),n[4]||(n[4]=(0,e.Fv)('<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># Optional: Home Assistant integration (MQTT discovery) (default: false)</span></span>\n<span class="line"><span class="token key atrule">homeassistant</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="advanced-configuration" tabindex="-1"><a class="header-anchor" href="#advanced-configuration"><span>Advanced configuration</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">homeassistant</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token comment"># Optional: Home Assistant discovery topic (default: shown below)</span></span>\n<span class="line">    <span class="token comment"># Note: should be different from [MQTT base topic](../mqtt.md) to prevent errors in HA software</span></span>\n<span class="line">    <span class="token key atrule">discovery_topic</span><span class="token punctuation">:</span> <span class="token string">&#39;homeassistant&#39;</span></span>\n<span class="line">    <span class="token comment"># Optional: Home Assistant status topic (default: shown below)</span></span>\n<span class="line">    <span class="token comment"># Note: in addition to the `status_topic`, &#39;homeassistant/status&#39; will also be used</span></span>\n<span class="line">    <span class="token key atrule">status_topic</span><span class="token punctuation">:</span> <span class="token string">&#39;hass/status&#39;</span></span>\n<span class="line">    <span class="token comment"># Optional: Home Assistant legacy entity attributes, (default: shown below), when enabled:</span></span>\n<span class="line">    <span class="token comment"># Zigbee2MQTT will send additional states as attributes with each entity. For example,</span></span>\n<span class="line">    <span class="token comment"># A temperature &amp; humidity sensor will have 2 entities for the temperature and</span></span>\n<span class="line">    <span class="token comment"># humidity, with this setting enabled both entities will also have</span></span>\n<span class="line">    <span class="token comment"># an temperature and humidity attribute.</span></span>\n<span class="line">    <span class="token comment"># Note: Disabling this option, requires a Home Assistant restart</span></span>\n<span class="line">    <span class="token key atrule">legacy_entity_attributes</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line">    <span class="token comment"># Optional: Home Assistant legacy triggers (default: shown below), when enabled:</span></span>\n<span class="line">    <span class="token comment"># - Zigbee2mqt will send an empty &#39;action&#39; or &#39;click&#39; after one has been send</span></span>\n<span class="line">    <span class="token comment"># - A &#39;sensor_action&#39; and &#39;sensor_click&#39; will be discoverd</span></span>\n<span class="line">    <span class="token key atrule">legacy_triggers</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3))])}]]),l=JSON.parse('{"path":"/guide/configuration/homeassistant.html","title":"Home Assistant integration","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1},"headers":[{"level":2,"title":"Advanced configuration","slug":"advanced-configuration","link":"#advanced-configuration","children":[]}],"git":{"updatedTime":1729888553000},"filePathRelative":"guide/configuration/homeassistant.md"}')}}]);