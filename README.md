# webpack-hash-bug-test

```bash
npm run compile
cp -r target before

# This branch includes a small rename change
git checkout changes

npm run compile
cp -r target after

# Observe the hashes of each chunk
ls before after

# If we diff the outputs, we see:
# 1. "main" chunk content and hash changed ✅
# 2. "internal-error-route~not-found-route" chunk content did not change, yet hash did ❌
git diff --no-index before after
```