const path = require('path');

module.exports = {
    process() {
        return {
            code: `module.exports = () => '<svg data-testid="mock-svg" />';`,
        };
    },
    getCacheKey() {
        return 'svgTransform';
    },
};