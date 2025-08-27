# Guia de Contribuição

Obrigado por considerar contribuir para o projeto Sonjis! Este documento fornece diretrizes para contribuições.

## Pré-requisitos

### Backend (Python)
- Python 3.12+
- [uv](https://docs.astral.sh/uv/) para gerenciamento de dependências

### Frontend (React)
- Node.js 18+
- npm ou yarn

## Configuração do Ambiente

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/sonjis.git
cd sonjis
```

### 2. Configurar Backend
```bash
cd backend
uv sync
uv run python -m uvicorn src.main:app --reload
```

### 3. Configurar Frontend
```bash
cd frontend
npm install
npm run dev
```

## Fluxo de Trabalho com Branches

### Convenções de Nomenclatura de Branches

Use o padrão: `tipo/descricao-breve`

**Tipos de branch:**
- `feature/` - Novas funcionalidades
- `fix/` - Correções de bugs
- `docs/` - Documentação
- `refactor/` - Refatoração de código
- `test/` - Adição ou correção de testes
- `chore/` - Tarefas de manutenção

**Exemplos:**
```bash
git checkout -b feature/camera-integration
git checkout -b fix/chat-message-display
git checkout -b docs/api-endpoints
```

### Processo de Desenvolvimento

1. **Crie uma branch a partir da main**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/sua-feature
   ```

2. **Desenvolva sua feature**
   - Faça commits pequenos e frequentes
   - Use mensagens de commit descritivas

3. **Mantenha sua branch atualizada**
   ```bash
   git fetch origin
   git rebase origin/main
   ```

## Padrões de Commit

### Estrutura da Mensagem
```
tipo(escopo): descrição breve

corpo opcional

rodapé opcional
```

### Tipos de Commit
- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Documentação
- `style:` - Formatação, ponto e vírgula, etc.
- `refactor:` - Refatoração de código
- `test:` - Adição de testes
- `chore:` - Tarefas de manutenção

### Exemplos
```bash
git commit -m "feat(frontend): adiciona componente de câmera"
git commit -m "fix(backend): corrige validação de dados da API"
git commit -m "docs: atualiza README com instruções de instalação"
```

##  Pull Requests

### Título Semântico
Use o mesmo padrão dos commits:
```
tipo(escopo): descrição breve
```

**Exemplos:**
- `feat(frontend): adiciona integração com câmera`
- `fix(backend): corrige erro de autenticação`
- `docs: atualiza guia de contribuição`


## 🧪 Testes

### Backend
```bash
cd backend
uv run pytest
```

### Frontend
```bash
cd frontend
npm test
```

## Iniciar servidor

### Backend
```bash
cd backend
uv run python -m uvicorn src.main:app --host 0.0.0.0 --port 8000
```
ou

```
make backend-dev
```

### Frontend
```bash
cd frontend
npm run build
```
ou

```
make frontend-dev
```
