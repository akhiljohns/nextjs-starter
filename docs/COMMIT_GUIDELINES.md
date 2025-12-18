# Commit Message Guidelines

## 📝 Format

All commit messages **must** follow this format:

```
scope: short description

Optional longer description explaining the changes in detail.
Can be multiple lines.
```

## ✅ Valid Examples

```bash
# Feature development
user-profile: Add avatar upload functionality
dashboard: Implement real-time data updates
api: Add authentication middleware

# Bug fixes
bug: Fix memory leak in data table
login: Resolve session timeout issue

# UI/UX changes
ui: Update button hover states
navigation: Improve mobile menu animation

# Documentation
docs: Update API integration guide
readme: Add deployment instructions

# With longer description
auth: Implement JWT token refresh

Added automatic token refresh mechanism that runs
every 5 minutes. This prevents users from being
logged out unexpectedly during active sessions.
```

## ❌ Invalid Examples

```bash
# ❌ Using conventional commit keywords
feat: Add new feature
fix: Bug fix
chore: Update dependencies

# ❌ Missing colon
user-profile Add avatar

# ❌ Missing space after colon
user-profile:Add avatar

# ❌ Uppercase in scope
UserProfile: Add feature
User-Profile: Add feature

# ❌ No description
user-profile:

# ❌ Empty message
```

## 🎯 Scope Guidelines

### What is a Scope?

The scope identifies **what part of the codebase** the commit affects.

### Good Scopes

Use descriptive, lowercase scopes with hyphens:

- **Feature names**: `user-profile`, `shopping-cart`, `payment-flow`
- **Page names**: `dashboard`, `login`, `settings`
- **Component names**: `data-table`, `modal`, `dropdown`
- **System areas**: `api`, `auth`, `database`, `ui`
- **Bug fixes**: `bug`, `hotfix`
- **Documentation**: `docs`, `readme`

### Scope Naming Rules

✅ **DO:**

- Use lowercase letters
- Use hyphens for multi-word scopes
- Be specific and descriptive
- Use existing scopes when applicable

❌ **DON'T:**

- Use uppercase letters
- Use underscores or spaces
- Use conventional keywords (feat, fix, chore, etc.)
- Be too vague (e.g., "update", "change")

## 🚫 Forbidden Keywords

These conventional commit keywords are **NOT allowed**:

- `feat` / `feature`
- `fix`
- `docs`
- `style`
- `refactor`
- `test`
- `chore`
- `perf`
- `ci`
- `build`
- `revert`

**Why?** We prefer descriptive scopes that clearly indicate what part of the codebase changed, rather than generic action words.

## 📋 Commit Message Structure

### Short Description (Required)

- Keep it under 72 characters
- Start with a verb in present tense
- Be clear and concise
- Don't end with a period

```bash
# ✅ Good
user-profile: Add avatar upload feature
dashboard: Fix loading spinner alignment

# ❌ Bad
user-profile: added avatar upload feature.  # Past tense, has period
dashboard: fix                              # Too vague
```

### Long Description (Optional)

- Add a blank line after the short description
- Explain **why** the change was made
- Describe **what** was changed in detail
- Can include bullet points

```bash
auth: Implement JWT token refresh

Added automatic token refresh mechanism that prevents
users from being logged out during active sessions.

Changes:
- Token refreshes every 5 minutes
- Handles refresh failures gracefully
- Stores refresh token in secure httpOnly cookie
```

## 🔧 How It Works

### Pre-Commit Validation

When you run `git commit`, a hook automatically validates your message:

```bash
git commit -m "user-profile: Add avatar upload"
# ✅ Commit message format is valid!
# Commit succeeds

git commit -m "feat: Add feature"
# ❌ Conventional commit keywords not allowed!
# Commit blocked
```

### Validation Rules

1. **Format check**: Must match `scope: description`
2. **Scope check**: Must be lowercase with hyphens only
3. **Keyword check**: Must not use conventional keywords
4. **Description check**: Must have a description after colon

## 💡 Tips

### Finding the Right Scope

Ask yourself:

- What file/folder am I changing?
- What feature does this affect?
- What would help someone understand this change?

### Examples by Change Type

| Change Type   | Scope Example                                    |
| ------------- | ------------------------------------------------ |
| New feature   | `feature-name: Add ...`                          |
| Bug fix       | `bug: Fix ...` or `component-name: Fix ...`      |
| UI change     | `ui: Update ...` or `component-name: Update ...` |
| API change    | `api: Add ...` or `endpoint-name: Update ...`    |
| Documentation | `docs: Update ...`                               |
| Configuration | `config: Update ...`                             |
| Testing       | `tests: Add ...`                                 |

### Multi-File Changes

If your commit touches multiple areas, choose the **primary** scope:

```bash
# If mainly changing user profile, even if touching other files
user-profile: Add avatar upload and settings page

# If it's truly cross-cutting, use a broader scope
ui: Update theme colors across components
```

## 🚨 Bypassing Validation (Emergency Only)

In rare emergencies, you can bypass validation:

```bash
git commit --no-verify -m "Emergency fix"
```

**⚠️ Use sparingly!** You'll need to fix the message later.

## 📊 Commit Message Examples by Scenario

### Adding a Feature

```bash
shopping-cart: Add item quantity selector
payment: Implement Stripe integration
user-settings: Add email notification preferences
```

### Fixing a Bug

```bash
bug: Fix memory leak in data table
login: Resolve session timeout issue
navigation: Fix mobile menu not closing
```

### Updating UI

```bash
ui: Update button hover states
theme: Add dark mode support
layout: Improve responsive breakpoints
```

### API Changes

```bash
api: Add user authentication endpoint
api: Update rate limiting configuration
api: Remove deprecated v1 endpoints
```

### Documentation

```bash
docs: Update API integration guide
readme: Add deployment instructions
docs: Fix typos in contributing guide
```

### Configuration

```bash
config: Update ESLint rules
config: Add production environment variables
config: Update TypeScript strict mode settings
```

## ✅ Quick Reference

```bash
# Template
scope: short description

# Real examples
user-profile: Add avatar upload
bug: Fix memory leak in data table
ui: Update button hover states
api: Add authentication endpoint
docs: Update deployment guide

# With long description
auth: Implement JWT token refresh

Added automatic token refresh to prevent
unexpected logouts during active sessions.
```

---

**Remember:** Good commit messages help your team understand changes quickly and make debugging easier!
