const n=JSON.parse('{"key":"v-34ede89a","path":"/blogs/ITblogs/BackEnd/Spring/spring3.html","title":"Spring（三）通过XML方式实现Spring IoC应用详解","lang":"zh-CN","frontmatter":{"title":"Spring（三）通过XML方式实现Spring IoC应用详解","icon":"laptop-code","date":"2023-12-06T00:00:00.000Z","star":true,"order":3,"category":["Spring"],"tag":["IoC","DI"],"description":"1. 快速上手 第一步：Maven导入Spring坐标 首先，在pom.xml文件中配置Spring-context坐标，这边以5.3.19版本为例。 &lt;dependencies&gt; &lt;!--Spring核心--&gt; &lt;dependency&gt; &lt;groupId&gt;org.springframework&lt;/groupId&gt; &lt;artifactId&gt;spring-context&lt;/artifactId&gt; &lt;version&gt;5.3.19&lt;/version&gt; &lt;/dependency&gt;","head":[["meta",{"property":"og:url","content":"https://weige212.github.io/blogs/ITblogs/BackEnd/Spring/spring3.html"}],["meta",{"property":"og:site_name","content":"WEIGE的知识库"}],["meta",{"property":"og:title","content":"Spring（三）通过XML方式实现Spring IoC应用详解"}],["meta",{"property":"og:description","content":"1. 快速上手 第一步：Maven导入Spring坐标 首先，在pom.xml文件中配置Spring-context坐标，这边以5.3.19版本为例。 &lt;dependencies&gt; &lt;!--Spring核心--&gt; &lt;dependency&gt; &lt;groupId&gt;org.springframework&lt;/groupId&gt; &lt;artifactId&gt;spring-context&lt;/artifactId&gt; &lt;version&gt;5.3.19&lt;/version&gt; &lt;/dependency&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://weige212.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-06T03:29:04.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Spring（三）通过XML方式实现Spring IoC应用详解"}],["meta",{"property":"article:author","content":"Mr.WEIGE"}],["meta",{"property":"article:tag","content":"IoC"}],["meta",{"property":"article:tag","content":"DI"}],["meta",{"property":"article:published_time","content":"2023-12-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-06T03:29:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring（三）通过XML方式实现Spring IoC应用详解\\",\\"image\\":[\\"https://weige212.github.io/\\"],\\"datePublished\\":\\"2023-12-06T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-06T03:29:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.WEIGE\\"}]}"]]},"headers":[{"level":2,"title":"1. 快速上手","slug":"_1-快速上手","link":"#_1-快速上手","children":[{"level":3,"title":"第一步：Maven导入Spring坐标","slug":"第一步-maven导入spring坐标","link":"#第一步-maven导入spring坐标","children":[]},{"level":3,"title":"第二步：定义Bean的对象","slug":"第二步-定义bean的对象","link":"#第二步-定义bean的对象","children":[]},{"level":3,"title":"第三步：创建Bean对象的配置文件","slug":"第三步-创建bean对象的配置文件","link":"#第三步-创建bean对象的配置文件","children":[]},{"level":3,"title":"第四步：创建BeanFactory，加载配置文件，创建Bean对象","slug":"第四步-创建beanfactory-加载配置文件-创建bean对象","link":"#第四步-创建beanfactory-加载配置文件-创建bean对象","children":[]}]},{"level":2,"title":"2. Bean配置详解","slug":"_2-bean配置详解","link":"#_2-bean配置详解","children":[{"level":3,"title":"2.1 Bean的常用配置","slug":"_2-1-bean的常用配置","link":"#_2-1-bean的常用配置","children":[]},{"level":3,"title":"2.2 Bean的实例化配置","slug":"_2-2-bean的实例化配置","link":"#_2-2-bean的实例化配置","children":[]},{"level":3,"title":"2.3 Bean的依赖注入配置","slug":"_2-3-bean的依赖注入配置","link":"#_2-3-bean的依赖注入配置","children":[]},{"level":3,"title":"2.4 Spring的其他配置标签","slug":"_2-4-spring的其他配置标签","link":"#_2-4-spring的其他配置标签","children":[]},{"level":3,"title":"2.5  非自定义Bean的配置","slug":"_2-5-非自定义bean的配置","link":"#_2-5-非自定义bean的配置","children":[]}]}],"git":{"createdTime":1701832459000,"updatedTime":1701833344000,"contributors":[{"name":"WEI","email":"zhaowei@163.com","commits":2}]},"readingTime":{"minutes":9.71,"words":2912},"filePathRelative":"blogs/ITblogs/BackEnd/Spring/spring3.md","localizedDate":"2023年12月6日","excerpt":"<h2> 1. 快速上手</h2>\\n<h3> 第一步：Maven导入Spring坐标</h3>\\n<ul>\\n<li>首先，在pom.xml文件中配置Spring-context坐标，这边以5.3.19版本为例。</li>\\n</ul>\\n<div class=\\"language-xml line-numbers-mode\\" data-ext=\\"xml\\"><pre class=\\"language-xml\\"><code> <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependencies</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token comment\\">&lt;!--Spring核心--&gt;</span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>org.springframework<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>spring-context<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>5.3.19<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
