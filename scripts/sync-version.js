// MIT License
// Copyright (c) 2025 Livio Dalloro
// See LICENSE file for details.

const fs = require('fs');
const path = require('path');

function syncVersion() {
    const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
    const manifestPath = path.join(__dirname, '../extension/manifest.json');

    if (fs.existsSync(manifestPath)) {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        if (manifest.version === packageJson.version) {
            console.log(`✅ Version already in sync: ${packageJson.version}`);
            return;
        }
        manifest.version = packageJson.version;
        fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
        console.log(`🚀 Synced version ${packageJson.version} to manifest.json`);
    } else {
        console.error('❌ manifest.json not found at ' + manifestPath);
        process.exit(1);
    }
}

// Run if called directly
if (require.main === module) {
    syncVersion();
}

module.exports = syncVersion;
