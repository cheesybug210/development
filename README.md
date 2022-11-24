# Development

### Link to Deployed Website
[https://cheesybug210.github.io/development](https://cheesybug210.github.io/development)

### Goal and Value of the Application
The application is the online ordering page for a bakery. It allows the user to sort and filter by different criteria, add items to a cart, and see the total price for the items.
### Usability Principles Considered
- The filter box is placed on the left of the items, similar to other shopping websites. This ensures that users are already familiar with the website structure.
- The items are placed centrally, next to the filter box, also similar to other shopping websites.
- The cart is at the bottom. This is so that the user can just scroll down and see the items they have in their cart, along with their quantities and total price. This would usually be on a separate page, but for simplicity, it is on the same page.
### Organization of Components
- `App` is the main component, containing all other JSX and the `FilterBar`, `BakeryItem`, and `Cart` components.
  - The cart contents, `sort`, `type`, and `allergens` are stored in App as state
- `FilterBar` represents the filter bar on the left and contains Material UI form components
  - There is no state besides the props passed in
- `BakeryItem` represents the card displaying the item information
  - There is no state - everything related to the cart is handled in `App`
- `Cart` represents the shopping cart displaying the products, quantities, and prices, with overall price
  - There is no state besides the `cart` prop passed in 

### How Data is Passed Down Through Components
- `App`
  - There are no props passed into it
- `FilterBar`
  - The props passed into it are the state variables and setState functions for the `sort`, `type`, and `allergens` states
- `BakeryItem`
  - The props passed into it are the image file path, item name, price, calories, allergens, and description, as well as a function to add items to the cart
- `Cart`
  - The props passed into it are the `cart` state variable, the `setCart` state setting function to reset the state, and an `addToCart` function which adds items to the cart from the cart itself
### How the User Triggers State Changes
The user triggers state changes in a number of ways:
- By clicking the Reset filters button in the `FilterBox`, which modifies the `sort`, `type`, and `allergens` state variables
- By clicking a radio button or checkbox in the `FilterBox`, which modifies the relevant state variable
- By clicking the Add to Cart button in a `BakeryItem`, which modifies the `cart` state variable
- By clicking the trash, minus, plus, or Empty cart buttons in the `Cart` component, which modifies the `cart` state variable.
