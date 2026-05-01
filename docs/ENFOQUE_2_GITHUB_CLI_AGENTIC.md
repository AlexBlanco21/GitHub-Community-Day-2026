# Enfoque 2: Workflow Agéntico con GitHub CLI

## Descripción General

Este enfoque utiliza **GitHub CLI (gh)** con capacidades agénticas nativas para ejecutar workflows automáticamente. Utiliza la nueva característica de "agentic workflows" que permite que un agente IA autonomo ejecute tareas complejas.

## Como Funciona

1. **Definición del Workflow Agéntico**: Se define un workflow con instrucciones claras
2. **Agente Autónomo**: El agente analiza el issue y toma decisiones independientes
3. **Ejecución Paralela**: Puede ejecutar múltiples tareas simultáneamente
4. **Retroalimentación**: Proporciona comentarios en el issue
5. **Etiquetado Automático**: Aplica las etiquetas basadas en clasificación

## Archivo de Workflow

```yaml
# .github/workflows/agentic-issue-classifier.yml
name: Agentic Issue Classifier

on:
  issues:
    types: [opened, edited]

jobs:
  agentic_classify:
    runs-on: ubuntu-latest
    permissions:
      issues: write
      contents: read
    steps:
      - uses: actions/checkout@v4
      
      - name: Run Agentic Workflow
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          gh workflow run agentic-classifier.yml \
            --ref main \
            -f issue-number=${{ github.event.issue.number }} \
            -f issue-body="${{ github.event.issue.body }}" \
            -f issue-title="${{ github.event.issue.title }}"
```

## Ventajas

✅ Agente completamente autónomo
✅ Mejor para tareas complejas
✅ Puede interpretar contexto
✅ Mayor flexibilidad
✅ Ejecución paralela de subtareas

## Limitaciones

- Requiere permisos elevados
- Puede ser más costoso en términos de tokens/API
- Necesita instrucciones claras

## Configuración Requerida

1. Habilitar agentic workflows en el repositorio
2. Configurar permisos adecuados
3. Definir instrucciones claras para el agente
4. Configurar el modelo de IA a utilizar

## Categories de Clasificación

El agente clasifica los issues en:

- **Bug** (🐛): Reportes de errores y defectos
- **Sugerencia** (💡): Mejoras y sugerencias
- **Funcionalidad** (✨): Nuevas características
- **Descartado** (❌): Issues inválidos o duplicados

## Ejemplo de Ejecución

```bash
# Ejecutar el workflow agéntico manualmente
gh workflow run agentic-classifier.yml \
  --ref main \
  -f issue-number=42 \
  -f issue-title="Problema con login" \
  -f issue-body="No puedo iniciar sesión..."
```

## Instrucciones para el Agente

El agente recibe instrucciones que definen:
1. Cómo analizar el contenido
2. Criterios de categorización
3. Acciones a ejecutar
4. Validaciones necesarias
