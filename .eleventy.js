const yaml = require("js-yaml");
const fs = require("fs");

function configurePassthroughCopyForStaticFolder(eleventyConfig) {
    const staticRoot = "src/static/";
    const copyConfig = {};
    for (let file of fs.readdirSync(staticRoot)) {
        copyConfig[staticRoot + file] = file;
    }
    eleventyConfig.addPassthroughCopy(copyConfig);
}

function registerFilters(eleventyConfig) {
    eleventyConfig.addFilter("date_day", (value) => {
        return new Date(value).getDate();
    });

    eleventyConfig.addFilter("date_month_de", (value) => {
        const months = [
            "Januar",
            "Februar",
            "März",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Dezember",
        ]
        return months[new Date(value).getMonth()];
    });

    eleventyConfig.addFilter("date_year", (value) => {
        return new Date(value).getFullYear();
    });
}

function configureMarkdown(eleventyConfig) {
    eleventyConfig.setLibrary("md",
        require("markdown-it")({html: true})
            .use(require("markdown-it-attrs")))
}

module.exports = (eleventyConfig) => {

    eleventyConfig.addWatchTarget("./src/css")

    eleventyConfig.addDataExtension("yml", yaml.load);

    configurePassthroughCopyForStaticFolder(eleventyConfig);
    eleventyConfig.addPassthroughCopy({
        "node_modules/uikit/dist/js/uikit.min.js": "js/uikit.min.js",
        "node_modules/@fortawesome/fontawesome-free/webfonts/*": "webfonts"
    });

    registerFilters(eleventyConfig);

    configureMarkdown(eleventyConfig);

    eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-syntaxhighlight"));

    return {
        dir: {
            input: "src/site",
            output: "dist",
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
}
