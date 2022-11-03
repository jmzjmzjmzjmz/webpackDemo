module.exports = {
    plugins: [
        [
            'import',
            {
                libraryName: 'patsnap-biz',
                customName(name) {
                    return `@patsnap-biz/${name}`;
                },
                style(name) {
                    return `${name}/lib/style`;
                },
            }
        ],
    ]
}