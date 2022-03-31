# oddlogicmedia
# Business website for Odd Logic Photography and Film

## Introduction

This is a business website for Odd Logic Photography and Film. This serves as a portfolio of the artists' work to generate future clients. I have included a gallery of the photographer's work, about me section for the photographer and editor, a page with package information and calculator, and a contact form. The stylization choices are in line with the brand designed by the photographer.

## The CSS focus for this project includes:

1. A horizontal navigation menu that at desktop that collapses into a hamburger menu when reduced to mobile sizes. The animated hamburger button opens and closes, transforming to an X when opened, revealing a vertical navigation menu. This can be viewed on the home (index.html) and packages pages.

2. A Flexbox or CSS Grid to organize content areas based on mobile or desktop views that rearranges content from a horizontal layout to a vertical layout when reduced from desktop to mobile sizes. 
- photo gallery
- "Packages"
- package calculator/shopping cart

## The Javascript focus for this project includes:

1. A countdown clock that:
- calculates and displays data based on a external factor, ie. collects the current date and time from the user's system and calculates and displays in real time the remaining time until the set date.

2. A ‘Contact Us’ form that : 
- saves the values (on click of Submit button) to an external file ie. Local Storage
- implements a regular expression (regex) to ensure a field ie. email address is stored and displayed in same formatand then displays that information on 

3. A Package Calculator or pseudo shopping cart that:
- creates an array, dictionary or list, populates it with multiple values, retrieve at least one value, and use or display it in the application
- create and use a function that accepts two or more values, calculates or dertermines a new value based on those inputs, and returns a new value

## Media Queries

Media queries are implemented for the navigation hamburger button, the gallery images grid, and the packages flexbox.

### Instructions for Viewing

In order to view the site please:

1. Visit https://github.com/mallorinapg/oddlogicmedia
2. Clone the git and open index.html for viewing.

*Please feel free to leave any feedback on how the site could be improved.*

### Future plans for the project include:

1. Change the contact form to give the photographer access to the contact data, either through email or a password system.

2. Creating a pop-up form that is responsive to the contact form, thanking the user for their message and letting them know we will be back to them within 48hrs.

3. Perform a Web Accessibility Compliance review on site and document all the tools and testing used to verify site is accessible. This may involve a written write-up, screenshots, and other ways of showing that site has been evaluated for accessibility compliance, including  the report in your GitHub repository.

4. Reformat the header, footer, hamburger btn to come from json file.