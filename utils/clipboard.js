// MIT License
// Copyright (c) 2025 Livio Dalloro
// See LICENSE file for details.

/**
 * Clipboard Utilities
 * Shared robust clipboard copy logic (modern API + legacy fallback)
 * Used by both Chrome Extension and Mobile Web App
 */

/**
 * Copy text to clipboard with robust fallback
 * @param {string} text - The text to copy
 * @param {Function} onSuccess - Callback when copy succeeds
 * @param {Function} onError - Callback when copy fails (optional)
 * @param {Function} promptFn - Optional prompt function for ultimate fallback (e.g. window.prompt)
 */
export async function copyToClipboard(text, onSuccess, onError, promptFn) {
    // 1. Try modern API first
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(text);
            if (onSuccess) onSuccess();
            return;
        }
    } catch (err) {
        console.warn('Modern clipboard API failed, trying fallback', err);
    }

    // 2. Fallback: Textarea method
    try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        // Ensure it's not visible but still works
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);

        if (successful) {
            if (onSuccess) onSuccess();
        } else {
            throw new Error('execCommand returned false');
        }
    } catch (err) {
        console.error('Fallback copy failed', err);
        if (onError) onError(err);

        // 3. Ultimate fallback: Prompt user to copy manually
        if (promptFn) {
            promptFn(text);
        }
    }
}
