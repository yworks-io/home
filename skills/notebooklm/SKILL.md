# NotebookLM Skill

Use this skill to automate Google NotebookLM: create notebooks, bulk-import sources, generate podcasts/videos/quizzes/mindmaps, and download all artifacts. Powered by the `notebooklm` CLI (notebooklm-py v0.3.2).

## Prerequisites

Authentication must be completed first:
```bash
notebooklm login   # Opens browser → Google OAuth
notebooklm status  # Verify: shows "Authenticated as: email@..."
```

## Key Commands

```bash
# Notebooks
notebooklm list                        # List all notebooks
notebooklm create "Title"              # Create notebook
notebooklm use <id>                    # Set active notebook

# Sources
notebooklm source add "https://..."   # Add URL
notebooklm source add ./file.pdf      # Add local file
notebooklm source list                 # List sources
notebooklm source list --json          # JSON output for parsing

# Chat
notebooklm ask "question"             # Ask notebook a question

# Generate
notebooklm generate audio "focus on X"  # Podcast (MP3)
notebooklm generate video               # Video (MP4)
notebooklm generate quiz                # Quiz
notebooklm generate mind-map            # Mind map (instant)
notebooklm generate slide-deck          # Slides (PDF)
notebooklm generate flashcards          # Flashcards
notebooklm generate report              # Report (Markdown)

# Download
notebooklm download audio ./out.mp3
notebooklm download quiz --format markdown ./quiz.md

# Artifact status
notebooklm artifact list
```

## Use --json for Machine-Readable Output

```bash
notebooklm create "Title" --json       # → {"id": "abc123..."}
notebooklm source add "url" --json     # → {"source_id": "def456..."}
notebooklm source list --json          # → {"sources": [...]}
notebooklm artifact list --json        # → {"artifacts": [...]}
```

## Bulk Import Pattern (e.g. docs site)

```bash
# 1. Fetch sitemap
curl https://docs.example.com/sitemap.xml | grep -oP '(?<=<loc>)[^<]+' > urls.txt

# 2. Create notebook
notebooklm create "Docs: ExampleSite" --json  # save the id

# 3. Batch import
while read url; do
  notebooklm source add "$url" --notebook <id>
done < urls.txt

# 4. Check for duplicates
notebooklm source list --json | jq '[.sources[].title] | group_by(.) | map(select(length>1))'

# 5. Audit
notebooklm source list --json | jq '.sources | length'
```

## Source Limit

Max **50 sources** per notebook. For large doc sites, filter/deduplicate first.

## Language

```bash
notebooklm language set zh_Hans        # Set to Simplified Chinese for all artifacts
notebooklm language set en             # Back to English
```

## Troubleshooting

```bash
notebooklm auth check                  # Diagnose auth
notebooklm login                       # Re-authenticate
notebooklm --version                   # Check version (should be 0.3.2+)
notebooklm skill install               # Update skill
```

Auth errors → re-run `notebooklm login`.
Rate limit errors → wait 5-10 min, retry.
Generation times: audio 10-20min, video 15-45min, mind-map instant.
