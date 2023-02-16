#!/bin/bash

# It is currently impossible to dynamically generate Cypress tests based on data loaded asynchronously.
# That's just what we want so that the visual tests do not have to be updated when we add new pages.
# A common workaround is for the Cypress spec to `require` a JSON file containing the needed data.
# So, this script writes a JSON file containing all non-PDF URLs from sitemap.xml.
# This script is executed by the package.json script that creates/updates base images.

# A regex and sed expert could surely simplify this pipeline. Here's each step, in order.
  # Extract local URLs from sitemap.xml
  # Remove surrounding XML tags
  # Get rid of PDF URLs
  # Add surrounding quotation marks and trailing commas
  # Add 404 because it's not in sitemap but we will test it
  # Add opening brace
  # Add closing brace

grep 'http:\/\/0' ../../_site/sitemap.xml | \
sed 's/<loc>http:\/\/0\.0\.0\.0:4000\/\(.*\)<\/loc>/\1/g' | \
grep -v '\.pdf$' | \
sed 's/\(.*\)/"\1",/' | \
sed '$a "404"' | \
sed '1i [' | \
sed '$a ]' > sitemap.json
