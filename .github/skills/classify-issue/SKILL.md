---
name: classify-issue
description: Classifies GitHub issues into 4 categories (bug, new feature, suggestion, critical fix) and assigns priority levels from 1-5
---

# Issue Classification Skill

## Purpose
This skill classifies GitHub issues into 4 predefined categories and assigns priority levels to help with issue triage and management.

## Categories

1. **🐛 Bug** (Priority 2)
   - Definition: Errors discovered in some functionality
   - Examples: Crash, error, fail, broken functionality, defect
   - Priority: 2/5

2. **⚠️ Critical Fix** (Priority 1)
   - Definition: Something that must be attended as soon as possible since it is degrading the experience of the page itself
   - Examples: Site down, complete outage, blocking functionality, urgent
   - Priority: 1/5 (Highest)

3. **✨ New Feature** (Priority 3-5)
   - Definition: Things that the website currently does not support and would require new developments
   - Examples: Add new functionality, implement new feature, enhancement request
   - Priority: 4/5 (Default for features)

4. **💡 Suggestion** (Priority 3-5)
   - Definition: Could be refactorings, changing the frontend, design improvements, etc.
   - Examples: Refactor, improve UX, design change, code cleanup
   - Priority: 3/5 (Default for suggestions)

5. **❌ Non-Valid** (No Priority)
   - Definition: Issue content is not valid (empty, random text, numbers only, nonsense, spam)
   - Examples: Empty description, random characters, numbers only, no coherent text
   - Action: Issue will be automatically closed as "not planned"

## Classification Rules

### Critical Fix Detection (Priority 1)
Keywords: `urgent`, `critical`, `broken`, `crash`, `down`, `not working`, `completely broken`, `site down`, `outage`, `caído`, `crítico`, `urgente`

### Bug Detection (Priority 2)
Keywords: `bug`, `error`, `fail`, `issue`, `problema`, `falla`, `defect`, `broken`, `not working`

### New Feature Detection (Priority 4)
Keywords: `feature`, `add`, `new`, `implement`, `functionality`, `nueva`, `agregar`, `implementar`, `característica`, `enhancement`

### Suggestion Detection (Priority 3)
Keywords: `suggest`, `improve`, `idea`, `proposal`, `refactor`, `mejorar`, `propuesta`, `sugerencia`, `cambio`, `design`, `frontend`, `ui`, `ux`

## Priority Scale

- **1**: Critical fixes (system-breaking issues)
- **2**: Bugs (functional errors)
- **3**: Suggestions (lower-priority improvements)
- **4**: New features (important enhancements)
- **5**: Features (nice-to-have enhancements) but that are not urgent or require significant development effort

## Non-Valid Detection Rules

An issue is considered **non-valid** if:
- Title and body are empty or only contain whitespace
- Content is primarily numbers or special characters with no meaningful text
- Content is random/gibberish text with no coherent meaning
- Content appears to be spam or irrelevant

## Output

The skill produces:
- **Category**: One of: `bug`, `critical fix`, `new feature`, `suggestion`, `non-valid`
- **Priority**: Numeric value 1-5, or `null` for non-valid
- **Labels**: GitHub labels to be applied (e.g., `bug`, `critical`, `enhancement`, `feature`, `suggestion`, `invalid`)
- **Comment**: Formatted comment for the GitHub issue
- **Action**: For non-valid issues, the workflow will close the issue as "not planned"

## Usage in Workflows

This skill is designed to be used in GitHub Actions workflows with the Copilot CLI to automatically classify issues when they are opened or edited.

### Example Integration
```yaml
- name: Classify Issue with Copilot CLI
  uses: austenstone/copilot-cli@3.0
  with:
    gh-token: ${{ secrets.GITHUB_TOKEN }}
    prompt: |
      Classify the following GitHub issue using the classify-issue skill.
      
      Issue #${{ github.event.issue.number }}
      Title: ${{ github.event.issue.title }}
      Body: ${{ github.event.issue.body }}
      
      Return the classification as JSON with keys: category, priority, labels
```
