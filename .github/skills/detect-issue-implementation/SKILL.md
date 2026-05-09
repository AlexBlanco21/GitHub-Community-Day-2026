# Detect Issue Implementation Skill

**Purpose**: Intelligently detect whether a GitHub issue has already been implemented by prioritizing direct analysis of the CURRENT source code before checking repository PRs or commits.

## Overview

This skill analyzes GitHub issues to determine whether they are already implemented.

The skill MUST:

1. Inspect the current repository source code first
2. Verify the requested behavior/configuration exists in code
3. Only if code evidence is insufficient, check direct PR/commit references
4. Avoid semantic or title-based guessing
5. Return confidence-based implementation evidence strictly tied to verifiable implementation

## Usage

This skill is used by the `detect-implemented-issues` workflow to:
- Process all open issues in a repository
- Verify implementation directly in the current codebase
- Fallback to explicit PR/commit references only
- Close issues only when implementation is objectively verifiable
- Generate detailed implementation summaries

## Detection Strategies

### Strategy 1: Source Code Implementation Analysis (Highest Priority)

The FIRST and MOST IMPORTANT step is to inspect the repository source code and determine whether the requested functionality already exists.

This strategy takes absolute priority over all others and should do the following:
  1. Read the issue title and description to understand the requested behavior
  2. Extract concrete implementation requirements
  3. Inspect the repository files directly
  4. Verify the implementation exists in actual code/configuration/UI logic
  5. Only return implemented if the requested behavior is observable in source code

**GitHub Tools**: 
```
get_file_contents(path)
search_code(query)

```

### Strategy 2: Direct PR or Commit References (Fallback ONLY)

ONLY run this strategy if source code verification fails or is inconclusive.Search commit history for issue mentions:
- `#${ISSUE_NUMBER}` in commit message
- `closes #${ISSUE_NUMBER}` in commit message
- `fixes #${ISSUE_NUMBER}` in commit message
- `resolves #${ISSUE_NUMBER}` in commit message
- `implements #${ISSUE_NUMBER}` in commit message
- References in PR body

**GitHub Tools**:
```
list_commits(branch: "main")
grep commit messages for "#${ISSUE_NUMBER}"

```

### Processing Algorithm
FUNCTION detect_implementation(issue):

  1. Extract issue number, title, description

  2. Analyze requested behavior precisely

  3. SEARCH CURRENT SOURCE CODE FIRST
     - inspect components
     - inspect styles
     - inspect routes
     - inspect configs
     - inspect business logic

  4. IF implementation is verifiably present in code:
       RETURN {
         confidence: "high",
         strategy: "source_code_analysis",
         evidence: [...]
       }

  5. ELSE check explicit merged PR references:
       search_issues("closes #${issue_number}")
       search_issues("fixes #${issue_number}")

     IF explicit reference found:
       RETURN {
         confidence: "medium",
         strategy: "explicit_pr_reference"
       }

  6. ELSE check explicit commit references:
       grep commits for "#${issue_number}"

     IF explicit commit reference found:
       RETURN {
         confidence: "medium",
         strategy: "explicit_commit_reference"
       }

  7. RETURN {
       confidence: "low"
     }

END FUNCTION

## Confidence Levels

### High Confidence ✅
- Implementation is directly observable in current source code
- Exact files and code snippets can be identified
- Commit with clear issue number reference (#${issue_number}) in main branch

**Action**: Auto-close with high confidence

### Medium Confidence ⚠️
- Commit mentioning issue number but not explicitly closing
- Thematic match with recent merged PR
- Partial implementation observed in code but not fully matching requested behavior

**Action**: Do NOT Close but leave an issue comment with medium confidence

### Low Confidence ❌
- No explicit references found
- No source code evidence of implementation

**Action**: Skip - do not auto-close

## Implementation Reference Format

When closing an issue, include structured implementation reference:

```markdown
✅ **Issue Implementado**

Este issue ya se ha implementado.

**Referencia de Implementación:**
- **Commit**: [abc1234](https://github.com/repo/commit/abc1234) 
- **Mensaje**: "feat: add dark mode support"
- **PR Relacionado**: [#456](https://github.com/repo/pull/456)
- **Fecha de Implementación**: 2026-05-01
- **Rama**: main

Se procede a cerrar este issue.
```

## Data Points to Extract

For each issue being evaluated, gather:

```json
{
  "issue_number": 123,
  "issue_title": "Add dark mode support",
  "issue_created_at": "2026-04-01",
  "issue_labels": ["feature", "enhancement"],
  
  "implementation": {
    "confidence": "high|medium|low",
    "commit_sha": "abc1234def5678",
    "commit_message": "feat: add dark mode support",
    "commit_date": "2026-05-01",
    "pr_number": 456,
    "pr_title": "Dark mode implementation",
    "pr_merged_at": "2026-05-02",
    "days_to_implement": 31,
    "search_strategy": "direct_reference|semantic_match|commit_mention"
  }
}
```

## Edge Cases

### Case 1: PR Exists But Code Does Not

If:

- PR references issue
- But implementation no longer exists in code

Then:

  DO NOT close issue

Reason:

  Feature may have been reverted

### Case 2: Reverted Implementation

If:

- Code implementation removed
- Revert commit exists

Then:

  Mark as NOT implemented

Current codebase state is authoritative.

### Case 3: Partial Implementation

If only part of requested behavior exists:

confidence = medium

Do not auto-close unless core functionality is clearly complete.

## Limitations
- Only analyzes default branch
- Does not infer implementation from naming similarity
- Does not use semantic matching
- Does not assume merged PR means active implementation
- Current source code state is the source of truth

## Error Handling

### No GitHub Token
- Gracefully fail and report error
- Do not attempt to close issues
- Exit with informative message

### Rate Limiting
- Implement exponential backoff
- Cache search results
- Process in smaller batches if needed

### Parsing Errors
- If PR/commit data cannot be parsed, treat as low confidence
- Log parsing errors for debugging
- Do not close issues when uncertain

## Quality Assurance

Before closing an issue, verify:

1. Requested behavior exists NOW in current code
2. Implementation is directly observable
3. Evidence includes exact files/snippets
4. No reliance on semantic similarity
5. Explicit references only for fallback detection

## Limitations & Constraints

- Only analyzes default branch
- Does not infer implementation from naming similarity
- Does not use semantic matching
- Does not assume merged PR means active implementation
- Current source code state is the source of truth

## Performance Tuning

For large repositories:

1. Prioritize likely directories:
   src/
   components/
   pages/
   styles/
   api/
2. Restrict searches:
   Only relevant file types
   Only default branch
3. Cache code search results where possible

## Success Criteria

The skill is successful when:
- ✅ Source code is analyzed BEFORE repository history
- ✅ Issues are closed only with verifiable implementation evidence
- ✅ False positives are minimized
- ✅ Semantic guessing is eliminated
- ✅ Implementation references include exact code evidence
- ✅ Current repository state is treated as authoritative
