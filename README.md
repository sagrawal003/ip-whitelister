# IP Whitelister App
IP whitelister app in AngularJS
## An application for a user to select a subscription plan and provide IP Addresses to white list those.
**About:** Once a user chooses the subscription plan and continue to next page then that page will display a form with input fields where user can enter valid IP addresses and save those to white list IP addresses.

As of now, there are two plans for the user: Basic or Premium.

The basic plan allows maximum 5 IP addresses to whitelist whereas Premium plan gives a user to white list more than 5 but maximum up to 10 IP Addresses.

## Setting up

Running the app by selecting the index.html and opening with any browser will cause errors because of the way the pages are looked for its relative paths.

So run the application on a web server like 'live-server' or 'http-server'. These web servers can be installed using the node package manager into the system and run the application index.html under any web server.

As localStorage is being used for saving data, the application should be accessed in the browser version where the browser supports it. 
OR else code can be written to handle localStorage check for browser support and handle data by any other storage.

## File Structure

The application structure is laid out as a component and module based for better code maintenance and scalability of new modules/components in the future.

- Separate modules have been created for the main app, router, services, and controller, and then those modules are injected to the main module app that is app.module.js
- Also, each component has its own directory for HTML and controllers.
- Shared folder contains all services and can have other services/directives as per need.
- 'assets' directory have empty contents for 'img' and 'js' directory which is added just to follow standard directory structure and those can be used for any images or js file in future is required.

### Save Button Feature
- Save button is enabled only if all provided IP Addresses in the input field is valid or existing IP Addresses are deleted.
- Once the form is saved then the 'Saved' button will display and then if a new row added or deleted then 'Save' button will display.

### Improvement/Side note

- Right now third party libraries related to the application like angular, bootstrap are directly added to index.html as CDN links to run the application directly without installing those from npm.
- Application also has a package.json file which can be used to handle all third party framework/libraries download via npm and uses the package from 'node_modules' directory.
- Webpack or any other build tools can be integrated if we want to use the latest es6 syntax and also to build the application to have minified application files to run with.
- saveWhiteListIps() has flags to set true/false at the start and end of the code which makes sense if save processing takes time. so probably can have promise or callback and set the flag to re-enable buttons on success.
- After saving the form, the Save button can be re-enabled with '+' or '-' icon click.
