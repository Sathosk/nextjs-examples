#!/bin/bash
echo -n > githash-log.txt

last_hash=$(git rev-parse --short HEAD | cat)

time_stamp=$(git log -1 --pretty=format:"%ct" | xargs -I{} date -d @{})

echo "Last hash: $last_hash generated at $time_stamp" >> githash-log.txt
echo "export const commitHash = '$last_hash'" > src/utils/commit-hash.js

exit 0
