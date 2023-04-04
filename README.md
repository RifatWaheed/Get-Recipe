## Description:
    webApp for food recipe using React,Context API,CSS and fetched data from The Meal DB.



### Running React on Repl.it

[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

Using the two in conjunction is one of the fastest ways to build a web app.



### Getting Started
-Build the components
  1. Favorits.jsx
  2. Meals.jsx
  3. Modal.jsx
  4. Search.jsx

### Associate Context API
    made the 2 components 
    -AppProvider
    -AppContext
    passed the special prop "children"

### Create a custom hook so we don't have to export and import two contexts or more  
    in this case AppContext and useContext were needed to import in the Meals component
    we just have to create a custom hook and import it with destructuring it. It's a good 
    practice when we have more and more contexts we need to import , saves atleast 
    1 line of code for each added context

    -In context.jsx created a custom hook named useGolabalContext
    - export const useGlobalContext = () =>{
      return useContext(AppContext)
    }
    
### Typescript

Just rename any file from `.jsx` to `.tsx`. You can also try our [TypeScript Template](https://replit.com/@replit/React-TypeScript)