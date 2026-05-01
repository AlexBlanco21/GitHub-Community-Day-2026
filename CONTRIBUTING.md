# Contribuyendo al Proyecto

¡Gracias por tu interés en contribuir! Este documento proporciona pautas para contribuir al proyecto.

## 📋 Antes de Empezar

1. Lee el [README.md](../README.md) para entender el proyecto
2. Revisa la [Documentación](../docs/) para detalles técnicos
3. Busca [issues existentes](../../issues) para evitar duplicados

## 🚀 Proceso de Contribución

### 1. Fork y Clon

```bash
# Fork el repositorio en GitHub
# Luego clona tu fork local
git clone https://github.com/tu-usuario/GitHub-Community-Day-2026.git
cd GitHub-Community-Day-2026
```

### 2. Crea una Rama

```bash
# Actualiza main
git checkout main
git pull origin main

# Crea una rama para tu feature
git checkout -b feature/mi-feature
# o para un bug fix
git checkout -b fix/mi-bug
```

**Nombres de Ramas:**
- `feature/descripcion-corta` - Para nuevas características
- `fix/descripcion-corta` - Para arreglos de bugs
- `docs/descripcion-corta` - Para cambios en documentación
- `style/descripcion-corta` - Para cambios de estilo

### 3. Haz tus Cambios

- Sigue el estilo de código existente
- Escribe código limpio y legible
- Documenta cambios importantes
- Actualiza la documentación si es necesario

### 4. Commit y Push

```bash
# Ver cambios
git status

# Agregar cambios
git add .

# Commit con mensaje descriptivo
git commit -m "Descripción clara del cambio"

# Push a tu fork
git push origin feature/mi-feature
```

**Guía de Mensajes de Commit:**
- Usa imperativo ("Agregar", no "Agregado")
- Sé específico ("Corregir login form" no "Arreglar cosas")
- Incluye referencia a issues: "Fix #123"

### 5. Crea un Pull Request

1. Ve a GitHub
2. Haz clic en "Pull Requests" → "New Pull Request"
3. Compara tu rama con `main`
4. Completa el título y descripción
5. Refiere issues relacionados usando `#123`
6. Envía el PR

**Plantilla de PR Description:**
```markdown
## Descripción
Breve descripción de los cambios

## Tipo de Cambio
- [ ] Bug fix
- [ ] Nueva característica
- [ ] Cambio en documentación

## Relacionado con Issue
Cierra #123

## Checklist
- [ ] Mi código sigue el estilo del proyecto
- [ ] He testeado localmente
- [ ] He actualizado la documentación si es necesario
```

## 📝 Guías de Estilo

### HTML/CSS
- Usa indentación de 4 espacios
- Clases en kebab-case: `mi-clase`
- IDs en camelCase: `miElemento`

### JavaScript
- Usa camelCase para variables y funciones
- PascalCase para clases
- Comenta código complejo
- Usa const por defecto, let cuando sea necesario

### Python
- Sigue PEP 8
- Usa snake_case para funciones y variables
- Documenta con docstrings

### Markdown
- Usa heading h2 (#) como máximo en docs
- Código en bloques con triple backtick
- Enlaces relativos

## 🧪 Testing

Antes de enviar un PR:

```bash
# Para cambios en SPA
# Prueba manualmente en navegador

# Para workflows
gh workflow run classify-issues-copilot-cli.yml --ref main

# Verifica que no hay errores
```

## 📚 Documentación

Si agregasuna nueva característica:

1. Documenta en `.md` apropiado
2. Actualiza README si es necesario
3. Incluye ejemplos de uso
4. Traducción al español

## 🐛 Reportando Bugs

Usa la [plantilla de bug](../.github/ISSUE_TEMPLATE/bug_report.md):

1. **Descripción clara** del problema
2. **Pasos para reproducir**
3. **Comportamiento esperado vs actual**
4. **Información del sistema**
5. **Screenshots si es relevante**

## 💡 Proponiendo Características

Usa la [plantilla de feature](../.github/ISSUE_TEMPLATE/feature_request.md):

1. **Descripción** de la idea
2. **Problema que resuelve**
3. **Alternativas consideradas**
4. **Contexto adicional**

## 👥 Código de Conducta

- Sé respetuoso con otros contribuyentes
- Acepta crítica constructiva
- Enfócate en lo que es mejor para el proyecto
- Reporta problemas de forma constructiva

## ❓ Preguntas?

- Abre un [Discussion](../../discussions)
- Comenta en un [Issue](../../issues)
- Alcanza a los mantainers directamente

## 📜 Licencia

Al contribuir, aceptas que tus aportes se publican bajo la licencia MIT.

---

¡Gracias por contribuir! 🎉
