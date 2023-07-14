# Surreal Estate

I built this app using React and JavaScript as a project for Command Shift bootcamp. It was created using the npx script `create-react-app`. I wrote the tests using Jest and React Testing Library.

Features:
- The app has a navbar allowing users to navigate to different sections.
- Users can complete and submit a form to add a property listing.
- An alert is displayed confirming whether the form has been successfully submitted.
- A property card is rendered to display the details of each property added to the database. 
- Each property card has a `mailto` link which allows users to send an email to the address associated with the property.
- Properties can be sorted by price and filtered by location. Users can also search for keywords in the property title.

## Getting started

- Create a fork of this repo.
- Copy the fork's git address and clone to your machine using git clone.
- Use `npm install` to download the dependencies.
- Use `npm test` to run the tests.
- Use `npm start` to run the app in your browser.

## How to use

- Click the "Add a Property" link and complete the form to add a property.
- Click the "View Properties" link to see an overview of each property.
- Click the email icon on the property card too send an enquiry.
- Click a city name in the sidebar to filter by location.
- Click "Ascending" and "Descending" to filter by price.
- Enter a key word in the search bar and click the magnifying glass icon to search by property title. 

## Functionality to be added

- User login and logout.
- A Favourites section where users can save and remove properties.