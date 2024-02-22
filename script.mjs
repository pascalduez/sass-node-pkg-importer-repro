import { compileString, NodePackageImporter } from 'sass';

compileString('@use "pkg:@stuff/tokens/colors"', {
  importers: [new NodePackageImporter()],
});
