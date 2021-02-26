const path = require( 'path' )
const HtmlWebPackPlugins = require( 'html-webpack-plugin' )

const pwd = process.cwd()

const appIndexes = ['js', 'tsx', 'ts', 'jsx'].map( ( ext ) =>
    path.resolve( pwd, `src/index.${ext}` )
)

module.exports = {
    paths: function rec( paths, env ) {
        paths.appIndexJs = path.resolve( __dirname, 'src/index.js' )
        paths.appSrc = path.resolve( __dirname, 'src/' )
        return paths
    },
    webpack: function ( config, env ) {
        if ( !config.plugins ) {
            config.plugins = []
        }

        const entries = [
            {
                name: 'main',
                entry: path.resolve( __dirname, 'src/index.js' ),
                template: path.resolve( __dirname, 'public/index.html' ),
                outPath: 'index.html'
            },
        ]

        const defaultEntryHTMLPlugin = config.plugins.filter( function ( plugin ) {
            return plugin.constructor.name === 'HtmlWebpackPlugin'
        } )[0]

        defaultEntryHTMLPlugin.options.chunks = ['main']

        const multipleEntry = {}

        entries.forEach( _entry => {
           multipleEntry[_entry.name] = [].concat( _entry.entry )
            config.plugins.push(
                new defaultEntryHTMLPlugin.constructor(
                    Object.assign( {}, defaultEntryHTMLPlugin.options, {
                        filename: _entry.outPath,
                        template: _entry.template,
                        chunks: [_entry.name],
                        publicPath: '.',
                    } )
                )
            )
        } )

        config.entry = multipleEntry
        let names = config.output.filename.split( '/' ).reverse()

        if ( names[0].indexOf( '[name]' ) === -1 ) {
            names[0] = '[name].' + names[0]
            config.output.filename = names.reverse().join( '/' )
        }

        //console.log( `defaultEntryHTMLPlugin`, config )

        return config
    }
}