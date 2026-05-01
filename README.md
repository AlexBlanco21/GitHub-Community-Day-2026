# GitHub Community Day 2026 - Perú 🇵🇪

![GitHub Community Day Perú](https://img.shields.io/badge/Event-GitHub%20Community%20Day%202026-blue)
![Status](https://img.shields.io/badge/Status-Active-green)
![License](https://img.shields.io/badge/License-MIT-green)

> Repositorio oficial para demostrar **Workflows Agénticos de GitHub** con dos enfoques innovadores

## 📋 Descripción del Proyecto

Este repositorio showcaséa dos aproximaciones diferentes para implementar **agentic workflows** en GitHub Actions:

1. **Enfoque 1: Copilot CLI** - Integración directa con GitHub Actions
2. **Enfoque 2: Agentic Workflow** - Workflow completamente autónomo

### 🎯 Objetivos

- ✅ Demostrar la capacidad de GitHub para automatizar procesos complejos
- ✅ Clasificar automáticamente issues según categorías predefinidas
- ✅ Proporcionar documentación completa en español
- ✅ Incluir una SPA interactiva con tema del evento

## 🚀 Características Principales

### 1️⃣ Enfoque Copilot CLI
- Workflow que usa `Copilot CLI` directamente
- Evaluación rápida de issues
- Facilidad de integración
- [Documentación completa →](./docs/ENFOQUE_1_COPILOT_CLI.md)

### 2️⃣ Enfoque Workflow Agéntico
- Agente autónomo que analiza issues
- Clasificación inteligente basada en contenido
- Etiquetado automático
- Comentarios detallados
- [Documentación completa →](./docs/ENFOQUE_2_GITHUB_CLI_AGENTIC.md)

### 🎨 Single Page Application (SPA)
- Tema visual del GitHub Community Day 2026 Perú
- Interfaz interactiva con:
  - 🐱 **Botón Shuffle**: Cambia entre 3 emojis de gatos
  - 🎨 **Barra de Color**: Ajusta el color de fondo en tiempo real
  - 📱 Diseño responsivo

## 📂 Estructura del Proyecto

```
GitHub-Community-Day-2026/
├── public/                          # 🌐 Single Page Application
│   ├── index.html                  # Página principal
│   ├── styles.css                  # Estilos CSS
│   └── script.js                   # Lógica interactiva
│
├── .github/
│   └── workflows/
│       ├── classify-issues-copilot-cli.yml      # Enfoque 1
│       └── agentic-classifier.yml               # Enfoque 2
│
├── docs/                            # 📚 Documentación
│   ├── ENFOQUE_1_COPILOT_CLI.md
│   ├── ENFOQUE_2_GITHUB_CLI_AGENTIC.md
│   └── GUIA_INSTALACION.md
│
├── assets/                          # 🖼️ Recursos
│   └── images/
│
├── _config.yml                      # Configuración GitHub Pages
└── README.md                        # Este archivo
```

## 🎯 Categorías de Clasificación

Los workflows clasifican los issues en 4 categorías:

| Emoji | Categoría | Descripción |
|-------|-----------|-------------|
| 🐛 | **Bug** | Reportes de errores y defectos |
| 💡 | **Sugerencia** | Mejoras y propuestas |
| ✨ | **Funcionalidad** | Nuevas características |
| ❌ | **Descartado** | Issues inválidos o duplicados |

## 🔧 Instalación Rápida

### Requisitos
- Git
- GitHub CLI (`gh`)
- Acceso a este repositorio

### Steps

1. **Clonar el repositorio**
```bash
git clone https://github.com/AlexBlanco21/GitHub-Community-Day-2026.git
cd GitHub-Community-Day-2026
```

2. **Autenticarse con GitHub**
```bash
gh auth login
```

3. **Habilitar GitHub Pages** (opcional)
   - Ve a Settings → Pages
   - Selecciona Main branch como source
   - Guarda cambios

Para instrucciones detalladas, ve a [Guía de Instalación](./docs/GUIA_INSTALACION.md)

## 🌐 Demo en Vivo

La SPA está disponible en: **https://alexblanco21.github.io/GitHub-Community-Day-2026/**

### Características de la SPA
- 🎨 Banner del evento con animaciones
- 🐱 3 emojis de gatos intercambiables
- 🌈 Barra deslizante para cambiar colores
- 📱 Completamente responsivo
- ⌨️ Soporte para teclado (presiona Space para cambiar gato)

## 📖 Como Usar

### Crear un Issue de Prueba

```bash
gh issue create \
  --title "Bug: El sitio no carga en móvil" \
  --body "El sitio presenta problemas en dispositivos móviles"
```

El workflow se ejecutará automáticamente y:
1. ✅ Analizará el contenido
2. ✅ Clasificará el issue
3. ✅ Agregará etiquetas automáticas
4. ✅ Añadirá un comentario con el análisis

### Ejecutar Workflow Manualmente

```bash
# Enfoque 1: Copilot CLI
gh workflow run classify-issues-copilot-cli.yml --ref main

# Enfoque 2: Agentic Workflow
gh workflow run agentic-classifier.yml --ref main
```

## 📚 Documentación

- [Enfoque 1: Copilot CLI](./docs/ENFOQUE_1_COPILOT_CLI.md) - Detalles técnicos y configuración
- [Enfoque 2: Agentic Workflow](./docs/ENFOQUE_2_GITHUB_CLI_AGENTIC.md) - Arquitectura y ejemplos
- [Guía de Instalación](./docs/GUIA_INSTALACION.md) - Paso a paso completo

## 🔍 Monitoreo

Puedes ver los workflows en acción:

1. Ve a la pestaña **Actions** en el repositorio
2. Selecciona cualquiera de los workflows:
   - "Classify Issues with Copilot CLI"
   - "Agentic Issue Classifier"
3. Haz clic en una ejecución para ver los detalles

## 📊 Comparativa de Enfoques

| Aspecto | Copilot CLI | Agentic Workflow |
|---------|-------------|-----------------|
| **Complejidad** | Media | Alta |
| **Velocidad** | Rápida | Media |
| **Autonomía** | Guiada | Autónoma |
| **Flexibilidad** | Media | Alta |
| **Mantenibilidad** | Alta | Media |
| **Caso de Uso** | Tareas simples | Análisis complejos |

## 🤝 Contribuciones

Las contribuciones son bienvenidas! Por favor:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 💡 Ideas para Mejorar

- [ ] Agregar soporte para más idiomas
- [ ] Implementar machine learning para mejor clasificación
- [ ] Crear dashboard de estadísticas de issues
- [ ] Integración con proyectos de GitHub
- [ ] Notificaciones por email
- [ ] API personalizada para clasificación

## 📝 Licencia

Este proyecto está bajo la licencia **MIT**. Ver [LICENSE](LICENSE) para más detalles.

## 👥 Autores

- **Alex Blanco** - Creador principal
- **GitHub Student Clubs - UTP** - Organizadores del evento

## 🎓 Recursos Útiles

- [GitHub Actions Documentation](https://docs.github.com/actions)
- [GitHub Copilot CLI Docs](https://docs.github.com/copilot/github-copilot-cli)
- [GitHub CLI Documentation](https://cli.github.com/manual)
- [API REST de GitHub](https://docs.github.com/rest)

## 📞 Soporte

¿Preguntas? Abre un [issue](https://github.com/AlexBlanco21/GitHub-Community-Day-2026/issues) o contacta con los organizadores del evento.

---

<div align="center">

**GitHub Community Day 2026 - Perú** 🇵🇪  
UTP Lima Centro Torre Arequipa  
6 de Junio | 9:00 AM

![GitHub](https://img.shields.io/badge/GitHub-Powered-000?style=for-the-badge&logo=github)
![Community](https://img.shields.io/badge/Community-Driven-blue?style=for-the-badge)

</div>
