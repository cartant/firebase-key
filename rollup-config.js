export default {
    input: "dist/index.js",
    output: {
        banner: "/*MIT license https://github.com/cartant/firebase-key/blob/master/LICENSE*/",
        file: "bundles/firebase-key.umd.js",
        format: "umd",
        name: "firebaseKey"
    }
}
