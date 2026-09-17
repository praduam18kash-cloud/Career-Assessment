#!/bin/sh
git filter-branch -f --env-filter '
OLD_NAME="cs-tatha"
NEW_NAME="Praduam Prakash"
NEW_EMAIL="praduam18kash@gmail.com"

if [ "$GIT_COMMITTER_NAME" = "$OLD_NAME" ]
then
    export GIT_COMMITTER_NAME="$NEW_NAME"
    export GIT_COMMITTER_EMAIL="$NEW_EMAIL"
fi
if [ "$GIT_AUTHOR_NAME" = "$OLD_NAME" ]
then
    export GIT_AUTHOR_NAME="$NEW_NAME"
    export GIT_AUTHOR_EMAIL="$NEW_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
