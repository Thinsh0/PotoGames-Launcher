const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const cacheDir = path.join(__dirname, '.cache_dist', 'winCodeSign');
if (!fs.existsSync(cacheDir)) {
    // Try to create it if it doesn't exist yet
    fs.mkdirSync(cacheDir, { recursive: true });
}

// Check for existing archives
let files = fs.readdirSync(cacheDir).filter(f => f.endsWith('.7z'));

if (files.length === 0) {
    console.log('No winCodeSign archives found. Attempting to copy from existing .cache...');
    const oldCache = path.join(__dirname, '.cache', 'winCodeSign');
    if (fs.existsSync(oldCache)) {
        const oldFiles = fs.readdirSync(oldCache).filter(f => f.endsWith('.7z'));
        if (oldFiles.length > 0) {
            fs.copyFileSync(path.join(oldCache, oldFiles[0]), path.join(cacheDir, oldFiles[0]));
            files = [oldFiles[0]];
        }
    }
}

if (files.length === 0) {
    console.error('No winCodeSign archives found. Run the build once to trigger download.');
    process.exit(1);
}

const archivePath = path.join(cacheDir, files[0]);
const extractPath = path.join(cacheDir, 'winCodeSign-2.6.0');

console.log(`Extracting ${archivePath} into ${extractPath}...`);

if (!fs.existsSync(extractPath)) {
    fs.mkdirSync(extractPath, { recursive: true });
}

const sevenZa = path.join(__dirname, 'node_modules', '7zip-bin', 'win', 'x64', '7za.exe');

try {
    // Extract everything. It will fail on Darwin symlinks, but we catch it.
    console.log('Extracting archive (expecting some symlink errors on Darwin files)...');
    try {
        execSync(`"${sevenZa}" x "${archivePath}" -o"${extractPath}" -y`, { stdio: 'inherit' });
    } catch (e) {
        console.log('Notice: Extraction finished with exit code 2. This is expected if symbolic links (Darwin) could not be created.');
    }
    
    console.log('Cache preparation block finished.');
} catch (error) {
    console.error('Fatal error during cache preparation:', error);
}


