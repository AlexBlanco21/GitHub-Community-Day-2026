# Enfoque 1: Workflow con Copilot CLI

## Descripción General

Este enfoque utiliza **GitHub Actions** integrado con **Copilot CLI** para automatizar la clasificación de issues. El workflow se ejecuta automáticamente cuando se crea un nuevo issue en el repositorio.

## Como Funciona

1. **Evento Disparador**: Cuando se crea un nuevo issue, se dispara el workflow
2. **Copilot CLI Step**: Utiliza el comando `copilot workflow run` para ejecutar el análisis
3. **Clasificación Automática**: Copilot analiza el contenido del issue y lo clasifica
4. **Etiquetado**: Agrega automáticamente las etiquetas correspondientes

## Archivo de Workflow

```yaml
# .github/workflows/classify-issues-copilot-cli.yml
name: Classify Issues with Copilot CLI

on:
  issues:
    types: [opened, edited]

jobs:
  classify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Classify Issue with Copilot
        run: |
          copilot workflow run analyze-issue \
            --issue-number ${{ github.event.issue.number }} \
            --owner ${{ github.repository_owner }} \
            --repo ${{ github.event.repository.name }}
```

## Ventajas

✅ Integración directa con GitHub Actions
✅ Fácil de configurar y mantener
✅ Ejecución sincrónica
✅ Logs completos en GitHub Actions
✅ No requiere configuración externa

## Limitaciones

- Requiere autenticación de Copilot CLI
- Dependencia de la disponibilidad del servicio de Copilot
- Puede ser más lento que otras aproximaciones

## Configuración Requerida

1. Instalar Copilot CLI en el runner
2. Configurar autenticación (GitHub token)
3. Definir permisos en secrets del repositorio

## Ejemplo de Ejecución

```bash
# Manual execution
gh copilot workflow run analyze-issue \
  --issue-number 42 \
  --owner my-org \
  --repo my-repo
```
