import{_ as e,c as o,o as t,V as n}from"./chunks/framework.dfdac305.js";const r="/staging/images/vscode-attach-to-container.png",a="/staging/images/vscode-open-the-terminal.png",c="/staging/images/vscode-select-ultra-workdir.png",i="/staging/images/vscode-ssh.png",f=JSON.parse('{"title":"Development Environment Setup","description":"","frontmatter":{"title":"Development Environment Setup","deploy":["staging","mainnet"],"order":-9998,"outline":[0,4]},"headers":[],"relativePath":"guides/Docker/development-environment.md","lastUpdated":null}'),s={name:"guides/Docker/development-environment.md"},d=n('<h1 id="development-environment-setup" tabindex="-1">Development Environment Setup <a class="header-anchor" href="#development-environment-setup" aria-label="Permalink to &quot;Development Environment Setup&quot;">​</a></h1><p>To start the setup process you&#39;ll need to clone <a href="https://github.com/ultraio/blockchain-development-tools/" target="_blank" rel="noreferrer">development tools</a> repo from Github.</p><h2 id="local" tabindex="-1">Local <a class="header-anchor" href="#local" aria-label="Permalink to &quot;Local&quot;">​</a></h2><p>For the local environment you just open <code>~/ultra_workdir</code> if you&#39;re on linux or <code>C:\\Users\\Username\\ultra_workdir</code> on windows.</p><h2 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;Docker&quot;">​</a></h2><p>Run <code>./scripts/docker/start_docker.sh</code> from the development tools. It&#39;ll start a container called <code>ultra-dev</code> to which you can connect using vscode. By default your <code>ultra-workdir</code> is mounted to the <code>/opt/ultra_workdir</code> directory inside the container so any changes in that directory will persist on your filesystem. Go to the <code>Remote-Explorer</code> and attach to the <code>ultra-dev</code> container.</p><p><img src="'+r+'" alt=""></p><p>Once connected to the container open the terminal</p><p><img src="'+a+'" alt=""></p><p>and open the <code>/opt/ultra_workdir</code> directory inside the container</p><p><img src="'+c+'" alt=""></p><h2 id="vps" tabindex="-1">VPS <a class="header-anchor" href="#vps" aria-label="Permalink to &quot;VPS&quot;">​</a></h2><p>To connect to your virtual machine using ssh go to <code>Remote-Explorer</code> and then select <code>SSH Targets</code>. Make sure the targets are available in your <code>~/.ssh/config</code>.</p><p><img src="'+i+'" alt=""></p>',14),l=[d];function p(m,h,u,_,v,g){return t(),o("div",null,l)}const y=e(s,[["render",p]]);export{f as __pageData,y as default};
