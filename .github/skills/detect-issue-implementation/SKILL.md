# Detect Issue Implementation Skill

**Purpose**: Intelligently detect if a GitHub issue has been implemented and provide implementation references.

## Overview

This skill analyzes GitHub issues to determine if they have already been implemented by:
1. Searching for direct PR/commit references using GitHub linking syntax
2. Analyzing commit messages for issue mentions
3. Matching issue content with recent code changes
4. Verifying implementation dates and merge status

## Usage

This skill is used by the `detect-implemented-issues` workflow to:
- Process all open issues in a repository
- Find implementation evidence through multiple search strategies
- Close issues with high/medium confidence implementation references
- Generate detailed implementation summaries

## Detection Strategies

### Strategy 1: Direct PR References (Highest Priority)

Look for merged PRs with explicit issue linking:
- `Closes #123`
- `Fixes #123`
- `Resolves #123`
- `Implements #123`

**GitHub Tools**: 
```
search_issues("is:pr is:merged closes:${ISSUE_NUMBER}")
search_issues("is:pr is:merged fixes:${ISSUE_NUMBER}")
```

### Strategy 2: Commit Message References

Search commit history for issue mentions:
- `#123` in commit message
- `closes #123` in commit message
- References in PR body

**GitHub Tools**:
```
list_commits(branch: "main")
grep commit messages for "#${ISSUE_NUMBER}"
```

### Strategy 3: Semantic Matching

Match issue keywords with recent commits and PRs:
1. Extract keywords from issue title/description
2. Search commits from last 6 months for matching keywords
3. Analyze relevance and match quality

**Example**:
- Issue: "Add dark mode support"
- Search: commits with "dark" or "theme" keywords
- Match: Recent commit "feat: implement dark mode"

### Strategy 4: PR History Analysis

Review all merged PRs for related implementations:
1. Get list of recent merged PRs (last 30 days)
2. Check PR titles and descriptions for issue relevance
3. Verify if PR closes any open issues

**GitHub Tools**:
```
search_issues("is:pr is:merged sort:updated-desc")
```

## Confidence Levels

### High Confidence ✅
- Merged PR with explicit "Closes #123" / "Fixes #123" reference
- Commit with clear issue number reference (#123) in main branch
- Recent implementation (within 2 weeks of search)
- Clear code changes that directly implement requested feature

**Action**: Auto-close with high confidence

### Medium Confidence ⚠️
- Issue referenced in PR description or comments
- Commit mentioning issue number but not explicitly closing
- Thematic match with recent merged PR
- Implementation date reasonably recent (within 2 months)

**Action**: Close with medium confidence (may require manual verification)

### Low Confidence ❌
- Indirect references or tenuous semantic matches
- Very old implementation (older than 3 months)
- Multiple possible PRs/commits with unclear match
- No explicit issue reference

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

## Processing Algorithm

```
FUNCTION detect_implementation(issue):
  1. Extract issue number, title, description, labels
  
  2. Search for direct PR references:
     IF found merged PR with "closes #${issue_number}":
       RETURN {confidence: "high", pr: ..., commit: ...}
  
  3. Search for commit references:
     FOR each commit in last 6 months:
       IF commit message contains "#${issue_number}":
         IF commit is in main branch:
           RETURN {confidence: "medium", commit: ...}
  
  4. Semantic matching:
     keywords = extract_keywords(issue.title + issue.description)
     FOR each keyword:
       FOR each commit in last 3 months:
         IF commit.message contains keyword:
           IF match_score > 0.7:
             RETURN {confidence: "medium", commit: ...}
  
  5. PR history analysis:
     FOR each merged PR from last 30 days:
       IF pr.description or pr.title relates to issue:
         IF match_score > 0.7 and pr.merged:
           RETURN {confidence: "medium", pr: ...}
  
  6. RETURN {confidence: "low"} if no evidence found
END FUNCTION
```

## Edge Cases

### Case 1: Multiple Related PRs
When multiple PRs reference the same issue:
- Use the most recent merged PR
- If dates are close, prefer explicit "Closes" reference over semantic match

### Case 2: Partial Implementation
When issue is partially implemented (multiple subtasks):
- Check if main functionality is implemented
- Look for "closes" or "fixes" in any related PR
- Document which parts are implemented in the comment

### Case 3: Reverted Implementation
When a commit is reverted:
- Check if revert commit exists
- If reverted, mark as NOT implemented
- Do not close the issue

### Case 4: Different Repository
When implementation is in a different repository:
- Check cross-repo references in PR/commits
- Document external implementation
- Still close with appropriate reference

## Keyword Extraction

For semantic matching, extract keywords from:
- Issue title (primary)
- Issue description (secondary)
- Issue labels (tertiary)

Examples:
```
Issue: "Add authentication"
Keywords: [authentication, auth, login, signin]

Issue: "Fix memory leak in image processing"
Keywords: [memory, leak, image, processing, fix, bug]

Issue: "Dark mode support"
Keywords: [dark, mode, theme, dark mode, ui]
```

## Time Considerations

- **Search Window**: Last 6 months of commits
- **Recent Implementation**: Within 2 weeks (high confidence)
- **Medium Timeframe**: 2 weeks to 3 months
- **Stale Implementation**: Older than 3 months (low confidence unless explicit reference)

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

1. **Issue is still open**: Re-check before closing
2. **Implementation is recent**: Within 6 months
3. **Implementation is relevant**: Core feature/bug is addressed
4. **No conflicting evidence**: No "do not close" comments from maintainers
5. **Clear reference**: Can trace back to specific PR/commit

## Limitations & Constraints

- Only analyzes commits on default branch (main/master)
- Does not analyze PR descriptions in detail (only titles and explicit linking)
- Does not track implementation across multiple repositories
- Semantic matching has accuracy limits (70%+ confidence required)
- May miss implementations that don't follow standard PR practices

## Performance Tuning

For large repositories:

1. **Limit search scope**: 
   - Focus on issues created in last 6 months
   - Search commits from last 6 months only

2. **Batch processing**:
   - Process 10-20 issues per workflow run
   - Use pagination for API calls
   - Cache results between checks

3. **Timeout settings**:
   - 30 seconds per issue analysis
   - 60 second timeout per batch
   - Overall workflow timeout: 30 minutes

## Success Criteria

The skill is successful when:
- ✅ Correctly identifies 90%+ of actually-implemented issues
- ✅ Minimizes false positives (< 10% close rate on not-yet-implemented issues)
- ✅ Provides clear, actionable implementation references
- ✅ Completes analysis within timeout limits
- ✅ Generates detailed reports for review

## Integration with Workflow

The workflow calls this skill to:

```
For each open issue:
  result = detect_implementation(issue)
  
  if result.confidence == "high" or result.confidence == "medium":
    close_issue(issue_number)
    add_comment(issue_number, generate_implementation_comment(result))
    log_action("closed", issue_number, result)
  else:
    log_action("skipped", issue_number, "low_confidence")
```
