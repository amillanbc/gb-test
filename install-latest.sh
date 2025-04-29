LATEST=$(curl -s https://api.github.com/repos/bluecorela/gb-components-library/releases/latest | jq -r '.assets[] | select(.name | endswith(".tgz")) | .browser_download_url')
npm install "$LATEST"