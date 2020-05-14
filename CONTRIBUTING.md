# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. 

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a 
   build.
2. Update the README.md with details of changes to the interface, this includes new environment 
   variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this
   Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of one other developer.

### Guide
Once you have cloned the project, run: `npm install` to install all dependencies across all packages in the project.
This will also install dependencies for nested packages.

### Start a dev build
To start a dev build, run `npm start`. This will start the docs, and watcher on the library locally.
Modules are resolved in package.json via relative paths: 
`"keyscroll": "file:../keyscroll"`. This means that the docs will always point to the latest changes you make in the keyscroll package.

### Build the project
The project can be built for production by running:
`$ npm run build`
The command will build all packages. The build can be found in the  `./dist` folder of the project, ready to be deployed to github pages.

### Start a production build
To serve the built project locally just run:
`$ npm run local-server`
This will host an index page from where you can navigate either to the Angular Demo page or to the Vanilla JS page.

### Testing
To test all packages in the project run:
`$ npm run test`.
Due to locally resolved dependencies, remember to build before running the test command.

### Linting
To lint all packages run:
`$ npm run lint`
