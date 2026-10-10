# RAW Studio

RAW Studio is a desktop app packaged from this repository's web app. It uses Electron to run `index.html` as a desktop application and GitHub Actions to build downloadable releases.

> **Note:** To run on Linux, run this command, and make sure the file is an executable program
  '/home/YOUR_USER_NAME/RAW-Studio-1.0.0.AppImage' --no-sandbox


## Downloads

Download the latest version from **[GitHub Releases](../../releases/latest)**.

Each release is expected to include:

| File | Platform | Format |
| --- | --- | --- |
| `RAW-Studio-<version>.exe` | Windows, 64-bit | Portable executable |
| `RAW-Studio-<version>.AppImage` | Linux, 64-bit | AppImage |

The exact filenames may vary by release. Download the file for your operating system from the release's **Assets** section.

### Windows

1. Download the `.exe` file from the release's **Assets**.
2. Open the downloaded file to run the app.
3. Windows may show a SmartScreen warning because the app is not code-signed. Only continue if you trust the source of the download.

### Linux

1. Download the `.AppImage` file from the release's **Assets**.
2. Allow the file to run as a program. Depending on your desktop environment, this may be available under the file's **Properties → Permissions**.
3. Open the AppImage.

Some Linux distributions may require AppImage/FUSE support. The provided build is for 64-bit x86 systems; other architectures are not currently configured.

## Features

Add a short, accurate list of the app's features here. For example:

- Describe the image formats the app supports.
- Describe the editing or viewing tools currently available.
- Note any limitations users should know about.

Do not list features that are not implemented in the current version.

## Repository contents

| Path | Purpose |
| --- | --- |
| `index.html` | Web app entry point loaded by Electron |
| `main.js` | Electron main process; creates the application window |
| `package.json` | App metadata, dependencies, and packaging configuration |
| `.github/workflows/build.yml` | GitHub Actions workflow for building and publishing downloads |

## How releases are built

GitHub Actions builds the app on GitHub-hosted runners; you do not need to build it on your own computer to download a release.

When a version tag such as `v1.0.2` is published:

1. The Linux job packages an x64 AppImage.
2. The Windows job packages an x64 portable `.exe`.
3. The release job attaches both build artifacts to the GitHub Release.

Build progress and errors are shown in the repository's **[Actions](../../actions)** tab. The finished downloads are listed under **[Releases](../../releases)**.

## Creating a release

To make a release using GitHub in a web browser:

1. Make sure the latest changes, including `.github/workflows/build.yml`, are committed to the repository's default branch.
2. Update the `version` in `package.json` to the new version number. For example, for the tag `v1.0.2`, set it to `"1.0.2"`. This keeps the version in the downloaded filenames consistent with the release.
3. Commit that change to the default branch.
4. Open **Releases → Draft a new release**.
5. Choose **Create a new tag** and enter a tag such as `v1.0.2`—with no period between `v` and the first digit.
6. Set the target to the default branch, enter a release title and notes, then publish the release.
7. Open **Actions** and wait for the Linux, Windows, and release jobs to finish successfully.
8. Open the new release and confirm both files appear under **Assets**.

Use a new tag for every release. A published tag cannot be reused for a different release.

## Build configuration

The current project is configured to use:

- Electron `22.3.27`
- electron-builder `24.13.3`
- Linux x64 AppImage output
- Windows x64 portable executable output

The workflow uses `--publish never` during packaging. GitHub Actions uploads the build outputs and the release job attaches them to the GitHub Release.

## Security and maintenance

Electron `22.3.27` is an older Electron release and no longer receives current security fixes. Before distributing this app for general use, consider upgrading Electron and electron-builder to supported versions, testing the app on each intended operating system, and reviewing the application's security settings.

Release downloads are not currently code-signed. Signing can help users verify that an installer or executable comes from the expected publisher, but requires additional signing credentials and workflow configuration.

## Contributing

Contributions are welcome. Before opening a pull request:

1. Keep the app's actual behavior and this README in sync.
2. Test changes to `index.html` and `main.js`.
3. Check the GitHub Actions workflow if build or packaging files change.

## License

The licence is Apache 2.0
