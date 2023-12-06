const e=JSON.parse('{"key":"v-33390ffb","path":"/blogs/ITblogs/BackEnd/Spring/spring2.html","title":"Spring（二）深入理解Spring IoC原理","lang":"zh-CN","frontmatter":{"title":"Spring（二）深入理解Spring IoC原理","icon":"laptop-code","date":"2023-12-05T00:00:00.000Z","star":true,"category":["Spring"],"tag":["IoC","DI"],"description":"传统的Java程序代码通常将对象的构建、接口的实现以及业务的实现紧密的耦合在一起，不利于代码的扩展性。为了解决了传统Java程序代码的紧密耦合问题。Spring提出了IoC（Inversion of control：即控制反转）的设计思想，将原本在程序中手动创建对象的控制权、对象之间的相互依赖关系交给 IoC 容器来管理，并由IoC容器完成对象的依赖注入。这样即实现了对象之间的松耦合，使程序的的可读性和扩展性大大提升，又在可以很大程度上简化应用的开发。","head":[["meta",{"property":"og:url","content":"https://weige212.github.io/blogs/ITblogs/BackEnd/Spring/spring2.html"}],["meta",{"property":"og:site_name","content":"WEIGE的知识库"}],["meta",{"property":"og:title","content":"Spring（二）深入理解Spring IoC原理"}],["meta",{"property":"og:description","content":"传统的Java程序代码通常将对象的构建、接口的实现以及业务的实现紧密的耦合在一起，不利于代码的扩展性。为了解决了传统Java程序代码的紧密耦合问题。Spring提出了IoC（Inversion of control：即控制反转）的设计思想，将原本在程序中手动创建对象的控制权、对象之间的相互依赖关系交给 IoC 容器来管理，并由IoC容器完成对象的依赖注入。这样即实现了对象之间的松耦合，使程序的的可读性和扩展性大大提升，又在可以很大程度上简化应用的开发。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://weige212.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-06T01:28:12.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Spring（二）深入理解Spring IoC原理"}],["meta",{"property":"article:author","content":"Mr.WEIGE"}],["meta",{"property":"article:tag","content":"IoC"}],["meta",{"property":"article:tag","content":"DI"}],["meta",{"property":"article:published_time","content":"2023-12-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-06T01:28:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring（二）深入理解Spring IoC原理\\",\\"image\\":[\\"https://weige212.github.io/\\"],\\"datePublished\\":\\"2023-12-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-06T01:28:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.WEIGE\\"}]}"]]},"headers":[{"level":2,"title":"1.IoC与DI思想的提出","slug":"_1-ioc与di思想的提出","link":"#_1-ioc与di思想的提出","children":[]},{"level":2,"title":"2.BeanFactory详解","slug":"_2-beanfactory详解","link":"#_2-beanfactory详解","children":[]},{"level":2,"title":"3.Bean的生产流程详解","slug":"_3-bean的生产流程详解","link":"#_3-bean的生产流程详解","children":[]},{"level":2,"title":"4.Bean的生命周期详解","slug":"_4-bean的生命周期详解","link":"#_4-bean的生命周期详解","children":[]},{"level":2,"title":"5.Spring IoC整体流程总结","slug":"_5-spring-ioc整体流程总结","link":"#_5-spring-ioc整体流程总结","children":[]}],"git":{"createdTime":1701826092000,"updatedTime":1701826092000,"contributors":[{"name":"zhaowei","email":"zhaowei@163.com","commits":1}]},"readingTime":{"minutes":10.61,"words":3183},"filePathRelative":"blogs/ITblogs/BackEnd/Spring/spring2.md","localizedDate":"2023年12月5日","excerpt":"<p>传统的Java程序代码通常将对象的构建、接口的实现以及业务的实现紧密的耦合在一起，不利于代码的扩展性。为了解决了传统Java程序代码的紧密耦合问题。Spring提出了IoC（Inversion of control：即控制反转）的设计思想，将原本在程序中手动创建对象的控制权、对象之间的相互依赖关系交给 IoC 容器来管理，并由IoC容器完成对象的依赖注入。这样即实现了对象之间的松耦合，使程序的的可读性和扩展性大大提升，又在可以很大程度上简化应用的开发。</p>\\n","autoDesc":true}');export{e as data};
