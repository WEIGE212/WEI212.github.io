import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,d as t,a as e,f as p}from"./app-L0Gk32LZ.js";const o={},c=e("p",null,"事务控制是数据库操作中必不可少的技术，在使用JDBC开发时，我们使用connnection对事务进行控制，在使用MyBatis时，我们使用SqlSession对事务进行控制。对于切换数据库访问技术时，事务控制方式总会变化的问题，Spring框架提供了统一的控制事务的接口。",-1),l=p(`<h2 id="_1-spring事务编程主要概念" tabindex="-1"><a class="header-anchor" href="#_1-spring事务编程主要概念" aria-hidden="true">#</a> 1. Spring事务编程主要概念</h2><ul><li>编程式事务控制：Spring提供了事务控制的类和方法，使用编码的方式对业务代码进行事务控制，事务控制代码和业务操作代码耦合到了一起。</li><li>声明式事务控制：Spring将事务控制的代码封装，对外提供了Xml和注解配置方式，通过配置的方式完成事务的控制，可以达到事务控制与业务操作代码解耦合。</li><li>平台事务管理器（ PlatformTransactionManager）：是一个接口标准，实现类都具备事务提交、回滚和获得事务对象的功能，不同持久层框架可能会有不同实现方案。</li><li>事务定义（TransactionDefinition）：定义封装事务的隔离级别、传播行为、过期时间等属性信息。</li><li>事务状态 （TransactionStatus）：存储当前事务的状态信息，如果事务是否提交、是否回滚、是否有回滚点等。</li></ul><h2 id="_2-基于xml方式配置事务控制" tabindex="-1"><a class="header-anchor" href="#_2-基于xml方式配置事务控制" aria-hidden="true">#</a> 2. 基于XML方式配置事务控制</h2><h3 id="_2-1-命名空间" tabindex="-1"><a class="header-anchor" href="#_2-1-命名空间" aria-hidden="true">#</a> 2.1 命名空间</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>xmlns:tx=&quot;http://www.springframework.org/schema/tx&quot; 
http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/springtx.xsd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-平台事务管理器" tabindex="-1"><a class="header-anchor" href="#_2-2-平台事务管理器" aria-hidden="true">#</a> 2.2 平台事务管理器</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--平台事务管理器--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>transactionManager<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.springframework.jdbc.datasource.DataSourceTransactionManager<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataSource<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataSource<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>平台事务管理器PlatformTransactionManager是Spring提供的封装事务具体操作的规范接口，封装了事务的提交和回滚方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PlatformTransactionManager</span> <span class="token keyword">extends</span> <span class="token class-name">TransactionManager</span> <span class="token punctuation">{</span>
        <span class="token class-name">TransactionStatus</span> <span class="token function">getTransaction</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">TransactionDefinition</span> var1<span class="token punctuation">)</span> <span class="token keyword">throws</span> 
        <span class="token class-name">TransactionException</span><span class="token punctuation">;</span>
        <span class="token keyword">void</span> <span class="token function">commit</span><span class="token punctuation">(</span><span class="token class-name">TransactionStatus</span> var1<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">TransactionException</span><span class="token punctuation">;</span>
        <span class="token keyword">void</span> <span class="token function">rollback</span><span class="token punctuation">(</span><span class="token class-name">TransactionStatus</span> var1<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">TransactionException</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不同的持久层框架事务操作的方式有可能不同，所以不同的持久层框架有可能会有不同的平台事务管理器实现，例如，MyBatis作为持久层框架时，使用的平台事务管理器实现是DataSourceTransactionManager。Hibernate作为持久层框架时，使用的平台事务管理器是HibernateTransactionManager。</p></blockquote><h3 id="_2-3-spring的事务通知" tabindex="-1"><a class="header-anchor" href="#_2-3-spring的事务通知" aria-hidden="true">#</a> 2.3 spring的事务通知</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">tx:</span>advice</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myAdvice<span class="token punctuation">&quot;</span></span> <span class="token attr-name">transaction-manager</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>transactionManager<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">tx:</span>attributes</span><span class="token punctuation">&gt;</span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">tx:</span>method</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!--指定需要事务控制方法--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">tx:</span>attributes</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">tx:</span>advice</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>事务定义信息配置，每个事务有很多特性，例如：隔离级别、只读状态、超时时间等，这些信息在开发时可以通过connection进行指定，而此处要通过配置文件进行配置</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span>tx<span class="token operator">:</span>attributes<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>tx<span class="token operator">:</span>method name<span class="token operator">=</span><span class="token string">&quot;方法名称&quot;</span>
        isolation<span class="token operator">=</span><span class="token string">&quot;隔离级别&quot;</span>
        propagation<span class="token operator">=</span><span class="token string">&quot;传播行为&quot;</span>
        read<span class="token operator">-</span>only<span class="token operator">=</span><span class="token string">&quot;只读状态&quot;</span>
        timeout<span class="token operator">=</span><span class="token string">&quot;超时时间&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>tx<span class="token operator">:</span>attributes<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>name属性名称指定哪个方法要进行哪些事务的属性配置，区分的是切点表达式指定的方法与此处指定的方法的</p><ul><li><p>切点表达式，是指过滤哪些方法可以进行事务增强</p></li><li><p>事务属性信息的name，是指定哪个方法要进行哪些事务属性的配置</p></li></ul></li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">tx:</span>advice</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myAdvice<span class="token punctuation">&quot;</span></span> <span class="token attr-name">transaction-manager</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>transactionManager<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">tx:</span>attributes</span><span class="token punctuation">&gt;</span></span>
    	<span class="token comment">&lt;!--精确匹配xx方法--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">tx:</span>method</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xx<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token comment">&lt;!--模糊匹配以Service结尾的方法--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">tx:</span>method</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*Service<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token comment">&lt;!--模糊匹配以insert开头的方法--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">tx:</span>method</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>insert*<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token comment">&lt;!--模糊匹配以update开头的方法--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">tx:</span>method</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update*<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token comment">&lt;!--模糊匹配任意方法，一般放到最后作为保底匹配--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">tx:</span>method</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">tx:</span>attributes</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">tx:</span>advice</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>isolation属性：指定事务的隔离级别，事务并发存在三大问题：脏读、不可重复读、幻读/虚读。可以通过设置事务的隔离级别来保证并发问题的出现，常用的是READ_COMMITTED 和 REPEATABLE_READ <ul><li>DEFAULT：默认隔离级别，取决于当前数据库隔离级别，例如MySQL默认隔离级别是REPEATABLE_READ</li><li>READ_UNCOMMITTED：A事务可以读取到B事务尚未提交的事务记录，不能解决任何并发问题，安全性最低，性能最高</li><li>READ_COMMITTED：A事务只能读取到其他事务已经提交的记录，不能读取到未提交的记录。可以解决脏读问题，但是不能解决不可重复读和幻读</li><li>REPEATABLE_READ：A事务多次从数据库读取某条记录结果一致，可以解决不可重复读，不可以解决幻读</li><li>SERIALIZABLE：串行化，可以解决任何并发问题，安全性最高，但是性能最低</li></ul></li><li>propagation属性：设置事务的传播行为，主要解决是A方法调用B方法时，事务的传播方式问题的，例如：使用单方的事务，还是A和B都使用自己的事务等。事务的传播行为有如下七种属性值可配置 <ul><li>REQUIRED（默认值）：A调用B，B需要事务，如果A有事务B就加入A的事务中，如果A没有事务，B就自己创建一个事务</li><li>REQUIRED_NEW：A调用B，B需要新事务，如果A有事务就挂起，B自己创建一个新的事务</li><li>SUPPORTS：A调用B，B有无事务无所谓，A有事务就加入到A事务中，A无事务B就以非事务方式执行</li><li>NOT_SUPPORTS：A调用B，B以无事务方式执行，A如有事务则挂起</li><li>NEVER：A调用B，B以无事务方式执行，A如有事务则抛出异常</li><li>MANDATORY ：A调用B，B要加入A的事务中，如果A无事务就抛出异常</li><li>NESTED ：A调用B，B创建一个新事务，A有事务就作为嵌套事务存在，A没事务就以创建的新事务执行</li></ul></li><li>read-only属性：设置当前的只读状态，如果是查询则设置为true，可以提高查询性能，如果是更新（增删改）操作则设置为false</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 一般查询相关的业务操作都会设置为只读模式 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">tx:</span>method</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>select*<span class="token punctuation">&quot;</span></span> <span class="token attr-name">read-only</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">tx:</span>method</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>find*<span class="token punctuation">&quot;</span></span> <span class="token attr-name">read-only</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>timeout属性：设置事务执行的超时时间，单位是秒，如果超过该时间限制但事务还没有完成，则自动回滚事务，不在继续执行。默认值是-1，即没有超时时间限制</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">tx:</span>method</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>select*<span class="token punctuation">&quot;</span></span> <span class="token attr-name">read-only</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">timeout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h3 id="_2-5-使用advisor方式配置切面" tabindex="-1"><a class="header-anchor" href="#_2-5-使用advisor方式配置切面" aria-hidden="true">#</a> 2.5 使用advisor方式配置切面</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">aop:</span>config</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">aop:</span>advisor</span> <span class="token attr-name">advice-ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myAdvice<span class="token punctuation">&quot;</span></span> <span class="token attr-name">pointcut</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>execution(* org.example.service.impl.*.*(..))<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">aop:</span>config</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-基于注解方式配置事务控制" tabindex="-1"><a class="header-anchor" href="#_3-基于注解方式配置事务控制" aria-hidden="true">#</a> 3. 基于注解方式配置事务控制</h2><h3 id="_3-1-半注解的形式" tabindex="-1"><a class="header-anchor" href="#_3-1-半注解的形式" aria-hidden="true">#</a> 3.1 半注解的形式</h3><ul><li>在配置文件中配置平台事务管理器，开启事务注解开关</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>transactionManager<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.springframework.jdbc.datasource.DataSourceTransactionManager<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataSource<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataSource<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--配置事务的注解驱动--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">tx:</span>annotation-driven</span> <span class="token attr-name">transaction-manager</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>transactionManager<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置事务通知</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XxxServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">XxxService</span> <span class="token punctuation">{</span>
   		 <span class="token comment">//&lt;tx:method name=&quot;*&quot; isolation=&quot;REPEATABLE_READ&quot; propagation=&quot;REQUIRED“/&gt;</span>
   		<span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>isolation <span class="token operator">=</span> <span class="token class-name">Isolation</span><span class="token punctuation">.</span><span class="token constant">REPEATABLE_READ</span><span class="token punctuation">,</span>propagation <span class="token operator">=</span> <span class="token class-name">Propagation</span><span class="token punctuation">.</span><span class="token constant">REQUIRED</span><span class="token punctuation">,</span>readOnly <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>timeout <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">)</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">xxx</span><span class="token punctuation">(</span><span class="token class-name">String</span> decrAccountName<span class="token punctuation">,</span> <span class="token class-name">String</span> incrAccountName<span class="token punctuation">,</span> <span class="token keyword">int</span> money<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-全注解的形式" tabindex="-1"><a class="header-anchor" href="#_3-2-全注解的形式" aria-hidden="true">#</a> 3.2 全注解的形式</h3><ul><li>以注解的方式配置，需要配置类来代替，例如：</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token string">&quot;org.example.service&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@PropertySource</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:jdbc.properties&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">&quot;org.example.mapper&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EnableTransactionManagement</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ApplicationContextConfig</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">PlatformTransactionManager</span> <span class="token function">tansactionManager</span><span class="token punctuation">(</span><span class="token class-name">DataSource</span> dataSource<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">DataSourceTransactionManager</span> transactionManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSourceTransactionManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        transactionManager<span class="token punctuation">.</span><span class="token function">setDataSource</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> transactionManager<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token comment">// ... 省略其他配置 ...</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置事务通知</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccoutServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">XxxService</span> <span class="token punctuation">{</span>
   		 <span class="token comment">//&lt;tx:method name=&quot;*&quot; isolation=&quot;REPEATABLE_READ&quot; propagation=&quot;REQUIRED“/&gt;</span>
   		<span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>isolation <span class="token operator">=</span> <span class="token class-name">Isolation</span><span class="token punctuation">.</span><span class="token constant">REPEATABLE_READ</span><span class="token punctuation">,</span>propagation <span class="token operator">=</span> <span class="token class-name">Propagation</span><span class="token punctuation">.</span><span class="token constant">REQUIRED</span><span class="token punctuation">,</span>readOnly <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>timeout <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">)</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">xxx</span><span class="token punctuation">(</span><span class="token class-name">String</span> decrAccountName<span class="token punctuation">,</span> <span class="token class-name">String</span> incrAccountName<span class="token punctuation">,</span> <span class="token keyword">int</span> money<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function i(u,r){return n(),s("div",null,[c,t(" more "),l])}const m=a(o,[["render",i],["__file","spring9.html.vue"]]);export{m as default};
