||-->3 Project features

#1-> If you want to buy more than one course in a single platform, you can pick our site. Because there are so many courses in our website.

#2-> You can buy more than one course at a time but you cannot the select same course more than one time.

#3-> You cannot buy all of our courses at a time since there is a limit here. You have only 20 credit hours on our site. You have to choose your courses wisely. You can pick as many courses as possible in 20 credit hours.

||--> Discuss how you managed the state in your assignment project?

ans: I managed the state with "lifting state up" technique. When I clicked select in the SingleCard component, which card I clicked Cart component needed this value because the cart stored it. I need props in the SingleCard component from the Cards component and also need the Cart component which I clicked. Cards component and Cart component are children of App.jsx. Then I thought of the technique called "lifting state up". Instead of keeping this shared state within one component, I move it up the component tree to a higher level or parent component of all the components that need access to it. Then I pass it down to the child components that need access to it as props. When a child component needs to modify the shared state, it doesn't directly update it. Instead, it is call a callback function passed down as a props from the parent component. This callback function allows the parent component to update the state. Just like my website. I want to send which cards I clicked. In App.jsx I use useState which will be collected from the SingleCard component. Then I declare a function in App.jsx and pass it SingleCard component to Cards components. This function takes which of the cards are selected and passes to the Cart component with props.

Thats how I manage the state in my assignment.
