import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,b as a}from"./app.04f18738.js";const d={},s=a(`<p><code>more</code> \u6CE8\u91CA\u4E4B\u524D\u7684\u5185\u5BB9\u88AB\u89C6\u4E3A\u6587\u7AE0\u6458\u8981\u3002</p><h2 id="\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7406" aria-hidden="true">#</a> \u4EE3\u7406</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u4F7F\u7528http\u4EE3\u7406 
git config --global http.proxy http://127.0.0.1:1080
git config --global https.proxy https://127.0.0.1:1080
#\u4F7F\u7528socks5\u4EE3\u7406
git config --global http.proxy socks5://127.0.0.1:1080
git config --global https.proxy socks5://127.0.0.1:1080


#\u4F7F\u7528socks5\u4EE3\u7406\uFF08\u63A8\u8350\uFF09
git config --global http.https://github.com.proxy socks5://127.0.0.1:1080
#\u4F7F\u7528http\u4EE3\u7406\uFF08\u4E0D\u63A8\u8350\uFF09
git config --global http.https://github.com.proxy http://127.0.0.1:1080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53D6\u6D88\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u53D6\u6D88\u4EE3\u7406" aria-hidden="true">#</a> \u53D6\u6D88\u4EE3\u7406</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git config --global --unset http.proxy
git config --global --unset https.proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u514B\u9686\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u514B\u9686\u9879\u76EE" aria-hidden="true">#</a> \u514B\u9686\u9879\u76EE</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git clone https://github.com/qq547176052/qq547176052.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5728\u547D\u4EE4\u884C\u4E0A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5728\u547D\u4EE4\u884C\u4E0A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4ED3\u5E93" aria-hidden="true">#</a> \u5728\u547D\u4EE4\u884C\u4E0A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4ED3\u5E93</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>echo &quot;# 547176052&quot; &gt;&gt; README.md
git init
git add README.md
git commit -m &quot;1.0.0&quot;

git remote add origin https://github.com/qq547176052/qq547176052.git
git branch -M master
\u8BBE\u7F6E\u5206\u652F
git push --set-upstream origin master
git push -u origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63A8\u9001\u73B0\u6709\u7684\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u63A8\u9001\u73B0\u6709\u7684\u4ED3\u5E93" aria-hidden="true">#</a> \u63A8\u9001\u73B0\u6709\u7684\u4ED3\u5E93</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git add .
git commit -m &quot;1.0.1&quot;
git push -u origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5F3A\u5236\u63A8\u9001" tabindex="-1"><a class="header-anchor" href="#\u5F3A\u5236\u63A8\u9001" aria-hidden="true">#</a> \u5F3A\u5236\u63A8\u9001</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git push -f origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u5F53\u524D\u4ED3\u5E93\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5F53\u524D\u4ED3\u5E93\u5730\u5740" aria-hidden="true">#</a> \u67E5\u770B\u5F53\u524D\u4ED3\u5E93\u5730\u5740</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git remote show origin

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BBE\u7F6E\u65B0\u7684\u4ED3\u5E93\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u65B0\u7684\u4ED3\u5E93\u5730\u5740" aria-hidden="true">#</a> \u8BBE\u7F6E\u65B0\u7684\u4ED3\u5E93\u5730\u5740</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git remote set-url origin https://github.com/qq547176052/547176052.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u672C\u5730\u9879\u76EE\u6062\u590D\u5230\u6307\u5B9A\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u9879\u76EE\u6062\u590D\u5230\u6307\u5B9A\u7248\u672C" aria-hidden="true">#</a> \u672C\u5730\u9879\u76EE\u6062\u590D\u5230\u6307\u5B9A\u7248\u672C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git reset --hard b2232b89cbd104f13a2fdd601fa58931ddeab1fd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19),t=[s];function r(l,c){return i(),n("div",null,t)}var v=e(d,[["render",r],["__file","git.html.vue"]]);export{v as default};
