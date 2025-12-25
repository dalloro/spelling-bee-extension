const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const DIST_DIR = path.join(__dirname, '../dist');
const ROOT_DIR = path.join(__dirname, '..');
const ZIP_FILE = path.join(ROOT_DIR, 'spelling-bee-extension.zip');

async function build() {
    console.log('🚀 Starting build...');

    // 1. Clean dist directory
    if (fs.existsSync(DIST_DIR)) {
        console.log('🧹 Cleaning dist directory...');
        fs.rmSync(DIST_DIR, { recursive: true, force: true });
    }
    fs.mkdirSync(DIST_DIR);

    // 2. Bundle JS with esbuild
    console.log('📦 Bundling JavaScript...');
    await esbuild.build({
        entryPoints: [path.join(ROOT_DIR, 'popup.js')],
        bundle: true,
        outfile: path.join(DIST_DIR, 'popup_bundle.js'),
        minify: true,
        sourcemap: true,
        platform: 'browser',
    });

    // 3. Copy Assets
    console.log('📂 Copying assets...');
    const assets = [
        'manifest.json',
        'popup.html',
        'popup.css',
        'words.js',
        'puzzles.js',
        'icons'
    ];

    assets.forEach(asset => {
        const src = path.join(ROOT_DIR, asset);
        const dest = path.join(DIST_DIR, asset);
        if (fs.existsSync(src)) {
            if (fs.lstatSync(src).isDirectory()) {
                fs.cpSync(src, dest, { recursive: true });
            } else {
                fs.copyFileSync(src, dest);
            }
        }
    });

    // 4. Modify popup.html (though it already points to dist/popup_bundle.js, 
    // we should make it point to just popup_bundle.js since it's now in the same folder)
    console.log('📝 Adjusting popup.html paths...');
    const htmlPath = path.join(DIST_DIR, 'popup.html');
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');
    htmlContent = htmlContent.replace('src="dist/popup_bundle.js"', 'src="popup_bundle.js"');
    fs.writeFileSync(htmlPath, htmlContent);

    // 5. Create Zip
    console.log('🗜️ Creating zip archive...');
    await zipDirectory(DIST_DIR, ZIP_FILE);

    console.log('✅ Build complete!');
    console.log(`📦 Zip file: ${ZIP_FILE}`);
}

function zipDirectory(sourceDir, outPath) {
    const archive = archiver('zip', { zlib: { level: 9 } });
    const stream = fs.createWriteStream(outPath);

    return new Promise((resolve, reject) => {
        archive
            .directory(sourceDir, false)
            .on('error', err => reject(err))
            .pipe(stream);

        stream.on('close', () => resolve());
        archive.finalize();
    });
}

build().catch(err => {
    console.error('❌ Build failed:', err);
    process.exit(1);
});
