# Clean the old files
rm -rf generators/app/typescript-module-template

# Clone the main repo
git clone https://github.com/owsas/typescript-module-template

# Remove the .git folder
rm -rf typescript-module-template/.git

# Move the repo to the generators folder
mv typescript-module-template generators/app