# Guia Completo de Comandos Git

Um guia prático e direto dos comandos Git mais utilizados no dia a dia de desenvolvimento.

---

## Configuração Inicial

### git config

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

Configura suas informações de usuário no Git. Essas informações aparecem em todos os seus commits, então é importante configurar logo de cara. Use `--global` para aplicar em todos os repositórios ou remova para configurar apenas no projeto atual.

### git config --list

```bash
git config --list
```

Lista todas as configurações do Git que estão ativas no momento. Útil para verificar se suas configurações foram aplicadas corretamente ou para debugar problemas de configuração.

---

## Criando e Clonando Repositórios

### git init

```bash
git init
```

Inicializa um novo repositório Git na pasta atual. Basicamente diz ao Git "ei, começa a rastrear as mudanças aqui". Cria uma pasta oculta `.git` onde toda a mágica acontece.

### git clone

```bash
git clone https://github.com/usuario/repositorio.git
git clone https://github.com/usuario/repositorio.git nome-da-pasta
```

Copia um repositório remoto para sua máquina. É tipo baixar o projeto completo com todo o histórico de commits. Se não especificar um nome de pasta, vai usar o nome do repositório.

---

## Trabalhando com Mudanças

### git status

```bash
git status
```

Mostra o status atual do seu repositório. Quais arquivos foram modificados, quais estão prontos para commit, se tem algo novo que o Git ainda não está rastreando. É o comando que você vai usar toda hora para saber onde está.

### git add

```bash
git add arquivo.txt
git add .
git add *.js
git add pasta/
```

Adiciona arquivos para a área de staging (preparação para commit). É como selecionar quais mudanças você quer incluir no próximo commit. O ponto `.` adiciona tudo que foi modificado de uma vez.

### git reset

```bash
git reset arquivo.txt
git reset
git reset --hard HEAD
git reset --soft HEAD~1
```

Remove arquivos da área de staging ou desfaz commits. O `reset` simples tira arquivos do staging mas mantém as modificações. O `--hard` descarta tudo e volta ao último commit (cuidado, não tem volta). O `--soft` desfaz o último commit mas mantém as mudanças no staging.

### git commit

```bash
git commit -m "Mensagem do commit"
git commit -am "Adiciona e commita arquivos já rastreados"
git commit --amend -m "Corrige mensagem do último commit"
```

Salva as mudanças que estão no staging criando um ponto na história do projeto. A mensagem é obrigatória e deve descrever o que foi feito. O `-a` adiciona automaticamente arquivos já rastreados (não funciona com arquivos novos). O `--amend` permite corrigir o último commit.

### git diff

```bash
git diff
git diff arquivo.txt
git diff --staged
git diff branch1 branch2
```

Mostra as diferenças entre versões. Sem parâmetros, mostra mudanças não adicionadas ao staging. Com `--staged`, mostra o que está pronto para commit. Você também pode comparar branches ou commits específicos.

---

## Histórico e Logs

### git log

```bash
git log
git log --oneline
git log --graph --oneline --all
git log -n 5
git log --author="Nome"
```

Exibe o histórico de commits do repositório. O `--oneline` mostra uma versão resumida (super útil). O `--graph` desenha uma árvore visual das branches. Dá pra filtrar por quantidade, autor, data e muito mais.

### git show

```bash
git show
git show abc123
git show HEAD~2
```

Mostra detalhes de um commit específico, incluindo as mudanças que foram feitas. Sem parâmetros, mostra o último commit. Você pode passar um hash de commit ou usar referências relativas como `HEAD~2` (dois commits atrás).

### git reflog

```bash
git reflog
```

Mostra um log de todas as ações que você fez, incluindo coisas que foram "perdidas" com reset ou rebase. É seu plano B quando você faz uma besteira e precisa recuperar algo.

---

## Branches (Ramificações)

### git branch

```bash
git branch
git branch nova-feature
git branch -d nome-branch
git branch -D nome-branch
git branch -m novo-nome
```

Gerencia branches. Sem parâmetros, lista as branches existentes. Com um nome, cria uma nova branch. O `-d` deleta uma branch (só se já foi mergeada), `-D` força a deleção. O `-m` renomeia a branch atual.

### git checkout

```bash
git checkout nome-branch
git checkout -b nova-branch
git checkout arquivo.txt
git checkout abc123
```

Muda entre branches ou restaura arquivos. O `-b` cria e já muda para a nova branch em um comando só. Você pode voltar a commits específicos passando o hash, mas fica em "detached HEAD" (meio perdido, melhor criar uma branch).

### git switch

```bash
git switch nome-branch
git switch -c nova-branch
git switch -
```

Comando mais novo para trocar de branch (mais intuitivo que checkout). O `-c` cria e muda para a nova branch. O `-` volta para a branch anterior, tipo voltar na navegação do browser.

### git merge

```bash
git merge nome-branch
git merge --no-ff nome-branch
git merge --abort
```

Junta o conteúdo de uma branch na branch atual. Se tiver conflitos, você precisa resolver manualmente. O `--no-ff` cria um commit de merge mesmo quando não é necessário (bom para manter histórico claro). O `--abort` cancela um merge que deu problema.

### git rebase

```bash
git rebase main
git rebase -i HEAD~3
git rebase --continue
git rebase --abort
```

Reorganiza commits, movendo sua branch para começar do ponto mais recente de outra branch. Deixa o histórico mais linear e limpo. O `-i` (interativo) permite editar, juntar ou reordenar commits. Cuidado: não faça rebase de commits que já foram enviados para repositório compartilhado.

---

## Trabalhando com Remotos

### git remote

```bash
git remote
git remote -v
git remote add origin https://github.com/usuario/repo.git
git remote remove origin
git remote rename origin novo-nome
```

Gerencia repositórios remotos (tipo GitHub, GitLab). O `-v` mostra as URLs. Normalmente você tem um remote chamado `origin` que é de onde você clonou. Você pode ter vários remotes.

### git fetch

```bash
git fetch
git fetch origin
git fetch --all
```

Baixa atualizações do repositório remoto mas não aplica nas suas branches locais. É tipo dar uma olhada no que tem de novo sem bagunçar seu trabalho. Depois você decide se quer fazer merge ou não.

### git pull

```bash
git pull
git pull origin main
git pull --rebase
```

Baixa e automaticamente faz merge das mudanças do repositório remoto. É basicamente um `fetch` seguido de `merge`. O `--rebase` aplica seus commits locais em cima das mudanças baixadas, ao invés de criar um commit de merge.

### git push

```bash
git push
git push origin main
git push -u origin nome-branch
git push --force
git push --tags
```

Envia seus commits locais para o repositório remoto. O `-u` (ou `--set-upstream`) configura a branch remota padrão para futuros push/pull. O `--force` sobrescreve o histórico remoto (use com cuidado, só quando tiver certeza). O `--tags` envia as tags também.

---

## Salvamento Temporário

### git stash

```bash
git stash
git stash save "Mensagem descritiva"
git stash list
git stash apply
git stash pop
git stash drop
git stash clear
```

Guarda temporariamente mudanças não commitadas. Útil quando você precisa trocar de branch rapidamente mas não quer commitar o trabalho pela metade. O `apply` recupera as mudanças mas mantém no stash. O `pop` recupera e remove do stash. O `drop` deleta um stash específico e `clear` limpa tudo.

---

## Desfazendo Coisas

### git restore

```bash
git restore arquivo.txt
git restore --staged arquivo.txt
git restore .
```

Restaura arquivos para o estado do último commit. É o jeito novo (e mais claro) de desfazer mudanças. O `--staged` tira do staging mas mantém as modificações no arquivo.

### git revert

```bash
git revert abc123
git revert HEAD
git revert --no-commit abc123
```

Cria um novo commit que desfaz as mudanças de um commit anterior. Diferente do reset, não apaga o histórico, só adiciona um "commit reverso". Seguro para usar em branches compartilhadas.

### git clean

```bash
git clean -n
git clean -f
git clean -fd
```

Remove arquivos não rastreados do diretório de trabalho. O `-n` faz uma simulação mostrando o que seria deletado (sempre teste antes). O `-f` força a limpeza. O `-d` inclui diretórios também.

---

## Tags

### git tag

```bash
git tag
git tag v1.0.0
git tag -a v1.0.0 -m "Versão 1.0.0"
git tag -d v1.0.0
git push origin v1.0.0
git push origin --tags
```

Marca pontos específicos no histórico como importantes (geralmente releases). Tags anotadas (`-a`) incluem informações extras como autor e data. Diferente de branches, tags não mudam. Você precisa fazer push explícito das tags.

---

## Outros Comandos Úteis

### git cherry-pick

```bash
git cherry-pick abc123
git cherry-pick abc123 def456
```

Pega commits específicos de outra branch e aplica na branch atual. Útil quando você quer apenas algumas mudanças específicas sem fazer merge de tudo.

### git blame

```bash
git blame arquivo.txt
git blame -L 10,20 arquivo.txt
```

Mostra quem modificou cada linha de um arquivo e em qual commit. Perfeito para descobrir quem escreveu aquele bug (ou aquele código genial). O `-L` limita para linhas específicas.

### git grep

```bash
git grep "texto"
git grep -n "texto"
git grep "texto" v1.0.0
```

Busca por texto dentro dos arquivos do repositório. Mais rápido que grep normal porque só procura em arquivos rastreados. O `-n` mostra o número da linha. Você pode buscar em commits ou tags específicas.

### git rm

```bash
git rm arquivo.txt
git rm --cached arquivo.txt
git rm -r pasta/
```

Remove arquivos do repositório. O `--cached` remove apenas do Git mas mantém o arquivo no seu sistema (útil para arquivos que você adicionou por engano). O `-r` é para remover pastas recursivamente.

### git mv

```bash
git mv arquivo-antigo.txt arquivo-novo.txt
git mv arquivo.txt pasta/
```

Renomeia ou move arquivos mantendo o histórico. É melhor que deletar e criar um novo porque o Git consegue rastrear que é o mesmo arquivo.

---

## Fluxo de Trabalho Comum

### Começando um novo projeto

```bash
git init
git add .
git commit -m "Primeiro commit"
git remote add origin https://github.com/usuario/repo.git
git push -u origin main
```

### Criando uma nova feature

```bash
git checkout -b feature/nova-funcionalidade
# faz suas mudanças
git add .
git commit -m "Adiciona nova funcionalidade"
git push -u origin feature/nova-funcionalidade
```

### Atualizando sua branch com a main

```bash
git checkout main
git pull
git checkout feature/minha-branch
git merge main
# ou
git rebase main
```

### Sincronizando com o remoto

```bash
git fetch origin
git pull origin main
git push origin main
```

---

## Dicas Finais

**Commite com frequência**: Commits pequenos e frequentes são mais fáceis de entender e reverter se necessário.

**Mensagens claras**: Escreva mensagens de commit que expliquem o "porquê", não apenas o "o quê".

**Use branches**: Nunca trabalhe direto na main. Crie branches para cada feature ou correção.

**Pull antes de push**: Sempre baixe as atualizações antes de enviar as suas para evitar conflitos.

**Revise antes de commitar**: Use `git diff` e `git status` para verificar o que está sendo commitado.

**Cuidado com force push**: Pode sobrescrever o trabalho de outras pessoas. Use apenas quando tiver certeza absoluta.

---

## Recursos Adicionais

- [Documentação Oficial do Git](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Visualizing Git](https://git-school.github.io/visualizing-git/)
- [Oh My Git! (Jogo)](https://ohmygit.org/)

---

Este guia cobre os comandos essenciais do Git. A melhor forma de aprender é praticando, então não tenha medo de experimentar em um repositório de teste!
