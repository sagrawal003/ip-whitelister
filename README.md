# IP Whitelister App
ip whitelister app in AngularJS
## An application for user to select subscription plan and provide IP Addresses to white list those.
**About:** Once a user choose the subsscription plan and continue to next page then that page will display a form with a form with input fields where user can enter valid IP addresses and save those to white list app addresses.

As of now there are two plans for the user: Basic or Premium.

Basic plan allow maxium 5 IP addresses to whitelist where as Premium plan gives user to white list more than 5 but maximum up to 10 IP Addresses.

## Setting up

Running the app by selecting the index.html and opening with any browser will cause errors because of the way the pages are looked for it's relative paths.

So run the application on a web server like 'live-server' or 'http-server'. These web servers can be install using node package manager into the system and run the application index.html under the any web server.

## File Structure

The application structure is layed out as component and module based for better code maintenance and scalability of new modules/components in future.

- Separate modules has been create for main app, router, services and controller, and then thoses modules are injected to the main module app that is app.module.js
- Also each component has it's own directory for html and controllers.
- Shared folder contains all services and can have other services/directives as per need.
- 'assets' directory have empty contents for 'img' and 'js' directory which is added just to follow standard directory structure and those can be used for any images or js file in future is required.

### Features
- Save button is enabled only if all provided IP Addresses in the input field is valid or existing IP Addresses are deleted.
- Once form is saved then 'Saved' button will display and then if a new row added or deleted then 'Save' button will display.

### Improvement/Side note

- Right now third party libraries related to application like angular, bootstrap are directly added to index.html as CDN links  to run the application directly without installing those from npm.
- Application also has a package.json file which can be used to handle all third party framework/libraries download via npm and uses the package from 'node_modules' directory.
- Webpack or any other build tools can be integrated if we want to use latest es6 syntax and also to build the application to have a minified application files to run with.
- saveWhiteListIps() has flags to set true/false at the start and end of the code which make sense if ssave processing takes time. so probably can have promise or callback and set flag to re-enable buttons on success.
- After saving thhe form, Save button can be re-enabled with '+' or '-' icon click.
