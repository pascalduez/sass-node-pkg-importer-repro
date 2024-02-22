const { compileString, NodePackageImporter } = require('sass');

compileString('@use "pkg:@stuff/tokens/colors"', {
  importers: [new NodePackageImporter()],
});
