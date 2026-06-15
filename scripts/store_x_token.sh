#!/usr/bin/env bash
set -euo pipefail
secret_dir="${HOME}/.hermes/secrets"
secret_file="${secret_dir}/tsubuyaki-x.env"
mkdir -p "$secret_dir"
chmod 700 "$secret_dir"
printf 'Paste X bearer token (input hidden): ' >&2
IFS= read -rs token
printf '\n' >&2
if [[ -z "$token" ]]; then
  echo 'No token entered; leaving existing file unchanged.' >&2
  exit 1
fi
umask 077
printf 'X_BEARER_TOKEN=%s\n' "$token" > "$secret_file"
chmod 600 "$secret_file"
echo "Stored X bearer token in $secret_file" >&2
