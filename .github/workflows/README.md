# Workflow Agentic para Clasificación de Issues

Esta carpeta contiene la configuración de los workflows automáticos de GitHub Actions.

## Archivos

### classify-issues-copilot-cli.yml
Workflow que utiliza **Copilot CLI** para clasificar issues automáticamente.

**Dispara por:**
- Cuando se crea o edita un issue
- Manualmente desde Actions

**Acciones:**
1. Analiza el contenido del issue
2. Clasifica según: Bug, Feature, Suggestion, Discarded
3. Agrega etiquetas automáticas
4. Añade comentario con el resultado

### agentic-classifier.yml
Workflow completamente autónomo que usa **análisis agéntico** para clasificación inteligente.

**Dispara por:**
- Cuando se crea o edita un issue
- Manualmente desde Actions

**Acciones:**
1. Ejecuta análisis avanzado de contenido
2. Calcula confianza de clasificación
3. Agrega múltiples etiquetas si es necesario
4. Comenta con análisis detallado

## Configuración Requerida

Para que los workflows funcionen correctamente:

1. **Permisos**: Los workflows necesitan permisos de `write` para issues
2. **GitHub Token**: Se usa automáticamente `${{ secrets.GITHUB_TOKEN }}`
3. **Python 3**: Requerido para análisis avanzado

## Ejecución Manual

```bash
# Ejecutar Copilot CLI Classifier
gh workflow run classify-issues-copilot-cli.yml --ref main

# Ejecutar Agentic Classifier
gh workflow run agentic-classifier.yml --ref main
```

## Monitoreo

Ve a la pestaña **Actions** para ver:
- Ejecuciones en tiempo real
- Logs detallados
- Errores y avisos
- Histórico de cambios

## Solución de Problemas

### ❌ El workflow no se ejecuta
- Verifica que los permisos estén habilitados
- Asegúrate que el syntax YAML es correcto
- Confirma que estás en la rama correcta

### ❌ Las etiquetas no se agregan
- Verifica que las etiquetas existen en el repositorio
- Comprueba que tienes permisos de escritura
- Revisa los logs para mensajes de error

### ❌ El comentario no aparece
- Verifica los logs del workflow
- Confirma que el formato del comentario es válido
- Check GitHub permissions

Para más detalles, consulta la [Documentación de Workflows](../docs/)
